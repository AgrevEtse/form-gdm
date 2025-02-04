import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import escolaridad_id_json from '../assets/json/escolaridad-id.json'

const Alumno = () => {
  const { curp } = useParams();

  const [alumno, setAlumno] = useState({})
  const [tutor1, setTutor1] = useState([])
  const [tutor2, setTutor2] = useState([])
  const [hermanos, setHermanos] = useState([])
  const [contacto, setContacto] = useState([])
  const [pago, setPago] = useState({})
  const [inscripcion, setInscripcion] = useState([])

  const pedirDatos = async () => {
    const url = `http://66.179.241.7:3000`

    const resAlumno = await fetch(`${url}/alumno/${curp}`)
    const dataAlumno = await resAlumno.json()
    setAlumno(dataAlumno)

    const resTutor1 = await fetch(`${url}/tutor1/${curp}`)
    const dataTutor1 = await resTutor1.json()
    setTutor1(dataTutor1)

    const resTutor2 = await fetch(`${url}/tutor2/${curp}`)
    const dataTutor2 = await resTutor2.json()
    setTutor2(dataTutor2)

    const resHermanos = await fetch(`${url}/hermano/${curp}`)
    const dataHermanos = await resHermanos.json()
    setHermanos(dataHermanos)

    const resContactos = await fetch(`${url}/contactoemergencia/${curp}`)
    const dataContactos = await resContactos.json()
    setContacto(dataContactos)

    const resPago = await fetch(`${url}/personapagos/${curp}`)
    const dataPago = await resPago.json()
    setPago(dataPago)

    const resInscripcion = await fetch(`${url}/inscripcion/${curp}`)
    const dataInscripcion = await resInscripcion.json()
    setInscripcion(dataInscripcion)
  }

  useEffect(() => {
    pedirDatos()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='my-16 mx-auto w-1/2 space-y-8'>
      {/* Datos Alumno */}
      {alumno.curp && (
        <div className="collapse collapse-plus bg-base-300 border border-base-300 text-xl">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Datos Alumno</div>
          <div className="collapse-content text-lg">
            <p><span className="font-bold">CURP</span>: {alumno.curp}</p>
            <p><span className="font-bold">Nombre</span>: {alumno.nombre} {alumno.apellido_paterno} {alumno.apellido_materno}</p>
            <p><span className="font-bold">Género</span>: {alumno.genero === 'H' ? 'Hombre' : 'Mujer'}</p>
            <p><span className="font-bold">Fecha de Nacimiento</span>: {alumno.fecha_nacimiento}</p>
            <p><span className="font-bold">Tipo Sanguíneo</span>: {alumno.tipo_sanguineo}</p>
            <p><span className="font-bold">Lateralidad</span>: {alumno.es_diestro === true ? 'Derecha' : 'Izquierda'}</p>
            <p><span className="font-bold">Estatura</span>: {alumno.estatura_cm} cm</p>
            <p><span className="font-bold">Peso</span>: {alumno.peso_kg} kg</p>

            <p><span className="font-bold">Nota Enfermedad</span>: {alumno.nota_enfermedad}</p>
          </div>
        </div>
      )}

      {/* Inscripcion */}
      {inscripcion.length > 0 && (
        <div className="collapse collapse-plus bg-base-300 border border-base-300 text-xl">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Inscripcion</div>
          <div className="collapse-content text-lg">
            <p><span className="font-bold">Fecha Inscripción</span>: {inscripcion[0].fecha_inscripcion.split('T')[0]}</p>
            <p><span className="font-bold">Escolaridad</span>: {escolaridad_id_json[inscripcion[0].id_escolaridad].escolaridad}</p>
            <p><span className="font-bold">Grado</span>: {escolaridad_id_json[inscripcion[0].id_escolaridad].grado}</p>
            <p><span className="font-bold">Ciclo</span>: {inscripcion[0].id_ciclo === 'd20edf04-26e5-423b-a84b-12ed7dde9ec5' ? '2025-2026' : '2025B'}</p>
            <p><span className="font-bold">¿Está activo?</span>: <span>{inscripcion[0].esta_activo === true ? 'Sí' : 'No'}</span></p>
          </div>
        </div>
      )}

      {/* Tutor 1 */}
      {tutor1.length > 0 && (
        <div className="collapse collapse-plus bg-base-300 border border-base-300 text-xl">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Datos del Tutor 1</div>
          <div className="collapse-content text-lg">
            <p><span className="font-bold">Nombre</span>: {tutor1[0].nombre} {tutor1[0].apellido_paterno} {tutor1[0].apellido_materno}</p>
            <p><span className="font-bold">Teléfono (fijo)</span>: {tutor1[0].telefono_fijo}</p>
            <p><span className="font-bold">Teléfono (móvil)</span>: {tutor1[0].telefono_movil}</p>
            <p><span className="font-bold">Correo Electrónico</span>: {tutor1[0].correo_electronico}</p>
          </div>
        </div>
      )}

      {/* Tutor 2 */}
      {tutor2.length > 0 && (
        <div className="collapse collapse-plus bg-base-300 border border-base-300 text-xl">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Datos del Tutor 2</div>
          <div className="collapse-content text-lg">
            <p><span className="font-bold">Nombre</span>: {tutor2[0].nombre} {tutor2[0].apellido_paterno} {tutor2[0].apellido_materno}</p>
            <p><span className="font-bold">Teléfono (fijo)</span>: {tutor2[0].telefono_fijo}</p>
            <p><span className="font-bold">Teléfono (móvil)</span>: {tutor2[0].telefono_movil}</p>
            <p><span className="font-bold">Correo Electrónico</span>: {tutor2[0].correo_electronico}</p>
          </div>
        </div>
      )}

      {/* Hermanos */}
      {
        hermanos.length > 0 && (
          <div className="collapse collapse-plus bg-base-300 border border-base-300 text-xl">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">Hermanos</div>
            <div className="collapse-content text-lg space-y-2">
              {hermanos.map((hermano, i) => (
                <div key={hermano.id} className=''>
                  <p><span className="font-bold">Hermano {i + 1}</span>: {hermano.nombre}</p>
                  <p><span className="font-bold">Escolaridad</span>: {hermano.nivel}</p>
                </div>
              ))}
            </div>
          </div>
        )
      }

      {/* Contacto de Emergencia */}
      {contacto.length > 0 && (
        <div className="collapse collapse-plus bg-base-300 border border-base-300 text-xl">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Contactos de Emergencia</div>
          <div className="collapse-content text-lg space-y-2">
            {contacto.map((contacto, i) => (
              <div key={contacto.id} className=''>
                <p><span className="font-bold">Contacto {i + 1}</span>: {contacto.nombre}</p>
                <p><span className="font-bold">Parentesco</span>: {contacto.parentesco === 1 ? 'Papá' : contacto.parentesco === 2 ? 'Mamá' : contacto.parentesco === 3 ? 'Tío' : contacto.parentesco === 4 ? 'Tía' : contacto.parentesco === 5 ? 'Abuelo' : contacto.parentesco === 6 ? 'Abuela' : 'Desconocido'}</p>
                <p><span className="font-bold">Teléfono</span>: {contacto.telefono}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pago */}
      {pago.nombre && (
        <div className="collapse collapse-plus bg-base-300 border border-base-300 text-xl">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Datos de Pago</div>
          <div className="collapse-content text-lg">
            <p><span className="font-bold">Nombre</span>: {pago.nombre}</p>
            <p><span className="font-bold">Parentesco</span>: {pago.responsable === 1 ? 'Papá' : pago.responsable === 2 ? 'Mamá' : pago.responsable === 3 ? 'Tío' : pago.responsable === 4 ? 'Tía' : pago.responsable === 5 ? 'Abuelo' : pago.responsable === 6 ? 'Abuela' : 'Desconocido'}</p>
            <p><span className="font-bold">Teléfono</span>: {pago.telefono}</p>
            <p><span className="font-bold">Correo Electrónico</span>: {pago.correo}</p>
            <p><span className='font-bold'>¿Requiere Factura?</span>: {pago.factura === true ? 'Sí' : 'No'}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Alumno
