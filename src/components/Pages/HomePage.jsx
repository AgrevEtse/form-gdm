import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='flex min-h-screen items-center justify-center p-4'>
      <div className='w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl'>
        <h1 className='mb-4 text-3xl font-bold text-indigo-700'>
          Registro GDM
        </h1>
        <p className='mb-6 text-gray-600'>
          Completa el formulario para asegurar tu lugar en el próximo ciclo
          escolar.
        </p>
        <Link
          to='/form'
          className='block'
        >
          <button className='w-full cursor-pointer rounded-xl bg-indigo-500 py-2 text-white transition duration-300 hover:bg-indigo-600'>
            Iniciar Registro
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
