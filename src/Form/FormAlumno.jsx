import { useState } from 'react'

import { useGlobalState } from '../GlobalState'
import paises from '../assets/json/paises.json'
import estados from '../assets/json/estados.json'
import municipios from '../assets/json/estados-municipios.json'
import grados from '../assets/json/escolaridad-grados.json'

const FormAlumno = () => {
  const {
    curp,
    setCurp,
    inscripcion,
    setInscripcion,
    datosAlumno,
    setDatosAlumno,
    datosDomicilio,
    setDatosDomicilio,
    datosEscuelaProcedencia,
    setDatosEscuelaProcedencia,
  } = useGlobalState()

  const [estado, setEstado] = useState(datosDomicilio.estado)
  const [municipio, setMunicipio] = useState(datosDomicilio.ciudad)
  const [escolaridad, setEscolaridad] = useState(inscripcion.escolaridad)
  // eslint-disable-next-line no-unused-vars
  const [grado, setGrado] = useState(inscripcion.grado)

  return (
    <div className='w-full mx-auto p-6 bg-gray-900 text-white rounded-md shadow-md'>
      <h2 className='font-bold text-2xl mb-6 text-center'>Datos del Alumno</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <label className='floating-label'>
          <span>CCT de Procedencia <span className='text-rose-600'>*</span></span>
          <input
            value={datosEscuelaProcedencia.cct}
            onChange={(e) => {
              setDatosEscuelaProcedencia({
                ...datosEscuelaProcedencia,
                cct: e.target.value,
              })
            }}
            minLength={1}
            maxLength={10}
            required
            type='text'
            placeholder='CCT'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>Matricula de Escuela de Procedencia <span className='text-rose-600'>*</span></span>
          <input
            value={datosEscuelaProcedencia.matricula}
            onChange={(e) => {
              setDatosEscuelaProcedencia({
                ...datosEscuelaProcedencia,
                matricula: e.target.value,
              })
            }}
            minLength={1}
            maxLength={10}
            required
            type='text'
            placeholder='Matricula'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>Escuela de Procedencia <span className='text-rose-600'>*</span></span>
          <input
            value={datosEscuelaProcedencia.nombre}
            onChange={(e) => {
              setDatosEscuelaProcedencia({
                ...datosEscuelaProcedencia,
                nombre: e.target.value,
              })
            }}
            minLength={1}
            maxLength={100}
            required
            type='text'
            placeholder='Nombre Escuela'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>CURP <span className='text-rose-600'>*</span></span>
          <input
            value={curp}
            onChange={(e) => {
              setCurp(e.target.value)
            }}
            minLength={18}
            maxLength={20}
            required
            type='text'
            placeholder='CURP'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>Nombre <span className='text-rose-600'>*</span></span>
          <input
            value={datosAlumno.nombre}
            onChange={(e) => {
              setDatosAlumno({
                ...datosAlumno,
                nombre: e.target.value,
              })
            }}
            minLength={1}
            maxLength={40}
            required
            type='text'
            placeholder='Nombre'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>Apellido Paterno <span className='text-rose-600'>*</span></span>
          <input
            value={datosAlumno.apellido_paterno}
            onChange={(e) => {
              setDatosAlumno({
                ...datosAlumno,
                apellido_paterno: e.target.value,
              })
            }}
            minLength={1}
            maxLength={40}
            required
            type='text'
            placeholder='Apellido Paterno'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>Apellido Materno <span className='text-rose-600'>*</span></span>
          <input
            value={datosAlumno.apellido_materno}
            onChange={(e) => {
              setDatosAlumno({
                ...datosAlumno,
                apellido_materno: e.target.value,
              })
            }}
            minLength={1}
            maxLength={40}
            required
            type='text'
            placeholder='Apellido Materno'
            className='input input-md'
          />
        </label>

        <label className='select select-md'>
          <span className='label'>Género  <span className='text-rose-600'>*</span></span>
          <select
            required
            onChange={(e) => {
              setDatosAlumno({
                ...datosAlumno,
                genero: e.target.value,
              })
            }}
            value={datosAlumno.genero}
          >
            <option
              selected
              disabled
              hidden
              value=''
            >
              Escoge el género...
            </option>
            <option value='H'>Hombre</option>
            <option value='M'>Mujer</option>
          </select>
        </label>

        <label className='select select-md'>
          <span className='label'>Tipo Sanguíneo <span className='text-rose-600'>*</span></span>
          <select
            required
            onChange={(e) => {
              setDatosAlumno({
                ...datosAlumno,
                tipo_sanguineo: e.target.value,
              })
            }}
            value={datosAlumno.tipo_sanguineo}
          >
            <option
              selected
              disabled
              hidden
              value=''
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

        <label className='select select-md'>
          <span className='label'>Lateralidad <span className='text-rose-600'>*</span></span>
          <select
            required
            onChange={(e) => {
              setDatosAlumno({
                ...datosAlumno,
                es_diestro: e.target.value === 'true',
              })
            }}
            value={datosAlumno.es_diestro}
          >
            <option
              selected
              disabled
              hidden
              value=''
            >
              Escoge la lateralidad...
            </option>
            <option value={true}>Derecho</option>
            <option value={false}>Izquierdo</option>
          </select>
        </label>

        <label className='input input-md'>
          <span className='label'>Fecha Nacimiento <span className='text-rose-600'>*</span></span>
          <input
            required
            onChange={(e) => {
              setDatosAlumno({
                ...datosAlumno,
                fecha_nacimiento: e.target.value,
              })
            }}
            value={datosAlumno.fecha_nacimiento}
            type='date'
          />
        </label>

        <label className='select select-md'>
          <span className='label'>Nacionalidad <span className='text-rose-600'>*</span></span>
          <select
            required
            onChange={(e) => {
              setDatosAlumno({
                ...datosAlumno,
                nacionalidad: e.target.value,
              })
            }}
            value={datosAlumno.nacionalidad}
          >
            <option
              selected
              disabled
              hidden
              value=''
            >
              Escoge la nacionalidad...
            </option>
            {paises.map((pais) => (
              <option
                key={pais.iso3}
                value={pais.nameES}
              >
                {pais.nameES}
              </option>
            ))}
          </select>
        </label>

        <label className='select select-md'>
          <span className='label'>Escolaridad <span className='text-rose-600'>*</span></span>
          <select
            required
            value={inscripcion.escolaridad}
            onChange={(e) => {
              setEscolaridad(e.target.value)
              setGrado(grados[e.target.value][0].grado)
              setInscripcion({
                ...inscripcion,
                escolaridad: e.target.value,
                grado: grados[e.target.value][0].grado,
              })
            }}
          >
            <option
              selected
              disabled
              hidden
              value=''
            >
              Escoge la escolaridad...
            </option>
            <option value='Preescolar'>Preescolar</option>
            <option value='Primaria'>Primaria</option>
            <option value='Secundaria'>Secundaria</option>
            <option value='Bachillerato'>Bachillerato</option>
          </select>
        </label>

        <label className='select select-md'>
          <span className='label'>Grado <span className='text-rose-600'>*</span></span>
          <select
            required
            value={inscripcion.grado}
            onChange={(e) => {
              setInscripcion({ ...inscripcion, grado: Number(e.target.value) })
              setGrado(e.target.value)
            }}
          >
            <option
              selected
              disabled
              hidden
              value=''
            >
              Escoge el grado...
            </option>
            {escolaridad &&
              grados[escolaridad].map((grado) => (
                <option
                  key={grado.grado}
                  value={grado.grado}
                >
                  {grado.nombre}
                </option>
              ))}
          </select>
        </label>

        <label className='floating-label'>
          <span>Estatura (cm) <span className='text-rose-600'>*</span></span>
          <input
            onChange={(e) => {
              setDatosAlumno({
                ...datosAlumno,
                estatura_cm: Number(e.target.value),
              })
            }}
            min={1}
            max={300}
            required
            value={datosAlumno.estatura_cm}
            type='number'
            placeholder='Estatura (cm)'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>Peso (kg) <span className='text-rose-600'>*</span></span>
          <input
            onChange={(e) => {
              setDatosAlumno({
                ...datosAlumno,
                peso_kg: Number(e.target.value),
              })
            }}
            min={1}
            max={300}
            required
            value={datosAlumno.peso_kg}
            type='number'
            placeholder='Peso (kg)'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>Domicilio <span className='text-rose-600'>*</span></span>
          <input
            value={datosDomicilio.domicilio}
            onChange={(e) => {
              setDatosDomicilio({
                ...datosDomicilio,
                domicilio: e.target.value,
              })
            }}
            minLength={1}
            maxLength={30}
            required
            type='text'
            placeholder='Domicilio'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>Colonia <span className='text-rose-600'>*</span></span>
          <input
            value={datosDomicilio.colonia}
            onChange={(e) => {
              setDatosDomicilio({
                ...datosDomicilio,
                colonia: e.target.value,
              })
            }}
            minLength={1}
            maxLength={30}
            required
            type='text'
            placeholder='Colonia'
            className='input input-md'
          />
        </label>

        <label className='floating-label'>
          <span>C.P. <span className='text-rose-600'>*</span></span>
          <input
            value={datosDomicilio.codigo_postal}
            onChange={(e) => {
              setDatosDomicilio({
                ...datosDomicilio,
                codigo_postal: e.target.value,
              })
            }}
            type='number'
            placeholder='C.P.'
            min={100000}
            max={999999}
            required
            pattern='[0-9]{6}'
            className='input input-md'
          />
        </label>

        <label className='select select-md'>
          <span className='label'>Estado <span className='text-rose-600'>*</span></span>
          <select
            required
            value={estado}
            onChange={(e) => {
              setEstado(e.target.value)
              setMunicipio(municipios[e.target.value][0])
              setDatosDomicilio({
                ...datosDomicilio,
                estado: e.target.value,
                ciudad: municipios[e.target.value][0],
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

        <label className='select select-md'>
          <span className='label'>Ciudad <span className='text-rose-600'>*</span></span>
          <select
            required
            value={municipio}
            onChange={(e) => {
              setMunicipio(e.target.value)
              setDatosDomicilio({
                ...datosDomicilio,
                ciudad: e.target.value,
              })
            }}
          >
            <option
              selected
              disabled
              hidden
              value=''
            >
              Escoge el municipio...
            </option>
            {estado &&
              municipios[estado].map((municipio) => {
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
            onChange={(e) => {
              setDatosAlumno({
                ...datosAlumno,
                nota_enfermedad: e.target.value,
              })
            }}
            minLength={0}
            maxLength={200}
            value={datosAlumno.nota_enfermedad}
            className='textarea h-24'
            placeholder='Indique si el alumno padece de alguna discapacidad, enfermedad crónica, alergias o algún tipo de tratamiento médico.'
          ></textarea>
        </fieldset>

        <fieldset className='fieldset'>
          <legend className='fieldset-legend'>Terapias</legend>
          <textarea
            onChange={(e) => {
              setDatosAlumno({
                ...datosAlumno,
                nota_terapia: e.target.value,
              })
            }}
            minLength={0}
            maxLength={200}
            value={datosAlumno.nota_terapia}
            className='textarea h-24'
            placeholder='Indique si el alumno asiste a terapia, explique de que tipo: físico, psicológica u otra y por qué'
          ></textarea>
        </fieldset>
      </div>
    </div>
  )
}

export default FormAlumno
