import { equalObjects } from '@/utils/compareObjects'
import { DEFAULT_HERMANO } from '@/utils/defaultStates'

const API_URL = import.meta.env.VITE_API_URL

const postForm = async ({ curp, form }) => {
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
      curp_alumno: curp
    },

    tutor_2: {
      ...form.tutor_2,
      fecha_nacimiento: new Date(form.tutor_2.fecha_nacimiento).toISOString(),
      curp_alumno: curp
    },

    hermanos: form.hermanos
      .filter((hermano) => !equalObjects(hermano, DEFAULT_HERMANO))
      .map((hermano) => ({
        ...hermano,
        curp_alumno: curp
      })),

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

export default postForm
