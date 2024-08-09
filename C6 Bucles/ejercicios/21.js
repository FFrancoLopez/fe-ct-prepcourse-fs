function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  // Si "numero" es menor a 1, retornamos false porque las potencias de 2 siempre son números positivos y 1 es la potencia más baja.
  if (numero < 1){
    return false;
  }
  // En este caso el bucle while se ejecutarà siempre que "numero" sea diferente de 1.
  while (numero !== 1){
    // Si en alguna iteración "numero" no es divisible por 2 (numero % 2 !== 0), retornamos "false".
    if (numero % 2 !== 0){
      return false;
    }
  // Si es divisible, continuamos dividiendo "numero" por 2 hasta que "numero" llegue a 1.
    numero = numero / 2;
  }
  // Si el bucle termina y "numero" es igual a 1, significa que el número original era una potencia de 2, retornamos "true".
  return true;
}

module.exports = esPotenciaDeDos;