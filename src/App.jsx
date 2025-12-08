import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import HomePage from '@/components/Pages/HomePage'
import Reinscripcion from '@/components/Pages/Reinscripcion'
import NotFound404 from '@/components/Pages/NotFound404'
import Form from '@/components/Pages/Form/Form'
import useGlobalState from '@/context/useGlobalState'

const App = () => {
  const navigate = useNavigate()

  const { resetStates } = useGlobalState()

  const handleClick = () => {
    resetStates()
  }

  return (
    <>
      <div className='container mx-auto'>
        <div className='navbar bg-primary text-primary-content w-full rounded-2xl shadow-sm'>
          <div className='flex flex-1 items-center'>
            <Link
              className='btn btn-secondary text-xl'
              to='/'
            >
              GDM
            </Link>
          </div>

          <div>
            <Link to='/form'>
              <button
                onClick={handleClick}
                className='btn btn-warning mx-1'
              >
                Nueva Inscripción
              </button>
            </Link>
            <Link to='/reinscripcion'>
              <button
                onClick={handleClick}
                className='btn btn-success mx-1'
              >
                Reinscripción
              </button>
            </Link>
          </div>
        </div>

        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/reinscripcion'
            element={<Reinscripcion />}
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
