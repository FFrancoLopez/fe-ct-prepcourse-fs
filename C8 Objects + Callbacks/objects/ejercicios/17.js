function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:
  // Remplazamos el valor de la propiedad "password" con el nuevo valor "nuevaPassword" pasado por parametro.
  objetoUsuario["password"] = nuevaPassword;
  // Retornamos el object "objetoUsuario" modificado.
  return objetoUsuario;
}

module.exports = actualizarPassword;