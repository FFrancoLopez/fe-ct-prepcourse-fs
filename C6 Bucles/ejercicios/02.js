function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  // Verificamos si ambos argumentos son "true".
  if (booleano1 === true && booleano2 === true){
    return true;
  }
  // De lo contrario retornarà "false".
  else{
    return false;
  }
}

module.exports = esVerdaderoYFalso;
