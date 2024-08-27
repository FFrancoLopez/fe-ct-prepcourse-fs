function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  // El metodo "map" recorre el array original, iterando en cada elemento, y aplica el callback("cb") a cada elemento, 
  // y devuelve un nuevo array("resultado") con los resultados de estas aplicaciones.
  var resultado = array.map((num) => {
   return cb(num)
  });
  return resultado;
  
}

module.exports = map;
