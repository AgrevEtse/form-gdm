import { forwardRef } from 'react'

const FormMamada = forwardRef(() => {
  return (
    <div className='flex items-center justify-center p-4'>
      <div className='bg-primary text-primary-content shadow-2xl rounded-2xl p-8 max-w-md w-full text-center'>
        <h2 className='text-5xl font-extrabold mb-4'>
          ¿Enviar los datos guardados?
        </h2>
        <p className='mb-6 text-lg'>
          Completaste todos los pasos del formulario. ¿Estás seguro de que
          deseas enviar los datos guardados?
        </p>
      </div>
    </div>
  )
})

FormMamada.displayName = 'FormFinal'

export default FormMamada
