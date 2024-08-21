function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  // Declaramos una vaiable "stringPalindromo", la cual almacenara el resultado de:
  // (split('')) convertir el argumento string en un array separando cada caracter como elemento.
  // (reverse()) Luego invertimos el nuevo array de caracteres.
  // (join('')) y por ultimo lo juntamos todos los caracteres y lo convertimos en un string.
  var stringPalindromo = string.split('').reverse().join('');
  // Si el string almacenado en "stringPalindromo" es igual al string original. Retorna "true".
  if (stringPalindromo == string){
    return true;
  }
  // De lo contrario, retorna false.
  return false;
}
module.exports = esPalindromo;