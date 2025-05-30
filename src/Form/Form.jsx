import { useState } from 'react'

import { useGlobalState } from '../GlobalState'
import FormAlumno from './FormAlumno'
import FormTutores from './FormTutores'
import FormHermanos from './FormHermanos'
import FormContacto from './FormContacto'
import FormPago from './FormPago'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const Form = () => {
  const [step, setStep] = useState(1)

  const prevStep = () => setStep((prev) => prev - 1)
  const nextStep = () => setStep((prev) => prev + 1)

  const { enviarDatos } = useGlobalState()

  const steps = [
    <FormAlumno key='1' />,
    <FormTutores key='2' />,
    <FormHermanos key='3' />,
    <FormContacto key='4' />,
    <FormPago key='5' />
  ]

  return (
    <div className='container my-16'>
      <h3 className='text-center font-bold text-4xl mb-6'>
        Registro del Alumno
      </h3>

      <div className='flex'>{steps[step - 1]}</div>

      <div className='flex justify-between mt-4'>
        {step > 1 && (
          <button
            onClick={() => {
              prevStep()
              scrollToTop()
            }}
            className='ml-4 px-4 py-2 btn btn-error text-white rounded '
          >
            Atrás
          </button>
        )}

        {step < steps.length ? (
          <button
            onClick={() => {
              nextStep()
              scrollToTop()
            }}
            className='mr-4 px-4 py-2 btn btn-secondary text-white rounded ml-auto'
          >
            Siguiente
          </button>
        ) : (
          <button
            className='mr-4 px-4 py-2 btn btn-success text-white rounded ml-auto'
            onClick={enviarDatos}
          >
            Enviar
          </button>
        )}
      </div>
    </div>
  )
}

export default Form
