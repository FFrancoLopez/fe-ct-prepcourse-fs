const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:
  // Añadimos al "objeto" original la propiedad "propiedad", la cual le asignamos un "valor".
  objeto[propiedad] = valor;
  // Retornamos el objeto modificado.
  return objeto;
};

module.exports = agregarNuevaPropiedad;
