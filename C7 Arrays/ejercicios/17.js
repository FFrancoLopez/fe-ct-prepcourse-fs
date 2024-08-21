function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  // Declaramos que la variable "result" es igual al primer elemento del array original.
  var result = arrayOfNums[0];
  // Con el bucle for partiendo del segundo elemento recorremos por cada elemento.
  for (let i = 1; i < arrayOfNums.length; i++){
    // Sumamos todos los elementos del array original e incluimos el resultado en el nuevo array "result".
    result = result + arrayOfNums[i];
  }
  // Retornamos el resultado de la suma de todos los elementos del array original.
  return result;
}

module.exports = agregarNumeros;