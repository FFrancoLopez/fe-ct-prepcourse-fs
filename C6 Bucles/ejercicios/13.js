function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  // Verificamos si "num" es entero, es true, de lo contrario es false.
  // El Math.floor() redondea al entero de menor valor. 
  if ( Math.floor(num) === num){
    return true;
  }else{
    return false;
  }
}

module.exports = esEntero;
