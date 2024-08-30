const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  // Declaramos variable a 0. Esta variable nos almacenarà la cantidad de propiedades que hay en el object "objeto".
  var contador = 0;
  // Con el bucle "for-in" iteramos por cada elemento del object original.
  for (let prop in objeto){
    // En cada iteracion la variable "contador" suma +1, es decir, que por cada propiedad encontrada, sumara 1.
    contador++;
  }
  // Retornamos el valor de "contador".
  return contador;
};

module.exports = contarPropiedades;
