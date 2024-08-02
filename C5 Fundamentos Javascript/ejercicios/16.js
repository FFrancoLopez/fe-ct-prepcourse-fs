function esImpar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es impar.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 15 ---> true
  // 14 ---> false
  // Tu código:
  // Verificamos que sea un numero.
  if (typeof num === 'number' && !Number.isNaN(num)){
    // Usamos el operador de modulo(%). Si el residuo de dividir un número por 2 no es 0, 
    //entonces el número es impar. retorna "true", de lo contrario retorna "false".
    return num % 2 !== 0;
  }
  // Retorna "false" si no es un numero.
  return false;
}

module.exports = esImpar;