import { useState, useRef } from 'react'

import useGlobalState from '@/context/useGlobalState'
import FormAlumno from '@/components/Form/FormAlumno'
import FormTutores from '@/components/Form/FormTutores'
import FormHermanos from '@/components/Form/FormHermanos'
import FormContacto from '@/components/Form/FormContacto'
import FormPago from '@/components/Form/FormPago'
import FormEnd from '@/components/Form/FormEnd'

const Form = () => {
  const { currentStep, setCurrentStep } = useGlobalState()
  const stepRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  const components = [
    FormAlumno,
    FormTutores,
    FormHermanos,
    FormContacto,
    FormPago,
    FormEnd
  ]

  const CurrentComponent = components[currentStep]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const nextStep = async () => {
    setIsLoading(true)
    // const isValid = await stepRef.current?.validate?.()
    // if (isValid) {
    //   setCurrentStep((prev) => prev + 1)
    // }
    scrollToTop()
    setCurrentStep((prev) => prev + 1)
    setIsLoading(false)
  }

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1)
    scrollToTop()
  }

  const enviarForm = async () => {
    setIsLoading(true)
    setCurrentStep((prev) => prev + 1)
    setIsLoading(false)
  }

  return (
    <div className='container my-16'>
      {currentStep !== 5 && (
        <h3 className='text-center font-bold text-4xl mb-6'>
          Registro del Alumno
        </h3>
      )}

      <CurrentComponent ref={stepRef} />

      {currentStep !== 5 && (
        <div className='mt-4 flex justify-between'>
          {currentStep > 0 && (
            <button
              onClick={prevStep}
              disabled={isLoading}
              className='btn btn-error rounded px-4 py-2 ml-4 mr-auto'
            >
              Anterior
            </button>
          )}
          {currentStep < components.length - 2 ? (
            <button
              onClick={nextStep}
              disabled={isLoading}
              className='btn btn-info rounded ml-auto mr-4 px-4 py-2'
            >
              {isLoading && (
                <span className='loading loading-spinner loading-sm'></span>
              )}
              {!isLoading && 'Siguiente'}
            </button>
          ) : (
            <button
              onClick={enviarForm}
              disabled={isLoading}
              className='btn btn-success rounded ml-auto mr-4 px-4 py-2'
            >
              Enviar
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default Form
