function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  // Si "num" esta entre 20 y 50 es true, sino es false.
  if (num >=20.01 && num <=49.99){
    return true;
  }else{
    return false;
  }
}

module.exports = estaEnRango;
