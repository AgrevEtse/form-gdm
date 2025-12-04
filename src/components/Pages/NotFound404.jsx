import { Link } from 'react-router-dom'

const NotFound404 = () => {
  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center'>
        <h2 className='text-5xl font-extrabold text-red-600 mb-4'>404</h2>
        <p className='text-gray-600 mb-6'>
          Página no encontrada. Parece que te has perdido.
        </p>
        <Link to='/'>
          <button className='w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition duration-300 cursor-pointer'>
            Volver al Inicio
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound404
