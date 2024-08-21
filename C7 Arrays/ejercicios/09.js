function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   // Creamos variable "indiceAleatorio" para recibir el elemento aleatorio del array.
   // Primero: Math.random() nos genera un num decimal entre 0 y 1.
   // Segundo: A ese num lo multiplicamos por la longitud del array, obtenemos un rango entre 0 y la longitud del array.
   // Math.floor(): Redondeamos hacia abajo el resultante para obtener un indice entero valido.
   var indiceAleatorio = Math.floor(Math.random() * array.length);
   // Retornamos el elemento del array que se encuentra en el indice aleatorio generado.
   return array[indiceAleatorio];
}

module.exports = obtenerElementoAleatorio;
