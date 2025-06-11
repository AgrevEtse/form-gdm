import { forwardRef, useImperativeHandle } from 'react'
import { toast } from 'react-hot-toast'

import useGlobalState from '@/context/useGlobalState'
import { PARENTESCO_ARRAY } from '@/utils/parentescoHelpers'
import { ContactoSchema } from '@/schemas/ContactoSchema'

const FormContacto = forwardRef((_, ref) => {
  const { form, updateFieldForm } = useGlobalState()

  useImperativeHandle(ref, () => ({
    validate: () => {
      const contacto1Result = ContactoSchema.safeParse(form.contacto1)
      if (!contacto1Result.success)
        throw new Error(contacto1Result.error.issues[0].message)

      const contacto2Result = ContactoSchema.safeParse(form.contacto2)
      if (!contacto2Result.success)
        throw new Error(contacto2Result.error.issues[0].message)

      const contacto3Result = ContactoSchema.safeParse(form.contacto3)
      if (!contacto3Result.success)
        throw new Error(contacto3Result.error.issues[0].message)

      toast.success('Contactos Guardados')
    }
  }))

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
            className='input input-md border-white'
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
            className='input input-md border-white'
          />
        </label>

        <label className='select select-md m-auto border-white'>
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
            className='input input-md border-white'
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
            className='input input-md border-white'
          />
        </label>

        <label className='select select-md m-auto border-white'>
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
            className='input input-md border-white'
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
            className='input input-md border-white'
          />
        </label>

        <label className='select select-md m-auto border-white'>
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
