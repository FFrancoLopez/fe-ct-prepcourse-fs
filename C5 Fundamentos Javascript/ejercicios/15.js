function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:
  // Verificamos que "num" sea un numero.
  if (typeof num === 'number' && !Number.isNaN(num)){
    // USamos el operador de modulo(%). Si el residuo de dividir un número por 2 es 0, 
    //entonces el número es par. retorna "true", de lo contrario retorna "false".
    return num % 2 === 0;
  }
//Si no es un numero retornara "false".
  return false;
}

module.exports = esPar;
