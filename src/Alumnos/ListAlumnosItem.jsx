import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const ListAlumnosItem = ({ datos }) => {
  return (
    <div key={datos.curp} className="card bg-base-300 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{datos.curp}</h2>
        <p>{datos.apellido_paterno} {datos.apellido_materno}, {datos.nombre}</p>
        <p><span className="font-bold">Género</span>: {datos.genero === 'H' ? 'Hombre' : 'Mujer'}</p>
        <p><span className="font-bold">Lateralidad</span>: {datos.es_diestro === true ? 'Derecha' : 'Izquierda'}</p>
        <p><span className="font-bold">Fecha de Nacimiento</span>: {datos.fecha_nacimiento.split('T')[0]}</p>
        <p><span className="font-bold">Tipo Sanguíneo</span>: {datos.tipo_sanguineo}</p>
        <div className="justify-end card-actions">
          <Link to={`/alumnos/${datos.curp}`}>
            <button className="btn btn-success">Ver Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ListAlumnosItem
