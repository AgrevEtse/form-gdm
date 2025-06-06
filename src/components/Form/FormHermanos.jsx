import { forwardRef, useImperativeHandle } from 'react'
import { toast } from 'react-hot-toast'

import useGlobalState from '@/context/useGlobalState'
import { HermanoSchema } from '@/schemas/HermanoSchema'

const FormHermanos = forwardRef((_, ref) => {
  const { form, updateFieldForm } = useGlobalState()

  useImperativeHandle(ref, () => ({
    validate: () => {
      const hermano1Result = HermanoSchema.safeParse(form.hermano1)
      if (!hermano1Result.success)
        throw new Error(hermano1Result.error.issues[0].message)

      const hermano2Result = HermanoSchema.safeParse(form.hermano2)
      if (!hermano2Result.success)
        throw new Error(hermano2Result.error.issues[0].message)

      const hermano3Result = HermanoSchema.safeParse(form.hermano3)
      if (!hermano3Result.success)
        throw new Error(hermano3Result.error.issues[0].message)

      toast.success('Hermanos Guardados')
    }
  }))

  return (
    <div className='w-full mx-auto p-6 text-white rounded-md shadow-md'>
      <h2 className='font-bold text-2xl mb-6 text-center'>
        Hermanos Inscritos en el Colegio
      </h2>

      <h3 className='font-bold text-center mb-4'>Hermano 1</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:px-60 mb-16'>
        <label className='floating-label m-auto w-sm md:w-md'>
          <span>Nombre Completo</span>
          <input
            value={form.hermano1.nombre}
            onChange={(e) =>
              updateFieldForm('hermano1', 'nombre', e.target.value)
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
            value={form.hermano1.nivel}
            onChange={(e) =>
              updateFieldForm('hermano1', 'nivel', e.target.value)
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
            value={form.hermano2.nombre}
            onChange={(e) =>
              updateFieldForm('hermano2', 'nombre', e.target.value)
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
            value={form.hermano2.nivel}
            onChange={(e) =>
              updateFieldForm('hermano2', 'nivel', e.target.value)
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
            value={form.hermano3.nombre}
            onChange={(e) =>
              updateFieldForm('hermano3', 'nombre', e.target.value)
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
            value={form.hermano3.nivel}
            onChange={(e) =>
              updateFieldForm('hermano3', 'nivel', e.target.value)
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
  )
})

FormHermanos.displayName = 'FormHermanos'

export default FormHermanos
