function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  // Declaramos un array "resultados" vacio para guardar posteriormente los resultados de la tabla de multiplicacion de 6.
  var resultados = [];
  // Declaramos nueva variable a 6, cual sera nuestro multipllicador.
  var multiplicador = 6;
  // El bucle for nos permite iterar desde 0 a 10.
  for ( let i = 0; i <= 10; i++){
    // En cada iteracion agregamos a nuestro array vacio los resultados del multiplicador por el numero de cada iteracion.
      resultados.push(multiplicador * i);
  }
  // Retornamos array "resultados" con los elementos ya guardados.
  return resultados;
}

module.exports = tablaDelSeis;
