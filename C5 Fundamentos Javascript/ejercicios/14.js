function mayorQueCincuenta(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 51 ---> true
  // 15 ---> false
  // Tu código:

  // Usamos el "typeof" para ver su "num" es un numero.
  if (typeof num === 'number' && !Number.isNaN(num)){
    //le pedimos que si "num" es mayor a 50.001, nos retorne "true". De lo contrario, retorna "false".
    return num >= 50.001;
  }
  //Retorna "false" si no es un numero.
  return false;
}

module.exports = mayorQueCincuenta;
