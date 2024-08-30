function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  // Creamos un object con las propiedades ates nombradas y sus respectivos valores.
  var usuario = {
    nombre: nombre,
    email: email,
    password: password
  };
  // Retornamos el object creado.
  return usuario;
}

module.exports = nuevoUsuario;
