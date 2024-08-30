function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  // Con el metodo for-in iteramos por la propiedad y la multiplicamos por cinco y retornamos el resultado.
  for (let prop in objetoMisterioso){
    return objetoMisterioso[prop] * 5;
  }
}

module.exports = multiplicarNumeroDesconocidoPorCinco;