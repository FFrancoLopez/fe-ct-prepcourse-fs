function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  // Inizializamos "resultado". En el vamos a almacenar el resultado de las sumas de los caracteres.
  var resultado = "";
  // Buscamos la longitud maxima de cada string y tomamos la mayor para declarar la variable "maxLength".
  var maxLength = Math.max(str1.length, str2.length, str3.length);
  // El bucle itera por cada caracter de los string. Si cumple con la condicion, Almacena el caracter en "resultado".
  for (let i = 0; i < maxLength; i++){
    // Si el numero de la iteracion es menor a la longitud del string, almacena el elemento.
    if (i < str1.length) resultado += str1[i];
    if (i < str2.length) resultado += str2[i];
    if (i < str3.length) resultado += str3[i];
  }
  return resultado;
  // retornamos el string con cada caracter alternado.
   
}
module.exports = combine;
