function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  // Accedemos a la propiedad "amigos" del object "objetoUsuario" y agregamos el nuevo valor, pasado por parametro, al final.
  objetoUsuario["amigos"].push(nuevoAmigo);
  // Retornamos el object "objetoUsuario" modificado.
  return objetoUsuario;
}

module.exports = agregarAmigo;