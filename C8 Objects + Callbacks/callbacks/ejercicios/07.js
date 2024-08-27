function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   // Con el metodo "filter" iteramos por cada elemento del array original.
   var elementosConA = arrayOfStrings.filter((elemento) => {
      // Si el primer caracter del elemento es la letra "a", lo guarda en el array "elementosConA".
      return elemento[0] === "a";
   });
   // Retornamos el array con solo los elementos que empiezan con la letra "a".
   return elementosConA;
}

module.exports = filter;
