function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  // Declaramos variable para guardar el primer elemento del array original.
  var elementosIguales = array[0];
  // Con el bucle for iteramos cada elemento y lo comparamos con la variable("elementosIguales") que guarda el primer elemento.
  for (let i = 1; i < array.length; i++){
    if (array[i] === elementosIguales){
      // Si todos los elementos son iguales, retorna true.
      return true;
    }
  }
  // De lo contrario, retorna false.
  return false;
}

module.exports = todosIguales;
