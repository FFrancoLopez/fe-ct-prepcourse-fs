function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  // Inicializamos "sumaLikes" para almacenar el resultado final.
  var sumaLikes = 0; 
  // Iteramos por cada objeto dentro del array "posts" de "objetoUsuario".
  for (let i = 0; i < objetoUsuario.posts.length; i++){
    // En cada iteración, accedemos a la propiedad "likes" del post actual y la sumamos a "sumaLikes".
    sumaLikes += objetoUsuario.posts[i].likes;
  }
  // Retornamos el resultado final de la suma de todos los valores del array "likes".
  return sumaLikes;
  
}

module.exports = sumarLikesDeUsuario;