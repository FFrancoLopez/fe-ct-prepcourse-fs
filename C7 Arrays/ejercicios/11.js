function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  // Declaramos nueva variable ("arrayDuplicados") vacia.
  var arrayDuplicados = [];
  // Con el bucle for recorremos todos los numeros del array y a cada uno lo multiplicamos x2.
  for (let i = 0; i < array.length; i++) {
    // Con el metodo push() agregamos cada numero del array original(multiplicado x2), a la variable vacia.
    arrayDuplicados.push(array[i] * 2);
  }
  // Retorna el nuevo array que contiene cada elemento duplicado(multiplicado x2) del array original.
  return arrayDuplicados;
}

module.exports = duplicarElementos;
