function cambiarCadena(string, callback) {
   // Aplica la función de callback al string y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:
   // Verificamos si el argumento "callback" es una funcion.
   if (typeof callback == 'function'){
      // Si "callback" es una función, se llama con string como argumento y se devuelve el resultado.
      return callback(string);
   }else{
      // De otro modo, si "callback" no es una funcion o no esta definido, retornarà el string original.
      return string;
   }
}

module.exports = cambiarCadena;
