import { useGlobalState } from '@/context/GlobalStateContext'
import FormLayout from '@/Form/FormLayout'
import estados from '@/assets/json/estados.json'

const FormTutores = () => {
  const { datosTutor1, setDatosTutor1, datosTutor2, setDatosTutor2 } =
    useGlobalState()

  return (
    <FormLayout>
      <div className='w-full mx-auto p-6 bg-gray-900 text-white rounded-md shadow-md'>
        <h2 className='font-bold text-2xl mb-6 text-center'>
          Datos de los Tutores
        </h2>

        <h3 className='font-bold text-center mb-4'>Tutor 1</h3>
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

          <label className='select select-md'>
            <span className='label'>
              Estado <span className='text-rose-600'>*</span>
            </span>
            <select
              required
              value={datosTutor1.estado_nacimiento}
              onChange={(e) => {
                setDatosTutor1({
                  ...datosTutor1,
                  estado_nacimiento: e.target.value
                })
              }}
            >
              <option
                selected
                disabled
                hidden
                value=''
              >
                Escoge el estado...
              </option>
              {estados.map((estado) => (
                <option
                  key={estado.clave}
                  value={estado.nombre}
                >
                  {estado.nombre}
                </option>
              ))}
            </select>
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
            <span>
              Teléfono (fijo) <span className='text-rose-600'>*</span>
            </span>
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
              required
              type='tel'
              placeholder='Télefono (fijo) *'
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
                selected
                disabled
                hidden
                value=''
              >
                Escoge el Grado Estudios...
              </option>
              <option value='Preescolar'>Preescolar</option>
              <option value='Primaria'>Primaria</option>
              <option value='Secundaria'>Secundaria</option>
              <option value='Bachillerato'>Bachillerato</option>
              <option value='Licenciatura'>Licenciatura</option>
            </select>
          </label>
        </div>

        {/* --------------------------------------------------------------------------- */}

        <h3 className='font-bold text-center mb-4'>Tutor 2</h3>
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

          <label className='select select-md'>
            <span className='label'>
              Estado <span className='text-rose-600'>*</span>
            </span>
            <select
              required
              value={datosTutor2.estado_nacimiento}
              onChange={(e) => {
                setDatosTutor2({
                  ...datosTutor2,
                  estado_nacimiento: e.target.value
                })
              }}
            >
              <option
                selected
                disabled
                hidden
                value=''
              >
                Escoge el estado...
              </option>
              {estados.map((estado) => (
                <option
                  key={estado.clave}
                  value={estado.nombre}
                >
                  {estado.nombre}
                </option>
              ))}
            </select>
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
            <span>
              Teléfono (fijo) <span className='text-rose-600'>*</span>
            </span>
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
              required
              type='tel'
              placeholder='Teléfono (fijo) *'
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
                selected
                disabled
                hidden
                value=''
              >
                Escoge el Grado Estudios...
              </option>
              <option value='Preescolar'>Preescolar</option>
              <option value='Primaria'>Primaria</option>
              <option value='Secundaria'>Secundaria</option>
              <option value='Bachillerato'>Bachillerato</option>
              <option value='Licenciatura'>Licenciatura</option>
            </select>
          </label>
        </div>
      </div>
    </FormLayout>
  )
}

export default FormTutores
