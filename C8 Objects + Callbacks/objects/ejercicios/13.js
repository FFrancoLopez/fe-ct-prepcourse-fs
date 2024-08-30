function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  // Con la palabra reservada "delete" borramos la "propiedad"([propiedad]) del object "objeto".
  delete objeto[propiedad];
  //  Retornamos "objeto" modificado.
  return objeto;
}

module.exports = eliminarPropiedad;