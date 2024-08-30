function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  // Iteramos por cada objeto(usuario) del array original y le asignamos un nuevo valor a la propiedad "esPremium" de cada objeto.
  for (let i = 0; i < objetoMuchosUsuarios.length; i++){
    objetoMuchosUsuarios[i]["esPremium"] = true;
  }
  // Retornamos el nuevo array modificado.
  return objetoMuchosUsuarios;
}

module.exports = pasarUsuarioAPremium;