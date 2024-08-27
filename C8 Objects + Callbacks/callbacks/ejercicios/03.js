function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole por valores los números num1 y num2.
  // Tu código:
  // Creamos variable "resultado" para almacenar el resultado de la funcion "cb" pasandole "num1" y "num2" como argumentos. Luego lo retornamos.
  var resultado = cb(num1, num2);
  return resultado;
}

module.exports = operacionMatematica;
