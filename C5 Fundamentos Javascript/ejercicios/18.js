function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  // Definimos un "array"(vocales) en donde contiene todas las vocales en minuscula y mayuscula.
  const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  // Verificamos que sea de tipo "string" y que su longitud sea igual a 1.
  if (typeof letra === 'string' && letra.length === 1){
    // Usamos el método "includes" del "array" para verificar si la cadena es una de las vocales definidas.
    if (vocales.includes(letra)){
      // Si es una vocal previamente definida, retornarà "Es vocal"
      return "Es vocal";
      // De otro modo si no es una vocal, retornara "Dato incorrecto".
    } else{
      return "Dato incorrecto";
    }
  }
  // de otro modo si el valor ingresado tiene mas de un caracter o no es un string, retornarà "Dato incorrecto".
  else{
    return "Dato incorrecto";
  }
}


module.exports = esVocal;
