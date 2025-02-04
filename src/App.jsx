import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import HomePage from './HomePage'
import NotFound404 from './NotFound404'
import Formulario from './Form/Form'
import ListAlumnos from './Alumnos/ListAlumnos'
import ConsultarAlumno from './Alumnos/Alumno'

function App() {
  const navigate = useNavigate()

  return (
    <div className='container mx-auto'>
      <div className='navbar bg-primary text-primary-content shadow-sm w-full rounded-2xl'>
        <div className='flex flex-1 items-center'>
          <Link
            className='btn btn-ghost text-xl'
            to='/'
          >
            GDM
          </Link>
        </div>
        <div>
          <button
            onClick={() => {
              navigate('/')
              setTimeout(() => navigate('/formulario'), 0)
            }}
            className='btn btn-warning mx-1'
          >
            Formulario Pre-Registro
          </button>
        </div>
      </div>

      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/formulario'
          element={<Formulario />}
        />
        <Route
          path='/alumnos'
          element={<ListAlumnos />}
        />
        <Route
          path='/alumnos/:curp'
          element={<ConsultarAlumno />}
        />
        <Route
          path='*'
          element={<NotFound404 />}
        />
      </Routes>
    </div>
  )
}

export default App
