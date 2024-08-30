function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  // Comprobamos si el valor de la propiedad "password" en el object"objetoUsuario" coincide con el parámetro "password".
  if(objetoUsuario["password"] === password){
    // Si coincide retornara "true".
    return true;
    // De lo contrario retorna "false".
  }else{
    return false;
  }
}

module.exports = verificarPassword;