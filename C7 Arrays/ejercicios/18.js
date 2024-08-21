function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  // Declaramos una variable que guardara el primer elemento del array original. 
  var promedio = resultadosTest[0];
  // Con el bucle for partiendo desde el indice 1, iteramos por cada elemento del array original.
  for (let i = 1; i < resultadosTest.length; i++){
    // Actualizamos el valor de la variable "promedio" en cada iteracion.
    promedio = promedio + resultadosTest[i];
  }
  // Retornamos el promedio de la suma de todos los elementos del array original, dividiendolo por su longitud.
  return (promedio / resultadosTest.length);
}

module.exports = promedioResultadosTest;
