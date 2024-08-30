function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
  // Agregamos la propiedad funcional "calcularPrecioDescuento" que va a calcular el precio despues del descuento.
  objetoProducto.calcularPrecioDescuento = function(){
    // Calculamos el monto del descuento multiplicando el precio del producto por el porcentaje de descuento.
    // Usamos "this" para referirnos al "objetoProducto" dentro de la función.
    let descuento = this.precio * this.porcentajeDeDescuento;
    // Restamos el valor del "descuento" al precio original del producto para obtener el precio final.
    let precioFinal = this.precio - descuento;
    // Luego la función retorna el precio final después de aplicar el descuento.
    return precioFinal;
  }
  // Retornamos el objeto modificado.
  return objetoProducto;
}

module.exports = agregarMetodoCalculoDescuento;