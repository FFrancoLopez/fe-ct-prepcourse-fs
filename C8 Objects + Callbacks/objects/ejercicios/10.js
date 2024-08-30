function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:
  // Añadimos la propiedad pasada por parametros al object "objeto" y le damos valor "null".
  objeto[propiedad]= null;
  // Retornamos "objeto" modificado.
  return objeto;
}

module.exports = agregarPropiedad;
