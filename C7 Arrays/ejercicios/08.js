function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   // Si el array contiene "num", retornar el indice de "num".
   if (array.includes(num)){
      return array.indexOf(num); 
    // De otro modo, retornar -1.
   }else {
      return -1;
   }
}

module.exports = encontrarElemento;