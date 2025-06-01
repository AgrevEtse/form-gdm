import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import useGlobalState from '@/context/useGlobalState'
import { DEFAULT_CONTACTO } from '@/utils/defaultStates'
import { equalObjects } from '@/utils/compareObjects'
import FormLayout from '@/Form/FormLayout'

const API_URL = import.meta.env.VITE_API_URL

const FormContacto = () => {
  const { curp } = useGlobalState()
  const navigate = useNavigate()

  const [datosContacto1, setDatosContacto1] = useState(DEFAULT_CONTACTO)
  const [datosContacto2, setDatosContacto2] = useState(DEFAULT_CONTACTO)
  const [datosContacto3, setDatosContacto3] = useState(DEFAULT_CONTACTO)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsSending(true)

    if (!equalObjects(datosContacto1, DEFAULT_CONTACTO)) {
      const resContacto1 = await fetch(`${API_URL}/contactoemergencia`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...datosContacto1,
          curp_alumno: curp
        })
      })

      const dataContacto1 = await resContacto1.json()

      if (!resContacto1.ok) {
        toast.error('Error al enviar los datos del contacto 1')
        console.error(
          `Error al enviar los datos del contacto 1: ${dataContacto1.message}`
        )
        setIsSending(false)
        return
      }
    }

    if (!equalObjects(datosContacto2, DEFAULT_CONTACTO)) {
      const resContacto2 = await fetch(`${API_URL}/contactoemergencia`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...datosContacto2,
          curp_alumno: curp
        })
      })

      const dataContacto2 = await resContacto2.json()

      if (!resContacto2.ok) {
        toast.error('Error al enviar los datos del contacto 2')
        console.error(
          `Error al enviar los datos del contacto 2: ${dataContacto2.message}`
        )
        setIsSending(false)
        return
      }
    }

    if (!equalObjects(datosContacto3, DEFAULT_CONTACTO)) {
      const resContacto3 = await fetch(`${API_URL}/contactoemergencia`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...datosContacto3,
          curp_alumno: curp
        })
      })

      const dataContacto3 = await resContacto3.json()

      if (!resContacto3.ok) {
        toast.error('Error al enviar los datos del contacto 3')
        console.error(
          `Error al enviar los datos del contacto 3: ${dataContacto3.message}`
        )
        setIsSending(false)
        return
      }
    }

    setIsSending(false)
    toast.success('Datos de contactos de emergencia enviados correctamente')
    navigate('/form-pago')
  }

  return (
    <FormLayout>
      <div className='w-full mx-auto p-6 bg-gray-900 text-white rounded-md shadow-md'>
        <h2 className='font-bold text-2xl mb-6 text-center'>
          Contactos de Emergencia
        </h2>

        <h3 className='font-bold text-center mb-4'>Contacto de Emergencia 1</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:px-16 mb-16'>
          <label className='floating-label m-auto w-sm md:w-md'>
            <span>
              Nombre Completo <span className='text-rose-600'>*</span>
            </span>
            <input
              value={datosContacto1.nombre}
              onChange={(e) =>
                setDatosContacto1({ ...datosContacto1, nombre: e.target.value })
              }
              type='text'
              placeholder='Nombre Completo *'
              className='input input-md'
            />
          </label>

          <label className='floating-label m-auto w-sm md:w-md'>
            <span>
              Teléfono <span className='text-rose-600'>*</span>
            </span>
            <input
              value={datosContacto1.telefono}
              onChange={(e) =>
                setDatosContacto1({
                  ...datosContacto1,
                  telefono: e.target.value
                })
              }
              type='tel'
              placeholder='Télefono *'
              pattern='[0-9]{10}'
              className='input input-md'
            />
          </label>

          <label className='select select-md m-auto'>
            <span className='label'>
              Parentesco <span className='text-rose-600'>*</span>
            </span>
            <select
              value={datosContacto1.parentesco}
              onChange={(e) =>
                setDatosContacto1({
                  ...datosContacto1,
                  parentesco: Number(e.target.value)
                })
              }
            >
              <option
                disabled
                value='0'
              >
                Escoge el parentesco...
              </option>
              <option value='1'>Papá</option>
              <option value='2'>Mamá</option>
              <option value='3'>Tío</option>
              <option value='4'>Tía</option>
              <option value='5'>Abuelo</option>
              <option value='6'>Abuela</option>
            </select>
          </label>
        </div>

        <h3 className='font-bold text-center mb-4'>Contacto de Emergencia 2</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:px-16 mb-16'>
          <label className='floating-label m-auto w-sm md:w-md'>
            <span>
              Nombre Completo <span className='text-rose-600'>*</span>
            </span>
            <input
              value={datosContacto2.nombre}
              onChange={(e) =>
                setDatosContacto2({ ...datosContacto2, nombre: e.target.value })
              }
              type='text'
              placeholder='Nombre Completo *'
              className='input input-md'
            />
          </label>

          <label className='floating-label m-auto w-sm md:w-md'>
            <span>
              Teléfono <span className='text-rose-600'>*</span>
            </span>
            <input
              value={datosContacto2.telefono}
              onChange={(e) =>
                setDatosContacto2({
                  ...datosContacto2,
                  telefono: e.target.value
                })
              }
              type='tel'
              placeholder='Télefono *'
              pattern='[0-9]{10}'
              className='input input-md'
            />
          </label>

          <label className='select select-md m-auto'>
            <span className='label'>
              Parentesco <span className='text-rose-600'>*</span>
            </span>
            <select
              value={datosContacto2.parentesco}
              onChange={(e) =>
                setDatosContacto2({
                  ...datosContacto2,
                  parentesco: Number(e.target.value)
                })
              }
            >
              <option
                disabled
                value='0'
              >
                Escoge el parentesco...
              </option>
              <option value='1'>Papá</option>
              <option value='2'>Mamá</option>
              <option value='3'>Tío</option>
              <option value='4'>Tía</option>
              <option value='5'>Abuelo</option>
              <option value='6'>Abuela</option>
            </select>
          </label>
        </div>

        <h3 className='font-bold text-center mb-4'>Contacto de Emergencia 3</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:px-16 mb-16'>
          <label className='floating-label m-auto w-sm md:w-md'>
            <span>
              Nombre Completo <span className='text-rose-600'>*</span>
            </span>
            <input
              value={datosContacto3.nombre}
              onChange={(e) =>
                setDatosContacto3({ ...datosContacto3, nombre: e.target.value })
              }
              type='text'
              placeholder='Nombre Completo *'
              className='input input-md'
            />
          </label>

          <label className='floating-label m-auto w-sm md:w-md'>
            <span>
              Teléfono <span className='text-rose-600'>*</span>
            </span>
            <input
              value={datosContacto3.telefono}
              onChange={(e) =>
                setDatosContacto3({
                  ...datosContacto3,
                  telefono: e.target.value
                })
              }
              type='tel'
              placeholder='Télefono *'
              pattern='[0-9]{10}'
              className='input input-md'
            />
          </label>

          <label className='select select-md m-auto'>
            <span className='label'>
              Parentesco <span className='text-rose-600'>*</span>
            </span>
            <select
              value={datosContacto3.parentesco}
              onChange={(e) =>
                setDatosContacto3({
                  ...datosContacto3,
                  parentesco: Number(e.target.value)
                })
              }
            >
              <option
                disabled
                value='0'
              >
                Escoge el parentesco...
              </option>
              <option value='1'>Papá</option>
              <option value='2'>Mamá</option>
              <option value='3'>Tío</option>
              <option value='4'>Tía</option>
              <option value='5'>Abuelo</option>
              <option value='6'>Abuela</option>
            </select>
          </label>
        </div>
      </div>
      <div className='flex justify-between mt-4'>
        <button
          className='mr-4 px-4 py-2 btn btn-success text-white rounded ml-auto'
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

export default FormContacto
