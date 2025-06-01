import { Routes, Route, Link, useNavigate } from 'react-router-dom'

import HomePage from '@/HomePage'
import NotFound404 from '@/NotFound404'
import FormAlumno from '@/Form/FormAlumno'
import FormTutores from '@/Form/FormTutores'
import FormHermanos from '@/Form/FormHermanos'
import FormContacto from '@/Form/FormContacto'
import FormPago from '@/Form/FormPago'

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
              setTimeout(() => navigate('/form-alumno'), 0)
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
          path='form-alumno'
          element={<FormAlumno />}
        />
        <Route
          path='form-tutores'
          element={<FormTutores />}
        />
        <Route
          path='form-hermanos'
          element={<FormHermanos />}
        />
        <Route
          path='form-contacto'
          element={<FormContacto />}
        />
        <Route
          path='form-pago'
          element={<FormPago />}
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
