import { useState, useRef } from 'react'
import toast from 'react-hot-toast'

import useGlobalState from '@/context/useGlobalState'
import FormAlumno from '@/components/Form/FormAlumno'
import FormTutores from '@/components/Form/FormTutores'
import FormHermanos from '@/components/Form/FormHermanos'
import FormContacto from '@/components/Form/FormContacto'
import FormPago from '@/components/Form/FormPago'
import FormMamada from '@/components/Form/FormMamada'
import FormEnd from '@/components/Form/FormEnd'

import postForm from '@/utils/postForm'

const Form = () => {
  const { curp, form, currentStep, setCurrentStep } = useGlobalState()
  const stepRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  const components = [
    FormAlumno,
    FormTutores,
    FormHermanos,
    FormContacto,
    FormPago,
    FormMamada,
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
    try {
      await stepRef.current?.validate?.()

      scrollToTop()
      setCurrentStep((prev) => prev + 1)
      setIsLoading(false)
    } catch (error) {
      toast.error(error.message)
      setIsLoading(false)
      return
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1)
    scrollToTop()
  }

  const enviarForm = async () => {
    setIsLoading(true)
    try {
      await stepRef.current?.validate?.()
      await postForm({ curp, form })

      scrollToTop()
      setCurrentStep((prev) => prev + 1)
      setIsLoading(false)

      toast.success('Formulario enviado correctamente')
    } catch (error) {
      toast.error(error.message)
      setIsLoading(false)
      return
    }
  }

  return (
    <div className='h-full my-16 container'>
      {currentStep !== 6 && (
        <h3 className='text-center font-bold text-4xl mb-6'>
          Registro del Alumno
        </h3>
      )}

      <CurrentComponent ref={stepRef} />

      {currentStep !== 6 && (
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
