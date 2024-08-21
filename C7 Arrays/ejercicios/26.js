function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  //Con el bucle for recorremos todos los elemntos del array "secuencia".
  for ( let i = 0; i < secuencia.length; i++){
    // Si el resultado del elemento y el primer argumento de la funcion("n"), usando el operador %, es cero.
    // Se retorna el elemento inmediatamente y se detiene el bucle(break).
    if (secuencia[i] % n === 0){
      return secuencia[i];
      break;
    }
  }

// Si el bucle se completa sin encontrar un múltiplo,
//  se retorna undefined para indicar que no se encontró ningún múltiplo de n en la secuencia.
  return undefined;
}

module.exports = encontrarPrimerMultiploDeN;