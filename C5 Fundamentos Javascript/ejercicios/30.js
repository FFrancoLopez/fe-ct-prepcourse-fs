function deEuroAdolar(euro) {
  // La función recibe un argumento llamado euro el cual es un numero.
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Suponiendo que 1 euro equivale a 1.20 dólares.
  // Retornar el valor en dolares.
  // Por ejemplo: 
  // 1 ---> 1.20
  // 0 ---> 0
  // Tu código:
  // Definimos la tasa de cambio dentro de la funcion como una constante ("tasaDeCambio").
  // Luego hacemmos el cambio (multiplicamos).
  const tasaDeCambio = 1.2;
  return euro * tasaDeCambio;
}

module.exports = deEuroAdolar;
