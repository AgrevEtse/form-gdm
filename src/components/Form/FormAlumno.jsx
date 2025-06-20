import { forwardRef, useImperativeHandle } from 'react'
import { toast } from 'react-hot-toast'

import useGlobalState from '@/context/useGlobalState'

import { PAISES_ARRAY } from '@/utils/paisesHelpers'
import { ESTADOS_ARRAY } from '@/utils/estadosHelpers'
import { getMunicipiosByEstado } from '@/utils/municipiosHelpers'
import {
  getFirstGradoByEscolaridad,
  getGradosByEscolaridad,
  getIdEscolaridad,
  getUUIDByEscolaridad
} from '@/utils/escolaridadGradosHelpers'
import { AlumnoSchema, CURPSchema } from '@/schemas/AlumnoSchema'
import { EscuelaProcedenciaSchema } from '@/schemas/EscuelaProcedenciaSchema'
import { InscripcionSchema } from '@/schemas/InscripcionSchema'
import { DomicilioSchema } from '@/schemas/DomicilioSchema'

const FormAlumno = forwardRef((_, ref) => {
  const { curp, setCurp, form, updateFieldForm } = useGlobalState()

  useImperativeHandle(ref, () => ({
    validate: () => {
      const escuelaProcedenciaResult = EscuelaProcedenciaSchema.safeParse(
        form.escuela_procedencia
      )
      if (!escuelaProcedenciaResult.success)
        throw new Error(escuelaProcedenciaResult.error.issues[0].message)

      const curpResult = CURPSchema.safeParse(curp)
      if (!curpResult.success)
        throw new Error(curpResult.error.issues[0].message)

      const alumnoResult = AlumnoSchema.safeParse(form.alumno)
      if (!alumnoResult.success)
        throw new Error(alumnoResult.error.issues[0].message)

      const inscripcionResult = InscripcionSchema.safeParse(form.inscripcion)
      if (!inscripcionResult.success)
        throw new Error(inscripcionResult.error.issues[0].message)

      const domicilioResult = DomicilioSchema.safeParse(form.domicilio)
      if (!domicilioResult.success)
        throw new Error(domicilioResult.error.issues[0].message)

      toast.success('Alumno Guardado')
    }
  }))

  return (
    <div className='w-full mx-auto p-6 text-white rounded-md shadow-md'>
      <h2 className='font-bold text-2xl mb-6 text-center'>Datos del Alumno</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <label className='floating-label'>
          <span>
            CCT de Procedencia <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.escuela_procedencia.cct}
            onChange={(e) =>
              updateFieldForm('escuela_procedencia', 'cct', e.target.value)
            }
            minLength={1}
            maxLength={10}
            required
            type='text'
            placeholder='CCT *'
            className='input input-md border-white'
          />
        </label>

        <label className='floating-label'>
          <span>
            Escuela de Procedencia <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.escuela_procedencia.nombre}
            onChange={(e) =>
              updateFieldForm('escuela_procedencia', 'nombre', e.target.value)
            }
            minLength={1}
            maxLength={100}
            required
            type='text'
            placeholder='Nombre Escuela *'
            className='input input-md border-white'
          />
        </label>

        <label className='floating-label'>
          <span>Matricula de Escuela de Procedencia</span>
          <input
            value={form.escuela_procedencia.matricula}
            onChange={(e) =>
              updateFieldForm(
                'escuela_procedencia',
                'matricula',
                e.target.value
              )
            }
            minLength={1}
            maxLength={10}
            type='text'
            placeholder='Matricula'
            className='input input-md border-white'
          />
        </label>

        <label className='floating-label'>
          <span>
            CURP <span className='text-rose-600'>*</span>
          </span>
          <input
            value={curp}
            onChange={(e) => {
              setCurp(e.target.value)
            }}
            minLength={18}
            maxLength={20}
            required
            type='text'
            placeholder='CURP *'
            className='input input-md border-white'
          />
        </label>

        <label className='floating-label'>
          <span>
            Nombre(s) <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.alumno.nombre}
            onChange={(e) =>
              updateFieldForm('alumno', 'nombre', e.target.value)
            }
            minLength={1}
            maxLength={40}
            required
            type='text'
            placeholder='Nombre(s) *'
            className='input input-md border-white'
          />
        </label>

        <label className='floating-label'>
          <span>
            Apellido Paterno <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.alumno.apellido_paterno}
            onChange={(e) =>
              updateFieldForm('alumno', 'apellido_paterno', e.target.value)
            }
            minLength={1}
            maxLength={40}
            required
            type='text'
            placeholder='Apellido Paterno *'
            className='input input-md border-white'
          />
        </label>

        <label className='floating-label'>
          <span>
            Apellido Materno <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.alumno.apellido_materno}
            onChange={(e) =>
              updateFieldForm('alumno', 'apellido_materno', e.target.value)
            }
            minLength={1}
            maxLength={40}
            required
            type='text'
            placeholder='Apellido Materno *'
            className='input input-md border-white'
          />
        </label>

        <label className='select select-md border-white'>
          <span className='label'>
            Género <span className='text-rose-600'>*</span>
          </span>
          <select
            value={form.alumno.genero}
            required
            onChange={(e) =>
              updateFieldForm('alumno', 'genero', e.target.value)
            }
          >
            <option
              disabled
              value='0'
            >
              Escoge el género...
            </option>
            <option value='H'>Hombre</option>
            <option value='M'>Mujer</option>
          </select>
        </label>

        <label className='select select-md border-white'>
          <span className='label'>
            Tipo Sanguíneo <span className='text-rose-600'>*</span>
          </span>
          <select
            value={form.alumno.tipo_sanguineo}
            required
            onChange={(e) =>
              updateFieldForm('alumno', 'tipo_sanguineo', e.target.value)
            }
          >
            <option
              disabled
              value='0'
            >
              Escoge el tipo sanguineo...
            </option>
            <option value='A+'>A+</option>
            <option value='A-'>A-</option>
            <option value='B+'>B+</option>
            <option value='B-'>B-</option>
            <option value='AB+'>AB+</option>
            <option value='AB-'>AB-</option>
            <option value='O+'>O+</option>
            <option value='O-'>O-</option>
          </select>
        </label>

        <label className='select select-md border-white'>
          <span className='label'>
            Lateralidad <span className='text-rose-600'>*</span>
          </span>
          <select
            value={form.alumno.es_diestro}
            required
            onChange={(e) =>
              updateFieldForm('alumno', 'es_diestro', e.target.value === 'true')
            }
          >
            <option
              disabled
              value='0'
            >
              Escoge la lateralidad...
            </option>
            <option value={true}>Derecho</option>
            <option value={false}>Izquierdo</option>
          </select>
        </label>

        <label className='input input-md border-white'>
          <span className='label'>
            Fecha Nacimiento <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.alumno.fecha_nacimiento}
            required
            onChange={(e) =>
              updateFieldForm('alumno', 'fecha_nacimiento', e.target.value)
            }
            type='date'
          />
        </label>

        <label className='select select-md border-white'>
          <span className='label'>
            Nacionalidad <span className='text-rose-600'>*</span>
          </span>
          <select
            value={form.alumno.nacionalidad}
            required
            onChange={(e) =>
              updateFieldForm('alumno', 'nacionalidad', e.target.value)
            }
          >
            <option
              disabled
              value='0'
            >
              Escoge la nacionalidad...
            </option>
            {PAISES_ARRAY.map((pais) => (
              <option
                key={pais.id}
                value={pais.value}
              >
                {pais.label}
              </option>
            ))}
          </select>
        </label>

        <label className='select select-md border-white'>
          <span className='label'>
            Escolaridad <span className='text-rose-600'>*</span>
          </span>
          <select
            required
            value={form.inscripcion.escolaridad}
            onChange={(e) => {
              updateFieldForm('inscripcion', 'escolaridad', e.target.value)
              updateFieldForm(
                'inscripcion',
                'grado',
                Number(getFirstGradoByEscolaridad(e.target.value))
              )
              updateFieldForm(
                'inscripcion',
                'id_escolaridad',
                getIdEscolaridad(
                  e.target.value,
                  getFirstGradoByEscolaridad(e.target.value)
                )
              )
              updateFieldForm(
                'inscripcion',
                'id_ciclo',
                getUUIDByEscolaridad(e.target.value)
              )
            }}
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

        <label className='select select-md border-white'>
          <span className='label'>
            Grado <span className='text-rose-600'>*</span>
          </span>
          <select
            required
            disabled={form.inscripcion.escolaridad === '0'}
            value={form.inscripcion.grado}
            onChange={(e) => {
              updateFieldForm('inscripcion', 'grado', Number(e.target.value))
              updateFieldForm(
                'inscripcion',
                'id_escolaridad',
                getIdEscolaridad(form.inscripcion.escolaridad, e.target.value)
              )
            }}
          >
            <option
              disabled
              value='0'
            >
              Escoge el grado...
            </option>
            {form.inscripcion.escolaridad !== '0' &&
              getGradosByEscolaridad(form.inscripcion.escolaridad).map(
                (grado) => (
                  <option
                    key={grado.grado}
                    value={grado.grado}
                  >
                    {grado.nombre}
                  </option>
                )
              )}
          </select>
        </label>

        <label className='floating-label'>
          <span>
            Estatura (cm) <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.alumno.estatura_cm}
            onChange={(e) =>
              updateFieldForm('alumno', 'estatura_cm', Number(e.target.value))
            }
            min={1}
            max={300}
            required
            type='number'
            placeholder='Estatura (cm) *'
            className='input input-md border-white'
          />
        </label>

        <label className='floating-label'>
          <span>
            Peso (kg) <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.alumno.peso_kg}
            onChange={(e) =>
              updateFieldForm('alumno', 'peso_kg', Number(e.target.value))
            }
            min={1}
            max={300}
            required
            type='number'
            placeholder='Peso (kg) *'
            className='input input-md border-white'
          />
        </label>

        <label className='floating-label'>
          <span>
            Domicilio <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.domicilio.domicilio}
            onChange={(e) =>
              updateFieldForm('domicilio', 'domicilio', e.target.value)
            }
            minLength={1}
            maxLength={30}
            required
            type='text'
            placeholder='Domicilio *'
            className='input input-md border-white'
          />
        </label>

        <label className='floating-label'>
          <span>
            Colonia <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.domicilio.colonia}
            onChange={(e) =>
              updateFieldForm('domicilio', 'colonia', e.target.value)
            }
            minLength={1}
            maxLength={60}
            required
            type='text'
            placeholder='Colonia *'
            className='input input-md border-white'
          />
        </label>

        <label className='floating-label'>
          <span>
            C.P. <span className='text-rose-600'>*</span>
          </span>
          <input
            value={form.domicilio.codigo_postal}
            onChange={(e) =>
              updateFieldForm('domicilio', 'codigo_postal', e.target.value)
            }
            type='number'
            placeholder='C.P. *'
            min={100000}
            max={999999}
            required
            pattern='[0-9]{6}'
            className='input input-md border-white'
          />
        </label>

        <label className='select select-md border-white'>
          <span className='label'>
            Estado <span className='text-rose-600'>*</span>
          </span>
          <select
            required
            value={form.domicilio.estado}
            onChange={(e) => {
              updateFieldForm('domicilio', 'estado', e.target.value)
              updateFieldForm(
                'domicilio',
                'ciudad',
                getMunicipiosByEstado(e.target.value)[0]
              )
            }}
          >
            <option
              disabled
              value='0'
            >
              Escoge el estado...
            </option>
            {ESTADOS_ARRAY.map((estado) => (
              <option
                key={estado.id}
                value={estado.value}
              >
                {estado.label}
              </option>
            ))}
          </select>
        </label>

        <label className='select select-md border-white'>
          <span className='label'>
            Ciudad <span className='text-rose-600'>*</span>
          </span>
          <select
            required
            disabled={form.domicilio.estado === '0'}
            value={form.domicilio.ciudad}
            onChange={(e) => {
              updateFieldForm('domicilio', 'ciudad', e.target.value)
            }}
          >
            <option
              disabled
              value='0'
            >
              Escoge el municipio...
            </option>
            {form.domicilio.estado !== '0' &&
              getMunicipiosByEstado(form.domicilio.estado).map((municipio) => {
                return (
                  <option
                    key={municipio}
                    value={municipio}
                  >
                    {municipio}
                  </option>
                )
              })}
          </select>
        </label>

        <fieldset className='fieldset'>
          <legend className='fieldset-legend'>Cuestiones Médicas</legend>
          <textarea
            value={form.alumno.nota_enfermedad}
            onChange={(e) =>
              updateFieldForm('alumno', 'nota_enfermedad', e.target.value)
            }
            minLength={0}
            maxLength={200}
            className='textarea h-24 border-white'
            placeholder='Indique si el alumno padece de alguna discapacidad, enfermedad crónica, alergias o algún tipo de tratamiento médico.'
          ></textarea>
        </fieldset>

        <fieldset className='fieldset'>
          <legend className='fieldset-legend'>Terapias</legend>
          <textarea
            value={form.alumno.nota_terapia}
            onChange={(e) =>
              updateFieldForm('alumno', 'nota_terapia', e.target.value)
            }
            minLength={0}
            maxLength={200}
            className='textarea h-24 border-white'
            placeholder='Indique si el alumno asiste a terapia, explique de que tipo: físico, psicológica u otra y por qué'
          ></textarea>
        </fieldset>
      </div>
    </div>
  )
})

FormAlumno.displayName = 'FormAlumno'

export default FormAlumno
