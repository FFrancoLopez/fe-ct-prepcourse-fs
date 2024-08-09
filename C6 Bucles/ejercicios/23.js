function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  // Si "numero" es menor o igual a 1, no es un numero primo. Retorna false.
  if (numero <= 1){
    return false;
  }
  // Itera a través de todos los números desde 2 hasta "numero" - 1.
  // Si "numero" es divisible por cualquier número en este rango, retorna false, no es primo.
  for (let i =2; i < numero; i++){
    if (numero % i === 0){
      // Si encontramos un divisor, no es primo.
      return false; 
    }
  }
  // Si el bucle se completa sin encontrar divisores, retorna true,.
  //es decir, si no encontramos divisores, el número es primo.
  return true;
}
module.exports = esNumeroPrimo;
