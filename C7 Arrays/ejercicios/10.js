function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  // Con el "bucle for", Verificamos si los elementos del array son "string" (typeof array[i] === 'string')
  // y si su longitud es mayor o igual que 5 (array[i].length >= 5).
  for ( let i = 0; i < array.length; i++){
    if (typeof array[i] === 'string' && array[i].length >= 5){
      // Si se encuentra un string que cumple con esas condiciones, se retorna inmediatamente.
      return array[i];
    }
  }
  // Si no se encuentra ningún string que cumpla con los criterios, se retorna "undefined".
  return undefined;
}

module.exports = obtenerPrimerStringLargo;
