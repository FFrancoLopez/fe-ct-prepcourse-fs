function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  // Utilizamos la expresion "Switch" para evalùar la condiciòn y comparar su valor con cada instancia "case".
  // Si "numero" coincide con algun "case", este returnarà el dia asignado para ese numero.
  switch (numero){
    case 1:
      return "Lunes";
      break; //Finaliza el bucle si se cumple una condiciòn especìfica.
    case 2:
      return "Martes";
      break; //Finaliza el bucle si se cumple una condiciòn especìfica.
    case 3:
      return "Miercoles";
      break; //Finaliza el bucle si se cumple una condiciòn especìfica.
    case 4:
      return "Jueves";
      break; //Finaliza el bucle si se cumple una condiciòn especìfica.
    case 5:
      return "Viernes";
      break; //Finaliza el bucle si se cumple una condiciòn especìfica.
    case 6:
        return "Sabado";
         break; //Finaliza el bucle si se cumple una condiciòn especìfica.
    case 7:
      return "Domingo";
       break; //Finaliza el bucle si se cumple una condiciòn especìfica.
     //Si no se cumple ninguna condiciòn retorna "No es un dia de la semana".
    default:
      return "No es un dia de la semana";   
  }
}

module.exports = obtenerDiaSemana;