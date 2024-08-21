function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  // Definimos una variable que contiene un array vacio.
  var numerosPares = [];
  // Con el bucle for iteramos por cada elemento del array original.
  for (let i = 0; i < numeros.length; i++){
    // Si el elemento del array original es divisor de 2 y su resultado no es cero, saltamos al proximo elemento.
    if (numeros[i] % 2 !== 0){
      continue;
    }
    // Si su resultado da cero, eso significa que es par y lo agregamos al array vacio "numerosPares".
    numerosPares.push(numeros[i]);
  }
  // Retornamos la longitud del nuevo array para saber la cantidad de elementos pares que contiene.
  return numerosPares.length;
}

module.exports = contarParesConContinue;
