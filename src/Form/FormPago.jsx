import { useState } from 'react'

import useGlobalState from '@/context/useGlobalState'
import { DEFAULT_PAGO } from '@/utils/defaultStates'
import FormLayout from '@/Form/FormLayout'

const FormPago = () => {
  const { curp } = useGlobalState()

  const [datosPago, setDatosPago] = useState(DEFAULT_PAGO)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsSending(true)

    const datos = {
      datosPago,
      curp
    }

    // Aquí puedes enviar los datos a tu API o manejarlos como necesites
    console.log('Datos enviados:', datos)

    // Simulación de envío exitoso
    setTimeout(() => {
      setIsSending(false)
      alert('Datos enviados correctamente')
    }, 2000)
  }

  return (
    <FormLayout>
      <div className='w-full mx-auto p-6 bg-gray-900 text-white rounded-md shadow-mds'>
        <h2 className='font-bold text-2xl mb-6 text-center'>
          Datos de Estados de Cuenta
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:px-16 mb-16'>
          <label className='floating-label m-auto w-sm md:w-md'>
            <span>
              Nombre Completo <span className='text-rose-600'>*</span>
            </span>
            <input
              value={datosPago.nombre}
              onChange={(e) =>
                setDatosPago({ ...datosPago, nombre: e.target.value })
              }
              type='text'
              placeholder='Nombre Completo *'
              className='input input-md'
            />
          </label>

          <label className='select select-md m-auto'>
            <span className='label'>
              Parentesco <span className='text-rose-600'>*</span>
            </span>
            <select
              value={datosPago.responsable}
              onChange={(e) =>
                setDatosPago({
                  ...datosPago,
                  responsable: Number(e.target.value)
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

          <label className='floating-label m-auto w-sm md:w-md'>
            <span>
              Correo Electrónico <span className='text-rose-600'>*</span>
            </span>
            <input
              value={datosPago.correo}
              onChange={(e) =>
                setDatosPago({ ...datosPago, correo: e.target.value })
              }
              type='email'
              placeholder='Correo Electrónico *'
              className='input input-md'
            />
          </label>

          <label className='floating-label m-auto w-sm md:w-md'>
            <span>
              Teléfono (móvil) <span className='text-rose-600'>*</span>
            </span>
            <input
              value={datosPago.telefono}
              onChange={(e) =>
                setDatosPago({ ...datosPago, telefono: e.target.value })
              }
              type='tel'
              placeholder='Télefono (móvil) *'
              pattern='[0-9]{10}'
              className='input input-md'
            />
          </label>

          <label className='select select-md m-auto'>
            <span className='label'>
              ¿Requiere Factura? <span className='text-rose-600'>*</span>
            </span>
            <select
              value={datosPago.factura}
              onChange={(e) =>
                setDatosPago({
                  ...datosPago,
                  factura: e.target.value === 'true'
                })
              }
            >
              <option
                disabled
                value='0'
              >
                Escoge la opción...
              </option>
              <option value={true}>Sí</option>
              <option value={false}>No</option>
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

export default FormPago
