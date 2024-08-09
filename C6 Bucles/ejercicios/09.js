function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
  // Verificamos si status es igual a 1, o si es igual a 2.
  if ( status ===1){
    return "Online";
  }else if (status ===2){
    return "Away";
  }
  // Retornarà Offline si no es ninguno de los anteriores.
  else{
    return "Offline";
  }
}

module.exports = conection;
