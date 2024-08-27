function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  // Con el metodo "forEach" iteramos por cada elemento del array original.
  array.forEach((num) => {
    //  En cada iteracion llamamos a la funcion callback "cb" y de pasamos el numero como argumento.
    return cb(num)
  });
}

module.exports = forEach;