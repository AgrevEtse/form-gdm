import { useState, useRef } from 'react'
import toast from 'react-hot-toast'

import useGlobalState from '@/context/useGlobalState'
import FormAlumno from '@/components/Pages/Form/FormAlumno'
import FormTutores from '@/components/Pages/Form/FormTutores'
import FormHermanos from '@/components/Pages/Form/FormHermanos'
import FormContacto from '@/components/Pages/Form/FormContacto'
import FormPago from '@/components/Pages/Form/FormPago'
import FormMamada from '@/components/Pages/Form/FormMamada'
import FormEnd from '@/components/Pages/Form/FormEnd'

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
    <div className='container my-16 h-full'>
      {currentStep !== 6 && (
        <h3 className='mb-6 text-center text-4xl font-bold'>
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
              className='btn btn-error mr-auto ml-4 rounded px-4 py-2'
            >
              Anterior
            </button>
          )}
          {currentStep < components.length - 2 ? (
            <button
              onClick={nextStep}
              disabled={isLoading}
              className='btn btn-info mr-4 ml-auto rounded px-4 py-2'
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
              className='btn btn-success mr-4 ml-auto rounded px-4 py-2'
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
