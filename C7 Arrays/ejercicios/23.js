function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución 
  // y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  // Declaramos array vacio "numAumentadoEnDos" para posteriormente guardar los resultados de la suma de num + 2.
  var numAumendadoEnDos = [];
  // Declaramos una variable "suma" que llevara el valor de "num".
  var suma = num;
  // Con el bucle while iteramos un limite de 10 veces y en cada iteracion actualizamos el valor de "suma" (suma + 2).
  while (numAumendadoEnDos.length < 10){
    suma = suma + 2;
    // En cada iteracion agregamos a nuestro array vacio el resultado de "suma + 2".
    numAumendadoEnDos.push(suma);
    // Agregamos una segunda condicion en el bucle y decimos que si la suma es igual a la cantidad de iteracion
    // debera interrumpirse y retornar el string "Se interrumpió la ejecución".
    if (suma === numAumendadoEnDos.length){
      return "Se interrumpió la ejecución";
    }
  }
  // Si no se interrumpe el bucle, retornara el array con los resultados de las sumas.
  return numAumendadoEnDos;
}

module.exports = breakStatement;
