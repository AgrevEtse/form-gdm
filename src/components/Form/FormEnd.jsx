import { Link } from 'react-router-dom'

const FormEnd = () => {
  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='bg-primary text-primary-content shadow-2xl rounded-2xl p-8 max-w-md w-full text-center'>
        <h2 className='text-5xl font-extrabold mb-4'>Registro Terminado</h2>
        <p className='mb-6'>
          Concluiste satifactoriamente el registro del alumno.
        </p>
        <div className='flex flex-row justify-center gap-4'>
          <Link to='/'>
            <button className='btn btn-info py-2 rounded-xl'>
              Volver al Inicio
            </button>
          </Link>
          <Link to='/form-alumno'>
            <button className='btn btn-success py-2 rounded-xl'>
              Registar otro Alumno
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FormEnd
