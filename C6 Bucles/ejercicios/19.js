function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  // Iniciamos una variable "suma" a 0, la cual guarda la suma de los numeros.
  let suma = 0;
  // El bucle for recorre desde 1 hasta "n". En cada iteraciòn, el valor actual de "i" se suma a la variable "suma".
  for (let i = 1; i <= n; i++){
    suma += i; 
  }
  // Al finalizar la condiciòn, retornamos la suma de todos los numeros desde 1 hasta "n".
  return suma;
}
module.exports = sumarHastaN;
