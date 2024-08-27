const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  // Con el bucle "for" iteramos por cada elemento del array original.
  for (let i = 0; i < array.length; i++){
    // Con la funcion callback verificamos si es el elemento que estamos buscando, si lo es, retorna el elemento.
    if(callback(array[i])){
      return array[i];
    }
  }
  // Si no se encuentra ningun elemento o no coincide con el elemento pasado, retorna el string.
  return "No se encontró el elemento";
};

module.exports = buscarElemento;
