function actualizarValorPropiedad(objeto, propiedad, valor) {
   // Actualiza el valor de la propiedad del objeto recibidos en la función.
   // Retorna el objeto actualizado.
   // Tu código:
   // Accedemos a la "propiedad" del "objeto" y actualizamos su "valor".
   objeto[propiedad] = valor;
   // Retornamos el objeto ya actualizado.
   return objeto;
}

module.exports = actualizarValorPropiedad;
