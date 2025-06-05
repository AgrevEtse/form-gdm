import { forwardRef, useImperativeHandle } from 'react'
import { toast } from 'react-hot-toast'

import useGlobalState from '@/context/useGlobalState'
import { PARENTESCO_ARRAY } from '@/utils/parentescoHelpers'

const FormContacto = forwardRef((_, ref) => {
  const { form, updateFieldForm } = useGlobalState()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // if (!equalObjects(datosContacto1, DEFAULT_CONTACTO)) {
    //   const resContacto1 = await fetch(`${API_URL}/contactoemergencia`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       ...datosContacto1,
    //       curp_alumno: curp
    //     })
    //   })

    //   const dataContacto1 = await resContacto1.json()

    //   if (!resContacto1.ok) {
    //     toast.error('Error al enviar los datos del contacto 1')
    //     console.error(
    //       `Error al enviar los datos del contacto 1: ${dataContacto1.message}`
    //     )
    //     setIsSending(false)
    //     return
    //   }
    // }

    // if (!equalObjects(datosContacto2, DEFAULT_CONTACTO)) {
    //   const resContacto2 = await fetch(`${API_URL}/contactoemergencia`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       ...datosContacto2,
    //       curp_alumno: curp
    //     })
    //   })

    //   const dataContacto2 = await resContacto2.json()

    //   if (!resContacto2.ok) {
    //     toast.error('Error al enviar los datos del contacto 2')
    //     console.error(
    //       `Error al enviar los datos del contacto 2: ${dataContacto2.message}`
    //     )
    //     setIsSending(false)
    //     return
    //   }
    // }

    // if (!equalObjects(datosContacto3, DEFAULT_CONTACTO)) {
    //   const resContacto3 = await fetch(`${API_URL}/contactoemergencia`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       ...datosContacto3,
    //       curp_alumno: curp
    //     })
    //   })

    //   const dataContacto3 = await resContacto3.json()

    //   if (!resContacto3.ok) {
    //     toast.error('Error al enviar los datos del contacto 3')
    //     console.error(
    //       `Error al enviar los datos del contacto 3: ${dataContacto3.message}`
    //     )
    //     setIsSending(false)
    //     return
    //   }
    // }

    console.log('Contacto 1:', form.contacto1)
    console.log('Contacto 2:', form.contacto2)
    console.log('Contacto 3:', form.contacto3)

    toast.success('Contactos de Emergencia Guardados Correctamente.')
  }

  return (
    <div className='w-full mx-auto p-6 text-white rounded-md shadow-md'>
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
            value={form.contacto1.nombre}
            onChange={(e) =>
              updateFieldForm('contacto1', 'nombre', e.target.value)
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
            value={form.contacto1.telefono}
            onChange={(e) =>
              updateFieldForm('contacto1', 'telefono', e.target.value)
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
            value={form.contacto1.parentesco}
            onChange={(e) =>
              updateFieldForm('contacto1', 'parentesco', Number(e.target.value))
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
      </div>

      <h3 className='font-bold text-center mb-4'>Contacto de Emergencia 2</h3>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:px-16 mb-16'>
        <label className='floating-label m-auto w-sm md:w-md'>
          <span>
            Nombre Completo <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.contacto2.nombre}
            onChange={(e) =>
              updateFieldForm('contacto2', 'nombre', e.target.value)
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
            value={form.contacto2.telefono}
            onChange={(e) =>
              updateFieldForm('contacto2', 'telefono', e.target.value)
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
            value={form.contacto2.parentesco}
            onChange={(e) =>
              updateFieldForm('contacto2', 'parentesco', Number(e.target.value))
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
      </div>

      <h3 className='font-bold text-center mb-4'>Contacto de Emergencia 3</h3>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:px-16 mb-16'>
        <label className='floating-label m-auto w-sm md:w-md'>
          <span>
            Nombre Completo <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.contacto3.nombre}
            onChange={(e) =>
              updateFieldForm('contacto3', 'nombre', e.target.value)
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
            value={form.contacto3.telefono}
            onChange={(e) =>
              updateFieldForm('contacto3', 'telefono', e.target.value)
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
            value={form.contacto3.parentesco}
            onChange={(e) =>
              updateFieldForm('contacto3', 'parentesco', Number(e.target.value))
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
      </div>
    </div>
  )
})

FormContacto.displayName = 'FormContacto'

export default FormContacto
