export const cambiarTitulo = (titulo) => {
  if (!titulo) {
    document.title = '? - GDM Inscripciones'
    return
  }

  document.title = `${titulo} - GDM Inscripciones`
}
