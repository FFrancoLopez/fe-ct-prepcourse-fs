function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  // Usamos el el objeto "arguments" que es similar a un array y que contiene todos los argumentos pasados de la function.
  // Verificamos si la function tiene argumentos, si no tiene retornara 0.
  if (arguments.length === 0) return 0;
  // Declaramos variable que guarda el primer argumento de la funcion.
  var producto = arguments[0];
  // Iteramos desde el indice 1 por cada argumento de la function original.
  for (let i = 1; i < arguments.length; i++){
    // Lamamos a la variable con el primer argumento guardado y lo multiplicamos. Actualizando su valor en cada iteracion.
    producto = producto * arguments[i];
  }
  // Retornamos el producto final(todos los argumentos multiplicados).
  return producto;
}

module.exports = multiplicarArgumentos;
