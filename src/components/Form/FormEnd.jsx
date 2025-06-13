import { forwardRef } from 'react'

import { Link } from 'react-router-dom'

import useGlobalState from '@/context/useGlobalState'

const FormEnd = forwardRef(() => {
  const { resetStates, setCurrentStep } = useGlobalState()

  const handleClick = () => {
    resetStates()
    setCurrentStep(0)
  }

  return (
    <div className='flex items-center justify-center p-4'>
      <div className='bg-primary text-primary-content shadow-2xl rounded-2xl p-8 max-w-md w-full text-center'>
        <h2 className='text-5xl font-extrabold mb-4'>Registro Terminado</h2>
        <p className='mb-3'>
          Concluiste satifactoriamente el registro del alumno.
        </p>
        <p className='mb-6 font-bold'>
          La inscripción termina con el pago de la misma.
        </p>
        <div className='flex flex-row justify-center gap-4'>
          <Link to='https://gomezdemendiola.edu.mx/'>
            <button
              className='btn btn-info py-2 rounded-xl'
              onClick={handleClick}
            >
              Salir
            </button>
          </Link>
          <Link to='/form'>
            <button
              className='btn btn-success py-2 rounded-xl'
              onClick={handleClick}
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
