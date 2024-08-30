function verificarPropiedad(objeto, propiedad) {
   // Verifica si el objeto posee la propiedad recibida.
   // Retorna true si la tiene, sino retorna false.
   // PISTA: puedes usar el método hasOwnProperty().
   // Tu código:
   // Con el metod "hasOwnProperty" verificamos si el object "objeto" contiene la propiedad y guardamos su resultado en la variable "tienePropiedad".
   var tienePropiedad = objeto.hasOwnProperty(propiedad);
   // Retornamos su resultado(Si està serà true, de lo contrario serà false).
   return tienePropiedad;
}

module.exports = verificarPropiedad;
