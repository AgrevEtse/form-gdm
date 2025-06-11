import { equalObjects } from '@/utils/compareObjects'
import { DEFAULT_HERMANO, DEFAULT_CONTACTO } from '@/utils/defaultStates'

const API_URL = import.meta.env.VITE_API_URL

const postForm = async ({ curp, form }) => {
  await fetch(`${API_URL}/alumno`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...form.alumno,
      fecha_nacimiento: new Date(form.alumno.fecha_nacimiento).toISOString(),
      curp
    })
  })

  await fetch(`${API_URL}/escuelaprocedencia`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...form.escuela_procedencia,
      curp_alumno: curp
    })
  })

  await fetch(`${API_URL}/domicilio`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...form.domicilio,
      curp_alumno: curp
    })
  })

  await fetch(`${API_URL}/inscripcion`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id_ciclo: form.inscripcion.id_ciclo,
      id_escolaridad: form.inscripcion.id_escolaridad,
      esta_activo: form.inscripcion.esta_activo,
      fecha_inscripcion: new Date(
        form.inscripcion.fecha_inscripcion
      ).toISOString(),
      curp_alumno: curp
    })
  })

  await fetch(`${API_URL}/tutor1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...form.tutor1,
      fecha_nacimiento: new Date(form.tutor1.fecha_nacimiento).toISOString(),
      curp_alumno: curp
    })
  })

  await fetch(`${API_URL}/tutor2`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...form.tutor2,
      fecha_nacimiento: new Date(form.tutor2.fecha_nacimiento).toISOString(),
      curp_alumno: curp
    })
  })

  if (!equalObjects(form.hermano1, DEFAULT_HERMANO)) {
    await fetch(`${API_URL}/hermano`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...form.hermano1,
        curp_alumno: curp
      })
    })
  }

  if (!equalObjects(form.hermano2, DEFAULT_HERMANO)) {
    await fetch(`${API_URL}/hermano`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...form.hermano2,
        curp_alumno: curp
      })
    })
  }

  if (!equalObjects(form.hermano3, DEFAULT_HERMANO)) {
    await fetch(`${API_URL}/hermano`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...form.hermano3,
        curp_alumno: curp
      })
    })
  }

  if (!equalObjects(form.contacto1, DEFAULT_CONTACTO)) {
    await fetch(`${API_URL}/contactoemergencia`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...form.contacto1,
        curp_alumno: curp
      })
    })
  }

  if (!equalObjects(form.contacto2, DEFAULT_CONTACTO)) {
    await fetch(`${API_URL}/contactoemergencia`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...form.contacto2,
        curp_alumno: curp
      })
    })
  }

  if (!equalObjects(form.contacto3, DEFAULT_CONTACTO)) {
    await fetch(`${API_URL}/contactoemergencia`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...form.contacto3,
        curp_alumno: curp
      })
    })
  }

  await fetch(`${API_URL}/personapagos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...form.pago,
      curp_alumno: curp
    })
  })
}

export default postForm
