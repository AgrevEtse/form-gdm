import { forwardRef, useImperativeHandle } from 'react'
import { toast } from 'react-hot-toast'

import useGlobalState from '@/context/useGlobalState'
import { PARENTESCO_ARRAY } from '@/utils/parentescoHelpers'

const FormPago = forwardRef((_, ref) => {
  const { form, updateFieldForm } = useGlobalState()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // const resPago = await fetch(`${API_URL}/personapagos`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     ...datosPago,
    //     curp_alumno: curp
    //   })
    // })

    // const dataPago = await resPago.json()

    // if (!resPago.ok) {
    //   setIsSending(false)
    //   toast.error(`Error al enviar los datos de pago`)
    //   console.error(`Error al enviar los datos de pago: ${dataPago.message}`)
    //   return
    // }

    console.log('Pago :', form.pago)

    toast.success('Responsable de Pagos Guardado Correctamente.')
  }

  return (
    <div className='w-full mx-auto p-6 text-white rounded-md shadow-mds'>
      <h2 className='font-bold text-2xl mb-6 text-center'>
        Responsable de Pagos
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:px-16 mb-16'>
        <label className='floating-label m-auto w-sm md:w-md'>
          <span>
            Nombre Completo <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.pago.nombre}
            onChange={(e) => updateFieldForm('pago', 'nombre', e.target.value)}
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
            value={form.pago.responsable}
            onChange={(e) =>
              updateFieldForm('pago', 'responsable', Number(e.target.value))
            }
          >
            <option
              disabled
              value='0'
            >
              Escoge el parentesco...
            </option>
            {PARENTESCO_ARRAY.map((parentesco) => (
              <option
                key={parentesco.id}
                value={parentesco.value}
              >
                {parentesco.label}
              </option>
            ))}
          </select>
        </label>

        <label className='floating-label m-auto w-sm md:w-md'>
          <span>
            Correo Electrónico <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.pago.correo}
            onChange={(e) => updateFieldForm('pago', 'correo', e.target.value)}
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
            value={form.pago.telefono}
            onChange={(e) =>
              updateFieldForm('pago', 'telefono', e.target.value)
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
            value={form.pago.factura}
            onChange={(e) =>
              updateFieldForm('pago', 'factura', e.target.value === 'true')
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
  )
})

FormPago.displayName = 'FormPago'

export default FormPago
