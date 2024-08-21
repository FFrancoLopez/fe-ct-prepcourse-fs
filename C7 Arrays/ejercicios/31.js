function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  // Retornamos el string "texto" invertido: primero convertimos el string en un array separando
  // el string en cada caracter, segundo invertimos cada elemento del array y por ultimo, convertimos el array, juntando
  // todos sus caracteres separados, en un nuevo string(invertido).
  return texto.split('').reverse().join('');
}  
module.exports = invertirTexto;

// OTRA FORMA QUE OCUPA MAS LINEAS DE CODIGO:

// var  newArray = texto.split('');// Convertimos nuestro string en un array y lo almacenamos en "newArray".
// var stringInvertido = ('');// Creamos una variable de string vacio que mas adelante almacenara el string invertido.
// newArray.reverse(); // invertimos el nuevo array.
// stringInvertido = newArray.join(''); // convertimos el array(uniendo cada caracter) en un string invertido y lo almacenamos.
// return stringInvertido;// Retornamos "stringInvertido".
