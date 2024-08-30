function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  // Verificamos si el object "objeto" posee una propiedad con el mismo nombre que el parametro "propiedad".
  // El metodo "hasOwnProperty" por defecto nos devuelve un booleano indicando si posee la propiedad(true) o no(false).
  return objeto.hasOwnProperty(propiedad);
}

module.exports = tienePropiedad;