function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  // Si el array está vacío, se devuelve 0 para indicar que no hay elementos en el array.
  if (array.length === 0) return 0;
  // Definimos variable a 0, este almacena el índice del número mayor encontrado hasta ese punto.
  var indiceDelMayor = 0;
  // En la variable "max" se guarda el valor del primer elemento (array[0]) como el valor máximo inicial.
  var max = array[0];
  // Se recorre el array desde el segundo elemento (índice 1 en adelante).
  for (let i = 1; i < array.length; i++){
    // Para cada elemento, se verifica si es mayor que el valor máximo actual (max).
    if (array[i] > max){
      // Si es así, se actualizan tanto el valor máximo como el índice (indiceDelMayor).
       max = array[i];
       indiceDelMayor = i;
    }
  }
  // Retorna el índice del número más grande del array.
  return indiceDelMayor;
}

module.exports = encontrarIndiceMayor;
