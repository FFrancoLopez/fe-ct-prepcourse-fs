function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  // Declaramos una array vacio("numAumentado") en donde guardaremos los resultados.
  var numAumentado = [];
  // Declaramos una variable que llevara el valor del argumento num.
  var suma = num;
  // Con el bucle for iteramos un limite de diez.
  for (let i = 0; i < 10; i++){
    // Si el valor de la iteracion es igual a 5, esta no se ejecutara y saltara a la proxima iteracion(statement continue).
    if (i == 5){
      continue;
    }
    // El valor de la variable "suma" se le suma +2 en cada iteracion.
    // En cada iteracion se incluira el resultado ("suma" ya actualizado) en nuestro array "numAumentado".
    suma = suma + 2;
    numAumentado.push(suma);
  }
  // Retornamos el array con todos los resultados(menos el de la iteracion 5) de la suma del argumento "num" + 2.
  return numAumentado;
}

module.exports = continueStatement;
