function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  // Se utiliza el método map() para crear un nuevo array, transformando cada elemento del array original.
  var stringEnMayusculas = array.map((string) =>{
    // Si es un string lo convertimos con el metodo "toUpperCase()".
    return string.toUpperCase();
  });
  // El método map() devuelve un nuevo array con los strings transformados a mayúsculas.
  return stringEnMayusculas;
  // Si el elemento no es un string, se retorna tal cual.
}

module.exports = convertirStringAMayusculas;
