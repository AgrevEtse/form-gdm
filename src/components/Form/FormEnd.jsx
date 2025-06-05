import { forwardRef } from 'react'

import { Link } from 'react-router-dom'

import useGlobalState from '@/context/useGlobalState'

const FormEnd = forwardRef(() => {
  const { resetStates } = useGlobalState()

  return (
    <div className='flex items-center justify-center p-4'>
      <div className='bg-primary text-primary-content shadow-2xl rounded-2xl p-8 max-w-md w-full text-center'>
        <h2 className='text-5xl font-extrabold mb-4'>Registro Terminado</h2>
        <p className='mb-6'>
          Concluiste satifactoriamente el registro del alumno.
        </p>
        <div className='flex flex-row justify-center gap-4'>
          <Link to='/'>
            <button
              className='btn btn-info py-2 rounded-xl'
              onClick={resetStates}
            >
              Volver al Inicio
            </button>
          </Link>
          <Link to='/form'>
            <button
              className='btn btn-success py-2 rounded-xl'
              onClick={resetStates}
            >
              Registar otro Alumno
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
})

FormEnd.displayName = 'FormFinal'

export default FormEnd
