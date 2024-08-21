function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  // Definimos una variable "nuevoString" y convertimos el array original en una cadena de texto
  // y la guardamos en la nueva variable. Para el espacio entre cada una: comilla + espacio + comilla: (' ').
  var nuevoString = palabras.join(' ');
  // Retornamos la variable con el nuevo string.
  return nuevoString;
}

module.exports = dePalabrasAFrase;