import { equalObjects } from '@/utils/compareObjects'
import { DEFAULT_HERMANO } from '@/utils/defaultStates'

const API_URL = import.meta.env.VITE_API_URL

export const postForm = async ({ curp, form }) => {
  // Calculando array de hermano
  // Solo se mandan los hermanos necesarios
  // Si no hay hermanos, se retorna undefined porque la API llora
  const hermanosArray = (() => {
    const arr = form.hermanos
      .filter((h) => !equalObjects(h, DEFAULT_HERMANO))
      .map((h) => ({ ...h, curp_alumno: curp }))
    return arr.length > 0 ? arr : undefined
  })()

  const transaccionBody = {
    alumno: {
      ...form.alumno,
      fecha_nacimiento: new Date(form.alumno.fecha_nacimiento).toISOString(),
      curp: curp
    },

    escuela: {
      ...form.escuela,
      curp_alumno: curp
    },

    domicilio: {
      ...form.domicilio,
      curp_alumno: curp
    },

    inscripcion: {
      ...form.inscripcion,
      fecha_inscripcion: new Date(
        form.inscripcion.fecha_inscripcion
      ).toISOString(),
      curp_alumno: curp,

      escolaridad: undefined,
      grado: undefined,
      id_ciclo: undefined
    },

    tutor_1: {
      ...form.tutor_1,
      fecha_nacimiento: new Date(form.tutor_1.fecha_nacimiento).toISOString(),
      telefono_fijo:
        form.tutor_1.telefono_fijo === ''
          ? undefined
          : form.tutor_1.telefono_fijo,
      curp_alumno: curp
    },

    tutor_2: {
      ...form.tutor_2,
      fecha_nacimiento: new Date(form.tutor_2.fecha_nacimiento).toISOString(),
      telefono_fijo:
        form.tutor_2.telefono_fijo === ''
          ? undefined
          : form.tutor_2.telefono_fijo,
      curp_alumno: curp
    },

    hermanos: hermanosArray,

    contacto_emergencia: form.contactos.map((contacto) => ({
      ...contacto,
      curp_alumno: curp
    })),

    persona_pago: {
      ...form.persona_pago,
      curp_alumno: curp
    }
  }

  const res = await fetch(`${API_URL}/inscripcion/transaccion`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transaccionBody)
  })

  if (res.status !== 201) {
    throw new Error('Hubo un problema al guardar los datos. Volver a intentar')
  }
}

export const postReiscripcion = async ({ curp, form }) => {
  const hermanosArray = (() => {
    const arr = form.hermanos
      .filter((h) => !equalObjects(h, DEFAULT_HERMANO))
      .map((h) => ({ ...h, curp_alumno: curp }))
    return arr.length > 0 ? arr : undefined
  })()

  const reinscripcionBody = {
    curp: curp,

    alumno: {
      ...form.alumno,
      fecha_nacimiento: new Date(form.alumno.fecha_nacimiento).toISOString(),
      curp: undefined
    },

    escuela: {
      ...form.escuela,
      curp_alumno: curp,
      id: undefined
    },

    domicilio: {
      ...form.domicilio,
      id: undefined,
      curp_alumno: undefined
    },

    inscripcion: {
      ...form.inscripcion,
      fecha_inscripcion: new Date(
        form.inscripcion.fecha_inscripcion
      ).toISOString(),
      curp_alumno: curp,

      escolaridad: undefined,
      grado: undefined,
      id_ciclo: undefined,
      id: undefined
    },

    tutor_1: {
      ...form.tutor_1,
      fecha_nacimiento: new Date(form.tutor_1.fecha_nacimiento).toISOString(),
      telefono_fijo:
        form.tutor_1.telefono_fijo === ''
          ? undefined
          : form.tutor_1.telefono_fijo,
      curp_alumno: curp,
      id: undefined
    },

    tutor_2: {
      ...form.tutor_2,
      fecha_nacimiento: new Date(form.tutor_2.fecha_nacimiento).toISOString(),
      telefono_fijo:
        form.tutor_2.telefono_fijo === ''
          ? undefined
          : form.tutor_2.telefono_fijo,
      curp_alumno: curp,
      id: undefined
    },

    hermanos: hermanosArray,

    contacto_emergencia: form.contactos.map((contacto) => ({
      ...contacto,
      curp_alumno: curp
    })),

    persona_pago: {
      ...form.persona_pago,
      curp_alumno: curp,
      id: undefined
    }
  }

  const res = await fetch(`${API_URL}/inscripcion/reinscripcion`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reinscripcionBody)
  })

  if (res.status !== 201) {
    throw new Error('Hubo un problema al guardar los datos. Volver a intentar')
  }
}
