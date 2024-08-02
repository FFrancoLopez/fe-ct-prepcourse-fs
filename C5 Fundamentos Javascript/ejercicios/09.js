function esNuloOIndefinido(valor) {
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:

  // "valor === null" verifica si el valor es "null" (true), y "valor === undefined" verifica si es "undefined" (true).
  // De lo contrario retornarà "false".
  return valor === null || valor === undefined ;
}

module.exports = esNuloOIndefinido;