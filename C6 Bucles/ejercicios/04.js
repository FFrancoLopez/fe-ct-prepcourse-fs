function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  // Verificamos que la edad de la persona sea 18 años o mayor y retornamos "Allowed".
  if (edad >= 18){
    return "Allowed"
    // De lo contrario retorna "Not allowed".
  }else {
    return "Not allowed"
  }
}

module.exports = mayoriaDeEdad;
