import { useState } from 'react'

import useGlobalState from '@/context/useGlobalState'
import { DEFAULT_HERMANO } from '@/utils/defaultStates'
import FormLayout from '@/Form/FormLayout'

const FormHermanos = () => {
  const { curp } = useGlobalState()

  const [datosHermano1, setDatosHermano1] = useState(DEFAULT_HERMANO)
  const [datosHermano2, setDatosHermano2] = useState(DEFAULT_HERMANO)
  const [datosHermano3, setDatosHermano3] = useState(DEFAULT_HERMANO)

  return (
    <FormLayout>
      <div className='w-full mx-auto p-6 bg-gray-900 text-white rounded-md shadow-md'>
        <h2 className='font-bold text-2xl mb-6 text-center'>
          Datos de Hermanos
        </h2>

        <h3 className='font-bold text-center mb-4'>Hermano 1</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:px-60 mb-16'>
          <label className='floating-label m-auto w-sm md:w-md'>
            <span>Nombre Completo</span>
            <input
              value={datosHermano1.nombre}
              onChange={(e) =>
                setDatosHermano1({ ...datosHermano1, nombre: e.target.value })
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
              value={datosHermano1.nivel}
              onChange={(e) =>
                setDatosHermano1({ ...datosHermano1, nivel: e.target.value })
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
              value={datosHermano2.nombre}
              onChange={(e) =>
                setDatosHermano2({ ...datosHermano2, nombre: e.target.value })
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
              value={datosHermano2.nivel}
              onChange={(e) =>
                setDatosHermano2({ ...datosHermano2, nivel: e.target.value })
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
              value={datosHermano3.nombre}
              onChange={(e) =>
                setDatosHermano3({ ...datosHermano3, nombre: e.target.value })
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
              value={datosHermano3.nivel}
              onChange={(e) =>
                setDatosHermano3({ ...datosHermano3, nivel: e.target.value })
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
    </FormLayout>
  )
}

export default FormHermanos
