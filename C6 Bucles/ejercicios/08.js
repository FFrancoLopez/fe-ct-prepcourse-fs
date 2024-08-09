function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   // Verificamos que "a" sea positivo y menor a 10, return true, de lo contrario, return false.
   if (a >= 0 && a <= 9.99){
      return true;
   }else{
      return false;
   }
}

module.exports = esPositivoOInferiorA10;
