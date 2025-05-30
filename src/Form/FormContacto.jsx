import { useGlobalState } from '../GlobalState'

const FormContacto = () => {
  const {
    datosContacto1,
    setDatosContacto1,
    datosContacto2,
    setDatosContacto2,
    datosContacto3,
    setDatosContacto3
  } = useGlobalState()

  return (
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
            placeholder='Nombre Completo'
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
              setDatosContacto1({ ...datosContacto1, telefono: e.target.value })
            }
            type='tel'
            placeholder='1234567890'
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
              selected
              disabled
              hidden
              value=''
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
            placeholder='Nombre Completo'
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
              setDatosContacto2({ ...datosContacto2, telefono: e.target.value })
            }
            type='tel'
            placeholder='1234567890'
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
              selected
              disabled
              hidden
              value=''
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
            placeholder='Nombre Completo'
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
              setDatosContacto3({ ...datosContacto3, telefono: e.target.value })
            }
            type='tel'
            placeholder='1234567890'
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
              selected
              disabled
              hidden
              value=''
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
  )
}

export default FormContacto
