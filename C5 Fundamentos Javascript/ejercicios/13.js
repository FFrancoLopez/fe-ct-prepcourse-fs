function menosQueNoventa(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 50 ---> true
  // 91 ---> false
  // Tu código:
  // Verificamos si "num" es un "number". Además, usamos "!Number.isNaN"
  // para asegurarnos de que el valor no sea "NaN" (que también tiene el tipo "number" pero no es un número válido).
  if (typeof num === 'number' && !Number.isNaN(num)){

    //Si "num" es Menor o Igual a "89.999". Retornarà "true", de lo contrario, retorna "false".
    return num <= 89.999;
  }
  }

module.exports = menosQueNoventa;