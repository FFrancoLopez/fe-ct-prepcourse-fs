function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  // Definimos nueva variable vacia donde incluiremos los resultados(elemento * indice de elemento).
  var resultadosMultiplicados = [];
  // Con el bucle for recorremos cada elemento del array original.
  for (let i = 0; i < array.length; i++){
    // Incluimos al nuevo array los resultados entre cada elemento del array original multiplicado por su indice.
      resultadosMultiplicados.push(array[i] * i);
  }
  // Retornamos el array nuevo con los resultados previamente agregados. 
  return resultadosMultiplicados;
}

module.exports = multiplicarElementosPorIndice;
