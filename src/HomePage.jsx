import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center'>
        <h1 className='text-3xl font-bold text-indigo-700 mb-4'>
          Pre-Registro GDM
        </h1>
        <p className='text-gray-600 mb-6'>
          Completa el formulario para asegurar tu lugar en el próximo ciclo
          escolar.
        </p>
        <Link to='/formulario'>
          <button className='w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-xl transition duration-300 cursor-pointer'>
            Iniciar Pre-Registro
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
