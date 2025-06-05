import PropTypes from 'prop-types'

const FormLayout = ({ children }) => {
  return (
    <div className='container my-16'>
      <h3 className='text-center font-bold text-4xl mb-6'>
        Registro del Alumno
      </h3>
      {children}
    </div>
  )
}

FormLayout.propTypes = {
  children: PropTypes.node
}

export default FormLayout
