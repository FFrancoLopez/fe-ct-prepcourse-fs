function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  // El metodo filter() nos permite crear una function que recibe cada elemento del array original (numero).
  // Le especificamos la condicion(numero > 10) que deben cumplir cada numero para ser incluidos en el nuevo array.
  var cantidadDeMayores = array.filter(function (numero){
    return numero > 10;
  })
  // Retornamos la longitud del array "cantidadDeMayores" que recibio los elementos del array original.
  return cantidadDeMayores.length;
}

module.exports = contarElementosMayoresA10;
