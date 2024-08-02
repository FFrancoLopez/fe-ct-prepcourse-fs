function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  // Si "num" es mayor a 0. "Es positivo".
  if (num > 0){
    return ("Es positivo");
    // De otro modo si "num" es menor a 0, retorna "Es negativo".
  }else if ( num < 0){
    return ("Es negativo");
    // De otro modo retornara "false".
  }else{
    return false;
  }
}

module.exports = esPositivo;