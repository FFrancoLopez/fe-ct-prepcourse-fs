function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   // Iniziamos una variable "suma" a 0.
   let suma = 0;
   // Con el bucle for, iteramos desde 1 a n y acumulamos la suma.
   for (let i = 1; i <= n; i++){
      suma += i;
      // Si la suma supera los 100 se detiene el bucle.
      if (suma > 100){
         break;
      }
   }
   // retornamos la suma.
   return suma;
}

module.exports = sumarHastaNConBreak;