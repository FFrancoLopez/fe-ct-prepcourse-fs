function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  // Creamos un nuevo array con los "strings" que nesecitamos buscar.
  var mesesBuscados = ["Enero", "Marzo", "Noviembre"];
  // Luego creamos un nuevo array "mesesEncontrados" vacio en donde guardaremos los meses buscados.
  var mesesEncontrados = [];
  // Iteramos por cada elemento del array original en busca de los meses deseados.
  for (let i = 0; i < array.length; i++){  
    // En cada iteracion preguntamos si el elemento contiene el string buscado, de ser asi lo agregara al array vacio "mesesEncontrados".
    if (mesesBuscados.includes(array[i])){
      mesesEncontrados.push(array[i]);
    }
  }
  // Ahora preguntamos, si las longitudes del array "mesesBuscados" es igual
  // al nuevo array("mesesEncontrados") en donde guardamos los meses especificados. Retornara el nuevo array.
  if (mesesBuscados.length === mesesEncontrados.length){
    return mesesEncontrados;
    // De otro modo, retorna el string "No se encontraron los meses pedidos".
  }else{
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
