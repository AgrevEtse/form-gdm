import { useState, useRef } from 'react'
import toast from 'react-hot-toast'

import useGlobalState from '@/context/useGlobalState'
import FormAlumno from '@/components/Form/FormAlumno'
import FormTutores from '@/components/Form/FormTutores'
import FormHermanos from '@/components/Form/FormHermanos'
import FormContacto from '@/components/Form/FormContacto'
import FormPago from '@/components/Form/FormPago'
import FormEnd from '@/components/Form/FormEnd'

import { equalObjects } from '@/utils/compareObjects'
import { DEFAULT_HERMANO, DEFAULT_CONTACTO } from '@/utils/defaultStates'

const API_URL = import.meta.env.VITE_API_URL

const Form = () => {
  const { curp, form, currentStep, setCurrentStep, resetStates } =
    useGlobalState()
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

  const postForm = async () => {
    await fetch(`${API_URL}/alumno`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...form.alumno,
        fecha_nacimiento: new Date(form.alumno.fecha_nacimiento).toISOString(),
        curp
      })
    })

    await fetch(`${API_URL}/escuelaprocedencia`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...form.escuela_procedencia,
        curp_alumno: curp
      })
    })

    await fetch(`${API_URL}/domicilio`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...form.domicilio,
        curp_alumno: curp
      })
    })

    await fetch(`${API_URL}/inscripcion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id_ciclo: form.inscripcion.id_ciclo,
        id_escolaridad: form.inscripcion.id_escolaridad,
        esta_activo: form.inscripcion.esta_activo,
        fecha_inscripcion: new Date(
          form.inscripcion.fecha_inscripcion
        ).toISOString(),
        curp_alumno: curp
      })
    })

    await fetch(`${API_URL}/tutor1`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...form.tutor1,
        fecha_nacimiento: new Date(form.tutor1.fecha_nacimiento).toISOString(),
        curp_alumno: curp
      })
    })

    await fetch(`${API_URL}/tutor2`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...form.tutor2,
        fecha_nacimiento: new Date(form.tutor2.fecha_nacimiento).toISOString(),
        curp_alumno: curp
      })
    })

    if (!equalObjects(form.hermano1, DEFAULT_HERMANO)) {
      await fetch(`${API_URL}/hermano`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...form.hermano1,
          curp_alumno: curp
        })
      })
    }

    if (!equalObjects(form.hermano2, DEFAULT_HERMANO)) {
      await fetch(`${API_URL}/hermano`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...form.hermano2,
          curp_alumno: curp
        })
      })
    }

    if (!equalObjects(form.hermano3, DEFAULT_HERMANO)) {
      await fetch(`${API_URL}/hermano`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...form.hermano3,
          curp_alumno: curp
        })
      })
    }

    if (!equalObjects(form.contacto1, DEFAULT_CONTACTO)) {
      await fetch(`${API_URL}/contactoemergencia`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...form.contacto1,
          curp_alumno: curp
        })
      })
    }

    if (!equalObjects(form.contacto2, DEFAULT_CONTACTO)) {
      await fetch(`${API_URL}/contactoemergencia`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...form.contacto2,
          curp_alumno: curp
        })
      })
    }

    if (!equalObjects(form.contacto3, DEFAULT_CONTACTO)) {
      await fetch(`${API_URL}/contactoemergencia`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...form.contacto3,
          curp_alumno: curp
        })
      })
    }

    await fetch(`${API_URL}/personapagos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...form.pago,
        curp_alumno: curp
      })
    })
  }

  const enviarForm = async () => {
    setIsLoading(true)
    try {
      await stepRef.current?.validate?.()
      postForm()

      scrollToTop()
      setCurrentStep((prev) => prev + 1)
      setIsLoading(false)

      toast.success('Formulario enviado correctamente')
      resetStates()
    } catch (error) {
      toast.error(error.message)
      setIsLoading(false)
      return
    }
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
