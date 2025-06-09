import { forwardRef, useImperativeHandle } from 'react'
import { toast } from 'react-hot-toast'

import useGlobalState from '@/context/useGlobalState'
import { GRADO_MAX_ESTUDIOS_ARRAY } from '@/utils/gradoMaxEstudiosHelpers'
import { TutorSchema } from '@/schemas/TutorSchema'

const FormTutores = forwardRef((_, ref) => {
  const { form, updateFieldForm } = useGlobalState()

  useImperativeHandle(ref, () => ({
    validate: () => {
      const tutor1Result = TutorSchema.safeParse(form.tutor1)
      if (!tutor1Result.success)
        throw new Error(tutor1Result.error.issues[0].message)

      const tutor2Result = TutorSchema.safeParse(form.tutor2)
      if (!tutor2Result.success)
        throw new Error(tutor2Result.error.issues[0].message)

      toast.success('Tutores Guardados')
    }
  }))

  return (
    <div className='w-full mx-auto p-6 text-white rounded-md shadow-md'>
      <h2 className='font-bold text-2xl mb-6 text-center'>
        Datos de los Tutores
      </h2>

      <h3 className='font-bold text-center mb-4'>Papá / Tutor 1</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
        <label className='floating-label'>
          <span>
            Nombre(s) <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor1.nombre}
            onChange={(e) =>
              updateFieldForm('tutor1', 'nombre', e.target.value)
            }
            minLength={1}
            maxLength={40}
            required
            type='text'
            placeholder='Nombre(s) *'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>
            Apellido Paterno <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor1.apellido_paterno}
            onChange={(e) =>
              updateFieldForm('tutor1', 'apellido_paterno', e.target.value)
            }
            minLength={1}
            maxLength={40}
            required
            type='text'
            placeholder='Apellido Paterno *'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>
            Apellido Materno <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor1.apellido_materno}
            onChange={(e) =>
              updateFieldForm('tutor1', 'apellido_materno', e.target.value)
            }
            minLength={1}
            maxLength={40}
            required
            type='text'
            placeholder='Apellido Materno *'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>
            Lugar de Nacimiento <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor1.estado_nacimiento}
            onChange={(e) =>
              updateFieldForm('tutor1', 'estado_nacimiento', e.target.value)
            }
            minLength={1}
            maxLength={40}
            required
            type='text'
            placeholder='Lugar de Nacimiento *'
            className='input input-md'
          />
        </label>

        <label className='input input-md'>
          <span className='label'>
            Fecha Nacimiento <span className='text-rose-600'>*</span>
          </span>
          <input
            required
            value={form.tutor1.fecha_nacimiento}
            onChange={(e) =>
              updateFieldForm('tutor1', 'fecha_nacimiento', e.target.value)
            }
            type='date'
          />
        </label>

        <label className='floating-label'>
          <span>
            Domicilio <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor1.domicilio}
            onChange={(e) =>
              updateFieldForm('tutor1', 'domicilio', e.target.value)
            }
            minLength={1}
            maxLength={60}
            required
            type='text'
            placeholder='Domicilio *'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>
            Colonia <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor1.colonia}
            onChange={(e) =>
              updateFieldForm('tutor1', 'colonia', e.target.value)
            }
            minLength={1}
            maxLength={30}
            required
            type='text'
            placeholder='Colonia *'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>
            C.P. <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor1.codigo_postal}
            onChange={(e) =>
              updateFieldForm('tutor1', 'codigo_postal', e.target.value)
            }
            min={100000}
            max={999999}
            required
            type='number'
            placeholder='C.P. *'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>
            Teléfono (móvil) <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor1.telefono_movil}
            onChange={(e) =>
              updateFieldForm('tutor1', 'telefono_movil', e.target.value)
            }
            min={1000000000}
            max={9999999999}
            required
            type='tel'
            placeholder='Télefono (móvil) *'
            pattern='[0-9]{10}'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>Teléfono (fijo)</span>
          <input
            value={form.tutor1.telefono_fijo}
            onChange={(e) =>
              updateFieldForm('tutor1', 'telefono_fijo', e.target.value)
            }
            min={1000000000}
            max={9999999999}
            type='tel'
            placeholder='Télefono (fijo)'
            pattern='[0-9]{10}'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>
            Correo Electrónico <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor1.correo_electronico}
            onChange={(e) =>
              updateFieldForm('tutor1', 'correo_electronico', e.target.value)
            }
            minLength={1}
            maxLength={50}
            required
            type='email'
            placeholder='Correo Electrónico *'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>
            Ocupación <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor1.oupacion}
            onChange={(e) =>
              updateFieldForm('tutor1', 'oupacion', e.target.value)
            }
            minLength={1}
            maxLength={40}
            required
            type='text'
            placeholder='Ocupación *'
            className='input input-md'
          />
        </label>

        <label className='select select-md'>
          <span className='label'>
            Grado Máx Estudios <span className='text-rose-600'>*</span>
          </span>
          <select
            required
            value={form.tutor1.grado_max_estudios}
            onChange={(e) =>
              updateFieldForm('tutor1', 'grado_max_estudios', e.target.value)
            }
          >
            <option
              disabled
              value='0'
            >
              Escoge el Grado Estudios...
            </option>
            {GRADO_MAX_ESTUDIOS_ARRAY.map(({ id, value, label }) => (
              <option
                key={id}
                value={value}
              >
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* --------------------------------------------------------------------------- */}

      <h3 className='font-bold text-center mb-4'>Mamá / Tutor 2</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <label className='floating-label'>
          <span>
            Nombre(s) <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor2.nombre}
            onChange={(e) =>
              updateFieldForm('tutor2', 'nombre', e.target.value)
            }
            minLength={1}
            maxLength={40}
            required
            type='text'
            placeholder='Nombre(s) *'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>
            Apellido Paterno <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor2.apellido_paterno}
            onChange={(e) =>
              updateFieldForm('tutor2', 'apellido_paterno', e.target.value)
            }
            minLength={1}
            maxLength={40}
            required
            type='text'
            placeholder='Apellido Paterno *'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>
            Apellido Materno <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor2.apellido_materno}
            onChange={(e) =>
              updateFieldForm('tutor2', 'apellido_materno', e.target.value)
            }
            minLength={1}
            maxLength={40}
            required
            type='text'
            placeholder='Apellido Materno *'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>
            Lugar de Nacimiento <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor2.estado_nacimiento}
            onChange={(e) =>
              updateFieldForm('tutor2', 'estado_nacimiento', e.target.value)
            }
            minLength={1}
            maxLength={40}
            required
            type='text'
            placeholder='Lugar de Nacimiento *'
            className='input input-md'
          />
        </label>

        <label className='input input-md'>
          <span className='label'>
            Fecha Nacimiento <span className='text-rose-600'>*</span>
          </span>
          <input
            required
            value={form.tutor2.fecha_nacimiento}
            onChange={(e) =>
              updateFieldForm('tutor2', 'fecha_nacimiento', e.target.value)
            }
            type='date'
          />
        </label>

        <label className='floating-label'>
          <span>
            Domicilio <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor2.domicilio}
            onChange={(e) =>
              updateFieldForm('tutor2', 'domicilio', e.target.value)
            }
            minLength={1}
            maxLength={60}
            required
            type='text'
            placeholder='Domicilio *'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>
            Colonia <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor2.colonia}
            onChange={(e) =>
              updateFieldForm('tutor2', 'colonia', e.target.value)
            }
            minLength={1}
            maxLength={30}
            required
            type='text'
            placeholder='Colonia *'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>
            C.P. <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor2.codigo_postal}
            onChange={(e) =>
              updateFieldForm('tutor2', 'codigo_postal', e.target.value)
            }
            min={100000}
            max={999999}
            required
            type='number'
            placeholder='C.P. *'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>
            Teléfono (móvil) <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor2.telefono_movil}
            onChange={(e) =>
              updateFieldForm('tutor2', 'telefono_movil', e.target.value)
            }
            min={1000000000}
            max={9999999999}
            required
            type='tel'
            placeholder='Teléfono (móvil) *'
            pattern='[0-9]{10}'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>Teléfono (fijo)</span>
          <input
            value={form.tutor2.telefono_fijo}
            onChange={(e) =>
              updateFieldForm('tutor2', 'telefono_fijo', e.target.value)
            }
            min={1000000000}
            max={9999999999}
            type='tel'
            placeholder='Teléfono (fijo)'
            pattern='[0-9]{10}'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>
            Correo Electrónico <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor2.correo_electronico}
            onChange={(e) =>
              updateFieldForm('tutor2', 'correo_electronico', e.target.value)
            }
            minLength={1}
            maxLength={50}
            required
            type='email'
            placeholder='Correo Electrónico *'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>
            Ocupación <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.tutor2.oupacion}
            onChange={(e) =>
              updateFieldForm('tutor2', 'oupacion', e.target.value)
            }
            minLength={1}
            maxLength={40}
            required
            type='text'
            placeholder='Ocupación *'
            className='input input-md'
          />
        </label>

        <label className='select select-md'>
          <span className='label'>
            Grado Máx Estudios <span className='text-rose-600'>*</span>
          </span>
          <select
            required
            value={form.tutor2.grado_max_estudios}
            onChange={(e) =>
              updateFieldForm('tutor2', 'grado_max_estudios', e.target.value)
            }
          >
            <option
              disabled
              value='0'
            >
              Escoge el Grado Estudios...
            </option>
            {GRADO_MAX_ESTUDIOS_ARRAY.map(({ id, value, label }) => (
              <option
                key={id}
                value={value}
              >
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  )
})

FormTutores.displayName = 'FormTutores'

export default FormTutores
