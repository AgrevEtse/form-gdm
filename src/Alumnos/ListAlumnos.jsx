import { useEffect, useState } from "react"

import ListAlumnosItem from "./ListAlumnosItem"

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const itemsForPage = 6

const ListAlumnos = () => {
  const [alumnos, setAlumnos] = useState([])
  const [nAlumnos, setNAlumnos] = useState(0)

  const [currentPage, setCurrentPage] = useState(1)

   const indexOfLastItem = currentPage * itemsForPage
   const indexOfFirstItem = indexOfLastItem - itemsForPage
   const currentItems = alumnos.slice(indexOfFirstItem, indexOfLastItem)

   const totalPages = Math.ceil(alumnos.length / itemsForPage)

   const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }

  const renderPageNumbers = () => {
    const pages = []

    const addPage = (page) => {
      pages.push(
        <button
          key={page}
          onClick={() => {
            goToPage(page)
            scrollToTop()
          }}
          className={`btn btn-sm ${currentPage === page ? 'btn-primary' : 'btn-outline'}`}
        >
          {page}
        </button>
      )
    }

    const addEllipsis = (key) => {
      pages.push(
        <span key={key} className="px-3 text-gray-500">...</span>
      )
    }

    for (let page = 1; page <= totalPages; page++) {
      if (
        page <= 2 ||                           // Primeras dos páginas
        page >= totalPages - 1 ||              // Últimas dos páginas
        (page >= currentPage - 1 && page <= currentPage + 1) // Página actual y adyacentes
      ) {
        addPage(page)
      } else if (
        page === 3 && currentPage > 4 // Ellipsis después de la segunda página
      ) {
        addEllipsis('start')
        page = currentPage - 2 // Saltar a la página antes de la actual
      } else if (
        page === currentPage + 2 && currentPage < totalPages - 3 // Ellipsis antes de las últimas dos páginas
      ) {
        addEllipsis('end')
        page = totalPages - 2 // Saltar a la penúltima página
      }
    }

    return pages
  }

  const fetchAlumnos = async () => {
    const resAlumnos = await fetch('http://66.179.241.7:3000/alumno')
    const dataAlumnos = await resAlumnos.json()

    setAlumnos(dataAlumnos)
    setNAlumnos(dataAlumnos.length)
  }

  useEffect(() => {
    fetchAlumnos()
  }, [])

  return (
    <div className="container my-16">
      <h3 className="text-center font-bold text-4xl mb-6">Lista de Alumnos</h3>

      <p className="m-4 text-center text-xl"><span className="font-bold">Alumnos Registrados</span>: {nAlumnos}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {currentItems.map((alumno) => (
          <ListAlumnosItem key={alumno.curp} datos={alumno} />
        ))}
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        <button
          onClick={() => {
            goToPage(currentPage - 1)
            scrollToTop()
          }}
          disabled={currentPage === 1}
          className="btn btn-sm btn-outline"
        >
          ⬅️ Anterior
        </button>

        {renderPageNumbers()}

        <button
          onClick={() => {
            goToPage(currentPage + 1)
            scrollToTop()
          }}
          disabled={currentPage === totalPages}
          className="btn btn-sm btn-outline"
        >
          Siguiente ➡️
        </button>
      </div>
    </div>
  )
}

export default ListAlumnos
