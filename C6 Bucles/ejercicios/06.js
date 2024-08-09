function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  // Verificamos si el número está en el rango de 100 a 999 o de -100 a -999.
  if (num >=100 && num <=999 || num <= -100 && num >= -999){
   return true;
  }else {
    return false;
  }

} 


module.exports = tieneTresDigitos;
