function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  // Comprobamos si el argumento de la finction "arr" es un array y si tiene al menos un elemento.
    if (Array.isArray(arr) && arr.length > 0){
      // Si cumple con la condicion anteriormente especificada, retornarà "true".
    return true;
  }
  // De lo contrario retorna "false".
  return false;
}
module.exports = esArrayNoVacio;