function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  // Verificamos si la propiedad "email", del object "objetoUsuario", posee un valor definido.
  if (objetoUsuario["email"] !== null && objetoUsuario["email"] !== undefined){
    // Si posee valor definido retornarà "true".
    return true;
    // De lo contrario retorna "false".
  }else{
    return false;
  }
  
}

module.exports = tieneEmail;