import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import useGlobalState from '@/context/useGlobalState'
import FormLayout from '@/components/Layout/FormLayout'

const FormHermanos = () => {
  const { form, updateFieldForm } = useGlobalState()
  const navigate = useNavigate()

  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsSending(true)

    // if (!equalObjects(datosHermano1, DEFAULT_HERMANO)) {
    //   const resHermano1 = await fetch(`${API_URL}/hermano`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       ...datosHermano1,
    //       curp_alumno: curp
    //     })
    //   })

    //   const dataHermano1 = await resHermano1.json()

    //   if (!resHermano1.ok) {
    //     toast.error(`Error al enviar los datos del hermano 1`)
    //     console.error(
    //       `Error al enviar los datos del hermano 1: ${dataHermano1.message}`
    //     )
    //     setIsSending(false)
    //     return
    //   }
    // }

    // if (!equalObjects(datosHermano2, DEFAULT_HERMANO)) {
    //   const resHermano2 = await fetch(`${API_URL}/hermano`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       ...datosHermano2,
    //       curp_alumno: curp
    //     })
    //   })

    //   const dataHermano2 = await resHermano2.json()

    //   if (!resHermano2.ok) {
    //     toast.error(`Error al enviar los datos del hermano 2`)
    //     console.error(
    //       `Error al enviar los datos del hermano 2: ${dataHermano2.message}`
    //     )
    //     setIsSending(false)
    //     return
    //   }
    // }

    // if (!equalObjects(datosHermano3, DEFAULT_HERMANO)) {
    //   const resHermano3 = await fetch(`${API_URL}/hermano`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       ...datosHermano3,
    //       curp_alumno: curp
    //     })
    //   })

    //   const dataHermano3 = await resHermano3.json()

    //   if (!resHermano3.ok) {
    //     toast.error(`Error al enviar los datos del hermano 3`)
    //     console.error(
    //       `Error al enviar los datos del hermano 3: ${dataHermano3.message}`
    //     )
    //     setIsSending(false)
    //     return
    //   }
    // }

    console.log('Hermano 1:', form.hermano1)
    console.log('Hermano 2:', form.hermano2)
    console.log('Hermano 3:', form.hermano3)

    setIsSending(false)
    toast.success('Datos de hermanos enviados correctamente')
    navigate('/form-contacto')
  }

  return (
    <FormLayout>
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
      <div className='flex justify-between mt-4'>
        <button
          className='mr-4 px-4 py-2 btn btn-info rounded ml-auto'
          onClick={handleSubmit}
          disabled={isSending}
          type='submit'
        >
          {isSending && (
            <span className='loading loading-spinner loading-sm'></span>
          )}
          {!isSending && 'Siguiente'}
        </button>
      </div>
    </FormLayout>
  )
}

export default FormHermanos
