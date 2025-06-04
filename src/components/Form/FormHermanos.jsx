import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import useGlobalState from '@/context/useGlobalState'
import { DEFAULT_HERMANO } from '@/utils/defaultStates'
import { equalObjects } from '@/utils/compareObjects'
import FormLayout from '@/components/Layout/FormLayout'

const API_URL = import.meta.env.VITE_API_URL

const FormHermanos = () => {
  const { curp } = useGlobalState()
  const navigate = useNavigate()

  const [datosHermano1, setDatosHermano1] = useState(DEFAULT_HERMANO)
  const [datosHermano2, setDatosHermano2] = useState(DEFAULT_HERMANO)
  const [datosHermano3, setDatosHermano3] = useState(DEFAULT_HERMANO)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsSending(true)

    if (!equalObjects(datosHermano1, DEFAULT_HERMANO)) {
      const resHermano1 = await fetch(`${API_URL}/hermano`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...datosHermano1,
          curp_alumno: curp
        })
      })

      const dataHermano1 = await resHermano1.json()

      if (!resHermano1.ok) {
        toast.error(`Error al enviar los datos del hermano 1`)
        console.error(
          `Error al enviar los datos del hermano 1: ${dataHermano1.message}`
        )
        setIsSending(false)
        return
      }
    }

    if (!equalObjects(datosHermano2, DEFAULT_HERMANO)) {
      const resHermano2 = await fetch(`${API_URL}/hermano`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...datosHermano2,
          curp_alumno: curp
        })
      })

      const dataHermano2 = await resHermano2.json()

      if (!resHermano2.ok) {
        toast.error(`Error al enviar los datos del hermano 2`)
        console.error(
          `Error al enviar los datos del hermano 2: ${dataHermano2.message}`
        )
        setIsSending(false)
        return
      }
    }

    if (!equalObjects(datosHermano3, DEFAULT_HERMANO)) {
      const resHermano3 = await fetch(`${API_URL}/hermano`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...datosHermano3,
          curp_alumno: curp
        })
      })

      const dataHermano3 = await resHermano3.json()

      if (!resHermano3.ok) {
        toast.error(`Error al enviar los datos del hermano 3`)
        console.error(
          `Error al enviar los datos del hermano 3: ${dataHermano3.message}`
        )
        setIsSending(false)
        return
      }
    }

    setIsSending(false)
    toast.success('Datos de hermanos enviados correctamente')
    navigate('/form-contacto')
  }

  return (
    <FormLayout>
      <div className='w-full mx-auto p-6 text-white rounded-md shadow-md'>
        <h2 className='font-bold text-2xl mb-6 text-center'>
          Hermanos Inscritos en el Colegio
        </h2>

        <h3 className='font-bold text-center mb-4'>Hermano 1</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:px-60 mb-16'>
          <label className='floating-label m-auto w-sm md:w-md'>
            <span>Nombre Completo</span>
            <input
              value={datosHermano1.nombre}
              onChange={(e) =>
                setDatosHermano1({ ...datosHermano1, nombre: e.target.value })
              }
              minLength={0}
              maxLength={70}
              type='text'
              placeholder='Nombre Completo'
              className='input input-md'
            />
          </label>

          <label className='select select-md m-auto'>
            <span className='label'>Escolaridad</span>
            <select
              value={datosHermano1.nivel}
              onChange={(e) =>
                setDatosHermano1({ ...datosHermano1, nivel: e.target.value })
              }
            >
              <option
                disabled
                value='0'
              >
                Escoge la escolaridad...
              </option>
              <option value='Preescolar'>Preescolar</option>
              <option value='Primaria'>Primaria</option>
              <option value='Secundaria'>Secundaria</option>
              <option value='Bachillerato'>Bachillerato</option>
            </select>
          </label>
        </div>

        <h3 className='font-bold text-center mb-4'>Hermano 2</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:px-60 mb-16'>
          <label className='floating-label m-auto w-sm md:w-md'>
            <span>Nombre Completo</span>
            <input
              value={datosHermano2.nombre}
              onChange={(e) =>
                setDatosHermano2({ ...datosHermano2, nombre: e.target.value })
              }
              minLength={0}
              maxLength={70}
              type='text'
              placeholder='Nombre Completo'
              className='input input-md'
            />
          </label>

          <label className='select select-md m-auto'>
            <span className='label'>Escolaridad</span>
            <select
              value={datosHermano2.nivel}
              onChange={(e) =>
                setDatosHermano2({ ...datosHermano2, nivel: e.target.value })
              }
            >
              <option
                disabled
                value='0'
              >
                Escoge la escolaridad...
              </option>
              <option value='Preescolar'>Preescolar</option>
              <option value='Primaria'>Primaria</option>
              <option value='Secundaria'>Secundaria</option>
              <option value='Bachillerato'>Bachillerato</option>
            </select>
          </label>
        </div>

        <h3 className='font-bold text-center mb-4'>Hermano 3</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:px-60 mb-16'>
          <label className='floating-label m-auto w-sm md:w-md'>
            <span>Nombre Completo</span>
            <input
              value={datosHermano3.nombre}
              onChange={(e) =>
                setDatosHermano3({ ...datosHermano3, nombre: e.target.value })
              }
              minLength={0}
              maxLength={70}
              type='text'
              placeholder='Nombre Completo'
              className='input input-md'
            />
          </label>

          <label className='select select-md m-auto'>
            <span className='label'>Escolaridad</span>
            <select
              value={datosHermano3.nivel}
              onChange={(e) =>
                setDatosHermano3({ ...datosHermano3, nivel: e.target.value })
              }
            >
              <option
                disabled
                value='0'
              >
                Escoge la escolaridad...
              </option>
              <option value='Preescolar'>Preescolar</option>
              <option value='Primaria'>Primaria</option>
              <option value='Secundaria'>Secundaria</option>
              <option value='Bachillerato'>Bachillerato</option>
            </select>
          </label>
        </div>
      </div>
      <div className='flex justify-between mt-4'>
        <button
          className='mr-4 px-4 py-2 btn btn-success rounded ml-auto'
          onClick={handleSubmit}
          disabled={isSending}
          type='submit'
        >
          {isSending && (
            <span className='loading loading-spinner loading-sm'></span>
          )}
          {!isSending && 'Enviar'}
        </button>
      </div>
    </FormLayout>
  )
}

export default FormHermanos
