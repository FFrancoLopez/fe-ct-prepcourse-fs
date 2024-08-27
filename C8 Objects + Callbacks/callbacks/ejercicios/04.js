function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   // Con el metodo "reduce" calculamos la suma de todos los elementos en "arrayOfNumbers".
   // "reduce" (función de callback) recibe dos parámetros: "acumulador" (el acumulado de la suma) y numActual (el número actual en la iteración).
   // La función de callback suma "acumulador" y "numActual" y devuelve el resultado (nuevo valor de "acumulador" en la siguiente iteración).
   // El segundo argumento de "reduce" (0 en este caso) es el valor inicial del acumulador.
   var resultado = arrayOfNumbers.reduce((acumulador, numActual) => acumulador + numActual, 0);
   // Una vez que se calcula la suma total de los números, el callback "cb" se invoca con el "resultado" como su argumento.
   cb(resultado);

}
module.exports = sumarArray;
   // -------OTRA FORMA: ----------
   // // Iniciamos variable "resultado" a 0.
   // var resultado = 0;
   // // El bucle for itera por cada elemento del array, almacenando el resultado(la suma de los elementos) en "resultado".
   // for (let i = 0; i < arrayOfNumbers.length; i++){
   //    resultado += arrayOfNumbers[i];
   // }
   // // A la funcion callback "cb" le pasamos como argumento el resultado de la suma de todos los elementos del array.
   // cb(resultado);   
