function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  // Agregamos "elemento" al comienzo del array con .unshift() y retornamos array.
  array.unshift(elemento);
  return array;
}

module.exports = agregarItemAlComienzoDelArray;