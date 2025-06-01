import { useState } from 'react'

import { useGlobalState } from '../context/GlobalStateContext'
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
  const { enviarDatos } = useGlobalState()

  const [step, setStep] = useState(1)
  const [isSending, setIsSending] = useState(false)

  const prevStep = () => setStep((prev) => prev - 1)
  const nextStep = () => setStep((prev) => prev + 1)

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsSending(true)
    enviarDatos()
      .then(() => {
        setIsSending(false)
        alert('Datos enviados correctamente')
      })
      .catch((error) => {
        setIsSending(false)
        console.error('Error al enviar los datos:', error)
        alert('Error al enviar los datos. Inténtalo de nuevo más tarde.')
      })
  }

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
            onClick={handleSubmit}
            disabled={isSending}
          >
            {isSending && (
              <span className='loading loading-spinner loading-sm mr-2'></span>
            )}
            {!isSending && 'Enviar'}
          </button>
        )}
      </div>
    </div>
  )
}

export default Form
