function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   // Convertimos ambas("str1" y "str2") cadenas a minusculas.
   var strAMinuscula = (str) => str.toLowerCase();
   // Guardamos cada cadena en una variable diferente para poder compararlas.
   var str1Minuscula = strAMinuscula(str1);
   var str2Minuscula = strAMinuscula(str2);
   // Verificamos si las longitudes de las cadenas son iguales, de serlo retornara "true", de lo contrario "false".
   if (str1Minuscula.length !== str2Minuscula.length){
      return false;
   }
   // Reordenamos cada cadena y la guardamos en difenrentes variables para poder comparar si contienen los mismos caracteres.
   // Convertimos cada cadena en un arreglo de letras con split(''), luego las ordenamos con sort() y finalmente las unimos de nuevo en una cadena con join('').
   var ordenarStr1 = str1Minuscula.split('').sort().join('');
   var ordenarStr2 = str2Minuscula.split('').sort().join('');
   // Comparamos las cadenas ordenadas.
   // Si son iguales, las palabras son anagramas, por lo que la función devuelve true; de lo contrario, devuelve false.
   return ordenarStr1 === ordenarStr2;
}

module.exports = esAnagrama;