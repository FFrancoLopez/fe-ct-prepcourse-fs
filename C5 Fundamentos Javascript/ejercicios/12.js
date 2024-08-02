function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
  // Comprobamos si ambos valores son cadenas de texto.
  if (typeof str1 === 'string' && typeof str2 === 'string'){
  // Comparamos las longitudes de las cadenas.
  return str1.length === str2.length; 
} 
// Si alguno de los valores no es una cadena, retornamos false.
  return false;
}

module.exports = tienenMismaLongitud;