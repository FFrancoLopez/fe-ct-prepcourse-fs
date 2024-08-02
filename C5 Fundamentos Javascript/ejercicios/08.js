// La función recibe un argumento llamado numero.
// Verifica si este es un número entero o no.
// Retorna true si lo es, de lo contrario, retorna false.
// Por ejemplo: 
// 24 ---> true 
// -1212 ---> true 
// 121.212 ---> false 
// Tu código:
function esNumeroEntero(numero) {

 // Verificamos si el valor es un número y si es un número entero >>true<<. De lo contrario sera >>false<<.
  return typeof numero === 'number' && numero === Math.floor(numero);
}

module.exports = esNumeroEntero;