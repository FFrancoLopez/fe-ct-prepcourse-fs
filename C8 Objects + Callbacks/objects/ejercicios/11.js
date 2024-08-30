function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // NOTA: no necesitas retornar nada.
  // Tu código:
  // Usamos la notación de corchetes para acceder al método por el nombre de la propiedad (metodo).
  // Luego invocamos la función utilizando ().
  objeto[metodo]();
  
}

module.exports = invocarMetodo;