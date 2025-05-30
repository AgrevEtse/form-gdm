import { createContext, useContext, useState } from 'react'

import idEscolaridadJson from './assets/json/id-escolaridad.json'

const API_URL = import.meta.env.VITE_API_URL

const GlobalStateContext = createContext()

const defaultCurp = ''

const defaultInscripcion = {
  escolaridad: '',
  grado: '',
}

const defaultDatosAlumno = {
  nombre: '',
  apellido_paterno: '',
  apellido_materno: '',
  genero: '',
  es_diestro: true,
  fecha_nacimiento: '',
  nacionalidad: '',
  tipo_sanguineo: '',
  estatura_cm: null,
  peso_kg: null,
  nota_enfermedad: '',
  nota_terapia: '',
}

const defaultDatosEscuelaProcedencia = {
  cct: '',
  matricula: '',
  nombre: '',
}

const defaultDatosDomicilio = {
  domicilio: '',
  colonia: '',
  codigo_postal: '',
  ciudad: '',
  estado: '',
}

const defaultDatosTutor = {
  nombre: '',
  apellido_paterno: '',
  apellido_materno: '',
  estado_nacimiento: '',
  fecha_nacimiento: '',
  telefono_movil: '',
  telefono_fijo: '',
  correo_electronico: '',
  oupacion: '',
  grado_max_estudios: '',
  domicilio: '',
  colonia: '',
  codigo_postal: '',
}

const defaultDatosHermano = {
  nombre: '',
  nivel: '',
}

const defaultDatosContacto = {
  nombre: '',
  telefono: '',
  parentesco: '',
}

const defaultDatosPago = {
  nombre: '',
  telefono: '',
  correo: '',
  factura: false,
  responsable: '',
}

const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true
  if (
    typeof obj1 !== 'object' ||
    obj1 === null ||
    typeof obj2 !== 'object' ||
    obj2 === null
  ) {
    return false
  }

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) return false

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false
    }
  }

  return true
}

