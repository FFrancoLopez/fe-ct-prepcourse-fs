function obtenerSaludo(nombre) {
  // La función recibe un argumento llamado nombre el cual es un string. 
  // Toma el string "nombre" y concatena otros string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Retorna el nuevo string. 
  // Tu código:
  // Le pedimos que retorne una cadena antes de nuestro string (nombre) y le agregamos un signo de exclamacion al final.
  return "Hola " + nombre + "!";
}

module.exports = obtenerSaludo;