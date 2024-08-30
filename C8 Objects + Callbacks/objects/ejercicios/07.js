function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:
   // Con el metodo "sort" usamos una funcion de comparacion personalizada.
   // Comparamos b[sortBy] con a[sortBy].
   // Al restar a[sortBy] de b[sortBy], el método ordena los objetos en orden descendente basándose en el valor de la propiedad especificada por sortBy.
   return list.sort((a, b) => b[sortBy] - a[sortBy]);
}
module.exports = sort;