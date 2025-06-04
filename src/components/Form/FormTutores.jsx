import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import useGlobalState from '@/context/useGlobalState'
import { DEFAULT_TUTOR } from '@/utils/defaultStates'
import FormLayout from '@/components/Layout/FormLayout'

const API_URL = import.meta.env.VITE_API_URL

const FormTutores = () => {
  const { curp } = useGlobalState()
  const navigate = useNavigate()

  const [datosTutor1, setDatosTutor1] = useState(DEFAULT_TUTOR)
  const [datosTutor2, setDatosTutor2] = useState(DEFAULT_TUTOR)
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsSending(true)

    const resTutor1 = await fetch(`${API_URL}/tutor1`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...datosTutor1,
        fecha_nacimiento: new Date(datosTutor1.fecha_nacimiento).toISOString(),
        curp_alumno: curp
      })
    })

    const dataTutor1 = await resTutor1.json()

    if (!resTutor1.ok) {
      setIsSending(false)
      toast.error('Error al enviar los datos del Tutor 1')
      console.error(
        `Error al enviar los datos del Tutor 1: ${dataTutor1.message}`
      )
      return
    }

    const resTutor2 = await fetch(`${API_URL}/tutor2`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...datosTutor2,
        fecha_nacimiento: new Date(datosTutor2.fecha_nacimiento).toISOString(),
        curp_alumno: curp
      })
    })

    const dataTutor2 = await resTutor2.json()

    if (!resTutor2.ok) {
      setIsSending(false)
      toast.error('Error al enviar los datos del Tutor 2')
      console.error(
        `Error al enviar los datos del Tutor 2: ${dataTutor2.message}`
      )
      return
    }

    setIsSending(false)
    toast.success('Datos de los tutores enviados correctamente')
    navigate('/form-hermanos')
  }

  return (
    <FormLayout>
      <div className='w-full mx-auto p-6 text-white rounded-md shadow-md'>
        <h2 className='font-bold text-2xl mb-6 text-center'>
          Datos de los Tutores
        </h2>

        <h3 className='font-bold text-center mb-4'>
          Papá (Contacto Principal)
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
          <label className='floating-label'>
            <span>
              Nombre(s) <span className='text-rose-600'>*</span>
            </span>
            <input
              value={datosTutor1.nombre}
              onChange={(e) => {
                setDatosTutor1({
                  ...datosTutor1,
                  nombre: e.target.value
                })
              }}
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
              value={datosTutor1.apellido_paterno}
              onChange={(e) => {
                setDatosTutor1({
                  ...datosTutor1,
                  apellido_paterno: e.target.value
                })
              }}
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
              value={datosTutor1.apellido_materno}
              onChange={(e) => {
                setDatosTutor1({
                  ...datosTutor1,
                  apellido_materno: e.target.value
                })
              }}
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
              value={datosTutor1.estado_nacimiento}
              onChange={(e) => {
                setDatosTutor1({
                  ...datosTutor1,
                  estado_nacimiento: e.target.value
                })
              }}
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
              value={datosTutor1.fecha_nacimiento}
              onChange={(e) => {
                setDatosTutor1({
                  ...datosTutor1,
                  fecha_nacimiento: e.target.value
                })
              }}
              type='date'
            />
          </label>

          <label className='floating-label'>
            <span>
              Domicilio <span className='text-rose-600'>*</span>
            </span>
            <input
              value={datosTutor1.domicilio}
              onChange={(e) => {
                setDatosTutor1({
                  ...datosTutor1,
                  domicilio: e.target.value
                })
              }}
              minLength={1}
              maxLength={30}
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
              value={datosTutor1.colonia}
              onChange={(e) => {
                setDatosTutor1({
                  ...datosTutor1,
                  colonia: e.target.value
                })
              }}
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
              value={datosTutor1.codigo_postal}
              onChange={(e) => {
                setDatosTutor1({
                  ...datosTutor1,
                  codigo_postal: e.target.value
                })
              }}
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
              value={datosTutor1.telefono_movil}
              onChange={(e) => {
                setDatosTutor1({
                  ...datosTutor1,
                  telefono_movil: e.target.value
                })
              }}
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
              value={datosTutor1.telefono_fijo}
              onChange={(e) => {
                setDatosTutor1({
                  ...datosTutor1,
                  telefono_fijo: e.target.value
                })
              }}
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
              value={datosTutor1.correo_electronico}
              onChange={(e) => {
                setDatosTutor1({
                  ...datosTutor1,
                  correo_electronico: e.target.value
                })
              }}
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
              value={datosTutor1.oupacion}
              onChange={(e) => {
                setDatosTutor1({
                  ...datosTutor1,
                  oupacion: e.target.value
                })
              }}
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
              value={datosTutor1.grado_max_estudios}
              onChange={(e) => {
                setDatosTutor1({
                  ...datosTutor1,
                  grado_max_estudios: e.target.value
                })
              }}
            >
              <option
                disabled
                value='0'
              >
                Escoge el Grado Estudios...
              </option>
              <option value='Sin Estudios'>Sin Estudios</option>
              <option value='Preescolar'>Preescolar</option>
              <option value='Preescolar Trunco'>Preescolar Trunco</option>
              <option value='Primaria'>Primaria</option>
              <option value='Primaria Trunca'>Primaria Trunca</option>
              <option value='Secundaria'>Secundaria</option>
              <option value='Secundaria Trunca'>Secundaria Trunca</option>
              <option value='Bachillerato'>Bachillerato</option>
              <option value='Bachillerato Trunco'>Bachillerato Trunco</option>
              <option value='Licenciatura'>Licenciatura</option>
              <option value='Licenciatura Trunca'>Licenciatura Trunca</option>
              <option value='Posgrado'>Posgrado</option>
              <option value='Posgrado Trunco'>Posgrado Trunco</option>
            </select>
          </label>
        </div>

        {/* --------------------------------------------------------------------------- */}

        <h3 className='font-bold text-center mb-4'>Mamá</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <label className='floating-label'>
            <span>
              Nombre(s) <span className='text-rose-600'>*</span>
            </span>
            <input
              value={datosTutor2.nombre}
              onChange={(e) => {
                setDatosTutor2({
                  ...datosTutor2,
                  nombre: e.target.value
                })
              }}
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
              value={datosTutor2.apellido_paterno}
              onChange={(e) => {
                setDatosTutor2({
                  ...datosTutor2,
                  apellido_paterno: e.target.value
                })
              }}
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
              value={datosTutor2.apellido_materno}
              onChange={(e) => {
                setDatosTutor2({
                  ...datosTutor2,
                  apellido_materno: e.target.value
                })
              }}
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
              value={datosTutor2.estado_nacimiento}
              onChange={(e) => {
                setDatosTutor2({
                  ...datosTutor2,
                  estado_nacimiento: e.target.value
                })
              }}
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
              value={datosTutor2.fecha_nacimiento}
              onChange={(e) => {
                setDatosTutor2({
                  ...datosTutor2,
                  fecha_nacimiento: e.target.value
                })
              }}
              type='date'
            />
          </label>

          <label className='floating-label'>
            <span>
              Domicilio <span className='text-rose-600'>*</span>
            </span>
            <input
              value={datosTutor2.domicilio}
              onChange={(e) => {
                setDatosTutor2({
                  ...datosTutor2,
                  domicilio: e.target.value
                })
              }}
              minLength={1}
              maxLength={30}
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
              value={datosTutor2.colonia}
              onChange={(e) => {
                setDatosTutor2({
                  ...datosTutor2,
                  colonia: e.target.value
                })
              }}
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
              value={datosTutor2.codigo_postal}
              onChange={(e) => {
                setDatosTutor2({
                  ...datosTutor2,
                  codigo_postal: e.target.value
                })
              }}
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
              value={datosTutor2.telefono_movil}
              onChange={(e) => {
                setDatosTutor2({
                  ...datosTutor2,
                  telefono_movil: e.target.value
                })
              }}
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
              value={datosTutor2.telefono_fijo}
              onChange={(e) => {
                setDatosTutor2({
                  ...datosTutor2,
                  telefono_fijo: e.target.value
                })
              }}
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
              value={datosTutor2.correo_electronico}
              onChange={(e) => {
                setDatosTutor2({
                  ...datosTutor2,
                  correo_electronico: e.target.value
                })
              }}
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
              value={datosTutor2.oupacion}
              onChange={(e) => {
                setDatosTutor2({
                  ...datosTutor2,
                  oupacion: e.target.value
                })
              }}
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
              value={datosTutor2.grado_max_estudios}
              onChange={(e) => {
                setDatosTutor2({
                  ...datosTutor2,
                  grado_max_estudios: e.target.value
                })
              }}
            >
              <option
                disabled
                value='0'
              >
                Escoge el Grado Estudios...
              </option>
              <option value='Sin Estudios'>Sin Estudios</option>
              <option value='Preescolar'>Preescolar</option>
              <option value='Preescolar Trunco'>Preescolar Trunco</option>
              <option value='Primaria'>Primaria</option>
              <option value='Primaria Trunca'>Primaria Trunca</option>
              <option value='Secundaria'>Secundaria</option>
              <option value='Secundaria Trunca'>Secundaria Trunca</option>
              <option value='Bachillerato'>Bachillerato</option>
              <option value='Bachillerato Trunco'>Bachillerato Trunco</option>
              <option value='Licenciatura'>Licenciatura</option>
              <option value='Licenciatura Trunca'>Licenciatura Trunca</option>
              <option value='Posgrado'>Posgrado</option>
              <option value='Posgrado Trunco'>Posgrado Trunco</option>
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

export default FormTutores
