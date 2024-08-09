function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  // Verificamos primero si el "num" es divisible por ambos (3 y 5), porque es la
  // condición más específica y abarca una combinación de las otras dos condiciones. Retorna "fizzbuzz".
  if (num % 3 ===0 && num % 5 ===0){
    return "fizzbuzz";
    // De otro modo si num es divisible solo por 3, retorna "fizz".
  }else if (num % 3 ===0){
    return "fizz";
    // De otro modo si num es divisible solo por 5, retorna "buzz".
  }else if ( num % 5 ===0){
    return "buzz";
    // Si ninguna condicion se cumple, retornara false.
  }else{
    return false;
  }
}

module.exports = fizzBuzz;
