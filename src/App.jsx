import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import HomePage from '@/HomePage'
import NotFound404 from '@/NotFound404'
import Form from '@/components/Form/Form'

const App = () => {
  const navigate = useNavigate()

  return (
    <>
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
                setTimeout(() => navigate('/form'), 0)
              }}
              className='btn btn-warning mx-1'
            >
              Formulario de Registro
            </button>
          </div>
        </div>

        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/form'
            element={<Form />}
          />
          <Route
            path='*'
            element={<NotFound404 />}
          />
        </Routes>
      </div>
      <Toaster
        position='top-center'
        reverseOrder={true}
      />
    </>
  )
}

export default App
