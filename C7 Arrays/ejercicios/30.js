function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  // Creamos el objeto "{}" para contar la frecuencia de cada elemento.
  var contador = {};
  // Recorremos por cada elemento del array original.
  for (let i = 0; i < numeros.length; i++){
    // Veruficamos si el elemento actual ya existe en el objeto "contador".
    if ( contador[numeros[i]]){
      // Si està, lo retorna.
      return numeros[i];
    }
    // Si no està, lo agrega con el valor "1", indicando que es la primera vez que aparece.
    contador[numeros[i]] = 1;
  }
  // Si no hay elementos repetidos, retornara "undefined".
  return undefined;
}
module.exports = encontrarElementoRepetido;
