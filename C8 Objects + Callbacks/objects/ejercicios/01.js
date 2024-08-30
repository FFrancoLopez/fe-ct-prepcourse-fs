const obtenerValorPropiedad = (objeto, propiedad) => {
   // Recibe un objeto y el nombre de una propiedad.
   // Devuelve el valor de esta propiedad.
   // Tu código:
   // Iniciamos constante "a" que es igual al valor de la "propiedad" del "objeto".
   const a = objeto[propiedad];
   // Retornamos "a", la cual tiene el mismo valor de "propiedad".
   return a;
};

module.exports = obtenerValorPropiedad;