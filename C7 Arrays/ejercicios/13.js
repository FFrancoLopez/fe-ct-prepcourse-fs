function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  // El metodo filter() nos permite crear un nuevo array con todos los elementos que pasan una prueba.
  // La función que se pasa a filter() recibe cada elemento del array original (numero).
  var numerosPares = array.filter(function(numero){
    // Si el elemento cumple con la condicion especificada (numero % 2 === 0) se incluye en el nuevo array.
    return numero % 2 === 0;
  });
  // retornamos el nuevo array "numerosPares" con todos los numeros pares del array original.
  return numerosPares;
  // De lo contrario se excluye.
}

module.exports = filtrarNumerosPares;
