import useGlobalState from '@/context/useGlobalState'

const API_URL = import.meta.env.VITE_API_URL

const FormReinscripcion = () => {
  const { curp, setCurp } = useGlobalState()

  const fetchDataFromCurp = async () => {
    try {
      const res = await fetch(`${API_URL}/inscripcion/fromcurp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          curp: curp
        })
      })

      const data = await res.json()

      // TODO: MAPEAR DATOS A LA RESPUESTA DE LA API
      console.log(data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className='container my-16 flex h-full flex-col items-center justify-center'>
      <h3 className='mb-10 text-center text-3xl font-bold'>
        Ingresa la CURP del alumno
      </h3>
      <label className='floating-label w-2xs'>
        <span>CURP</span>
        <input
          type='text'
          placeholder='CURP'
          className='input input-md'
          value={curp}
          onChange={(e) => setCurp(e.target.value)}
        />
      </label>

      <div className='flex flex-col items-center justify-center'>
        <button
          className='btn btn-primary'
          onClick={fetchDataFromCurp}
        >
          Buscar
        </button>
      </div>
    </div>
  )
}

export default FormReinscripcion
