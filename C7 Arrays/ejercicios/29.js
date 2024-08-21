function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  // Verificamos que el argumento array no este vacio. Si lo esta, retornarà "null". 
  if (numeros.length === 0){
    return null;
  }
  // Recorremos el array desde el primer elemento hasta el penultimo.
  for (let i = 0; i < numeros.length - 1; i++){
    // Comparamos cada elemento con el siguiente en la secuencia.
    if (numeros[i + 1] !== numeros[i] + 1){
      // Si encuentra un salto, es decir, donde el numero siguiente no es consecutivo, retorna el numero faltante(numero[i]+1). 
      return numeros[i] + 1;
    }
  }
  // Si el bucle termina sin encontrar ningun salto, significa que no falta ningun numero y retorna "null".
  return null;
}
module.exports = encontrarNumeroFaltante;
