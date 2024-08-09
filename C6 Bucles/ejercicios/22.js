function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  // Iniciamos una variable "contador" a 0, la cual aumentara en cada iteracion de bucle. 
  let contador = 0;
  // Le sumamos 5 a "num" en cada iteracion.
  do {
    num += 5;
    contador++;
    // El bucle "while" continúa sumando hasta que contador alcance 8,
    // es decir, se suma 5 al valor original de "num" un total de 8 veces.
  }while (contador < 8);
  // Una vez que el contador llega a 8, se detiene el bucle y retona el resultado.
  return num;
}

module.exports = doWhile;