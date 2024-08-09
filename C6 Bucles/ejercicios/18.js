function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  //Se determina cuál de los dos números es el menor (min) y cuál es el mayor (max) usando Math.min y Math.max.
  let min = Math.min(a, b);
  let max = Math.max(a, b);
   // Si el rango incluye el cero, el producto será cero.
  if (min <=0 && max >=0){
    return 0;
  }
  // Inicializamos el producto a 1
  let producto = 1
  // Se itera a través del rango desde min hasta max (inclusive) y se multiplican los números en cada iteración, actualizando producto.
  for (let i = min; i <= max; i++ ){
    producto *= i;
  }
  // Se retorna el valor final de producto.
  return producto;
}


module.exports = productoEntreNúmeros;