// eslint-disable-next-line react/prop-types
export const GlobalStateProvider = ({ children }) => {
  const [curp, setCurp] = useState(defaultCurp)
  const [inscripcion, setInscripcion] = useState(defaultInscripcion)
  const [datosAlumno, setDatosAlumno] = useState(defaultDatosAlumno)
  const [datosEscuelaProcedencia, setDatosEscuelaProcedencia] = useState(
    defaultDatosEscuelaProcedencia,
  )
  const [datosDomicilio, setDatosDomicilio] = useState(defaultDatosDomicilio)
  const [datosTutor1, setDatosTutor1] = useState(defaultDatosTutor)
  const [datosTutor2, setDatosTutor2] = useState(defaultDatosTutor)
  const [datosHermano1, setDatosHermano1] = useState(defaultDatosHermano)
  const [datosHermano2, setDatosHermano2] = useState(defaultDatosHermano)
  const [datosHermano3, setDatosHermano3] = useState(defaultDatosHermano)
  const [datosContacto1, setDatosContacto1] = useState(defaultDatosContacto)
  const [datosContacto2, setDatosContacto2] = useState(defaultDatosContacto)
  const [datosContacto3, setDatosContacto3] = useState(defaultDatosContacto)
  const [datosPago, setDatosPago] = useState(defaultDatosPago)

  const resetStates = () => {
    setCurp(defaultCurp)
    setInscripcion(defaultInscripcion)
    setDatosAlumno(defaultDatosAlumno)
    setDatosEscuelaProcedencia(defaultDatosEscuelaProcedencia)
    setDatosDomicilio(defaultDatosDomicilio)
    setDatosTutor1(defaultDatosTutor)
    setDatosTutor2(defaultDatosTutor)
    setDatosHermano1(defaultDatosHermano)
    setDatosHermano2(defaultDatosHermano)
    setDatosHermano3(defaultDatosHermano)
    setDatosContacto1(defaultDatosContacto)
    setDatosContacto2(defaultDatosContacto)
    setDatosContacto3(defaultDatosContacto)
    setDatosPago(defaultDatosPago)
  }

  const enviarDatos = async () => {
    let contador = 0

    const resAlumno = await fetch(`${API_URL}/alumno`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...datosAlumno,
        fecha_nacimiento: new Date(datosAlumno.fecha_nacimiento).toISOString(),
        curp,
      }),
    })

    const dataAlumno = await resAlumno.json()

    if (!dataAlumno.message) contador++

    const resEscuelaProcedencia = await fetch(`${API_URL}/escuelaprocedencia`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...datosEscuelaProcedencia,
        curp_alumno: curp,
      }),
    })

    const dataEscuelaProcedencia = await resEscuelaProcedencia.json()

    if (!dataEscuelaProcedencia.message) contador++

    const resDomicilio = await fetch(`${API_URL}/domicilio`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...datosDomicilio,
        curp_alumno: curp,
      }),
    })

    const dataDomicilio = await resDomicilio.json()

    if (!dataDomicilio.message) contador++

    const id_escolaridad = idEscolaridadJson[inscripcion.escolaridad + inscripcion.grado]

    let id_ciclo = '2aa6847f-a77b-459a-a7c0-ebd8b4ea0db7' // ciclo 2025-2026
    if (id_escolaridad >= 13){
      id_ciclo = '1c5cd5cb-baa2-425e-befb-25bae3ee2be3' // ciclo 2025B
    }

    const fecha_inscripcion = new Date().toISOString()

    const esta_activo = false

    const resInscripcion = await fetch(`${API_URL}/inscripcion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_escolaridad,
        id_ciclo,
        fecha_inscripcion,
        esta_activo,
        curp_alumno: curp,
      }),
    })

    const dataInscripcion = await resInscripcion.json()

    if (!dataInscripcion.message) contador++

    const resTutor1 = await fetch(`${API_URL}/tutor1`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...datosTutor1,
        fecha_nacimiento: new Date(datosTutor1.fecha_nacimiento).toISOString(),
        curp_alumno: curp,
      }),
    })

    const dataTutor1 = await resTutor1.json()

    if (!dataTutor1.message) contador++

    if (!deepEqual(datosTutor2, defaultDatosTutor)) {
      const resTutor2 = await fetch(`${API_URL}/tutor2`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...datosTutor2,
          fecha_nacimiento: new Date(
            datosTutor2.fecha_nacimiento,
          ).toISOString(),
          curp_alumno: curp,
        }),
      })

      // eslint-disable-next-line no-unused-vars
      const dataTutor2 = await resTutor2.json()
    }

    if (!deepEqual(datosHermano1, defaultDatosHermano)) {
      const resHermano1 = await fetch(`${API_URL}/hermano`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...datosHermano1,
          curp_alumno: curp,
        }),
      })

      // eslint-disable-next-line no-unused-vars
      const dataHermano1 = await resHermano1.json()
    }

    if (!deepEqual(datosHermano2, defaultDatosHermano)) {
      const resHermano2 = await fetch(`${API_URL}/hermano`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...datosHermano2,
          curp_alumno: curp,
        }),
      })

      // eslint-disable-next-line no-unused-vars
      const dataHermano2 = await resHermano2.json()
    }

    if (!deepEqual(datosHermano3, defaultDatosHermano)) {
      const resHermano3 = await fetch(`${API_URL}/hermano`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...datosHermano3,
          curp_alumno: curp,
        }),
      })

      // eslint-disable-next-line no-unused-vars
      const dataHermano3 = await resHermano3.json()
    }

    const resContacto1 = await fetch(`${API_URL}/contactoemergencia`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...datosContacto1,
        curp_alumno: curp,
      }),
    })

    const dataContacto1 = await resContacto1.json()

    if (!dataContacto1.message) contador++

    if (!deepEqual(datosContacto2, defaultDatosContacto)) {
      const resContacto2 = await fetch(`${API_URL}/contactoemergencia`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...datosContacto2,
          curp_alumno: curp,
        }),
      })

      // eslint-disable-next-line no-unused-vars
      const dataContacto2 = await resContacto2.json()
    }

    if (!deepEqual(datosContacto3, defaultDatosContacto)) {
      const resContacto3 = await fetch(`${API_URL}/contactoemergencia`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...datosContacto3,
          curp_alumno: curp,
        }),
      })

      // eslint-disable-next-line no-unused-vars
      const dataContacto3 = await resContacto3.json()
    }

    const resPago = await fetch(`${API_URL}/personapagos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...datosPago,
        curp_alumno: curp,
      }),
    })

    const dataPago = await resPago.json()

    if (!dataPago.message) contador++

    if (contador === 7) {
      resetStates()
      alert('Datos enviados correctamente')
    }
  }

  return (
    <GlobalStateContext.Provider
      value={{
        curp,
        setCurp,
        inscripcion,
        setInscripcion,
        datosAlumno,
        setDatosAlumno,
        datosEscuelaProcedencia,
        setDatosEscuelaProcedencia,
        datosDomicilio,
        setDatosDomicilio,
        datosTutor1,
        setDatosTutor1,
        datosTutor2,
        setDatosTutor2,
        datosHermano1,
        setDatosHermano1,
        datosHermano2,
        setDatosHermano2,
        datosHermano3,
        setDatosHermano3,
        datosContacto1,
        setDatosContacto1,
        datosContacto2,
        setDatosContacto2,
        datosContacto3,
        setDatosContacto3,
        datosPago,
        setDatosPago,
        resetStates,
        enviarDatos,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalState = () => useContext(GlobalStateContext)
