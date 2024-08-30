function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
  // Creamos un objeto con las propiedades y le asignamos los valores correspondiente recibidos por parametro.
  var nuevoObj = {
    nombre: nombre,
    edad: edad,
    // A la propiedad "meow" le asignamos una funcion que retorna un string especifico.
    meow: function(){
      return "Meow!";
    }
  }
  // Retornamos el nuevo objeto con todos sus propiedades.
  return nuevoObj;
}
module.exports = crearGato;