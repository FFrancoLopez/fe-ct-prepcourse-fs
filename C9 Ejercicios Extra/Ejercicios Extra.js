/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  // Creamos variable "arrDeArrays" que almacenara el arreglo de arreglos.
  var arrDeArrays = 0;
  // Con el metodo "Object.entries()" convertimos cada clave: valor del objeto, en un arreglo, dentro de un arreglo, lo asignamos y retornamos. 
  return arrDeArrays = Object.entries(objeto);
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  // (".split('')"): Convertimos nuestra string en un array, tomando como elemento cada uno de sus caracteres.
  // ("sort()"): Luego lo ordenamos para que al momento de almacerlos en el objeto, esten ordenados.
  var arrStr = string.split('').sort();
  // Creamos objeto vacio donde almacenaremos nuestros key: value. 
  var objDeCaracteres = {};
  // Iteramos por cada elemento del nuevo array "arrStr".
  for(let i = 0; i < arrStr.length; i++){
    // Añadimos el elemento al objeto, y verificamos si el elemento ya se encuentra en el objeto "objDeCaracteres".
    if(objDeCaracteres[arrStr[i]]){
      // Si el elemento ya existe como una "clave" en "objDeCaracteres", se incrementa su "valor" en 1.
      objDeCaracteres[arrStr[i]]++;
      // Si el elemento no existe en "objDeCaracteres", se agrega con un "valor" inicial de 1.
    }else{
      objDeCaracteres[arrStr[i]] = 1;
    }
  }
  // Retornamos el objeto con sus clave: valor.
  return objDeCaracteres;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  // Iniciamos variables para almacenar las mayusculas y minusculas por separado.
  var mayusculas = "";
  var minusculas = "";
  // Con el bucle "for-of" recorremos por cada caracter del string original.
  for (let letra of string){
    // Si la letra por la que se itera es una letra mayuscula, la agrega a la variable "mayusculas".
    if (letra === letra.toUpperCase()){
    mayusculas += letra;
    // De lo contrario, si es minuscula se almacenarà en la variable "minusculas".
    }else{
      minusculas += letra;
    }
  }
  // Reasignamos los string concatenados (mayusculas y minusculas) modificando el string original.
  string = mayusculas + minusculas;
  // Retornamos el string modificado.
  return string;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  // Convertimos nuestra frase en un array en donde cada elemento es una palabra(.split(' ')).
  var arrFrase = frase.split(' ');
  // con el metodo "map()" recorremos cada elemento string, lo transformamos a array de caracteres, lo invertimos y luego volvemos a convertir en string.
  var arrInverso = arrFrase.map((elemento) => {
    return elemento.split('').reverse().join('');
  })
  // Convertimos el nuevo array("arrInverso") en un string y lo asignamos a la variable "fraseInversa".
  var fraseInversa = arrInverso.join(' ');
  // Retornamos "fraseInversa".
  return fraseInversa;
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  // Convertimos el numero en un string, luego en un array de caracteres, lo invertimos y lo volvemos a transformar en un string.
  var numAStr = numero.toString().split('').reverse().join('');
  // Con Number() convertimos la variable "numAStr"(donde guardamos nuestro numero inverso y convertido a string) a numero.
  var strANum = Number(numAStr);
  // Comparamos si los numeros son iguales.
  if (numero === strANum){
    // Si lo son, retorna el string "Es capicua"
    return "Es capicua";
    // De lo cntrario retornarà el string "No es capicua".
  }else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  // Con el metodo "replace()" reemplazamos las letras a, b y c con una cadena vacia("") y retornamos el string modificado. 
  return string.replace(/[abc]/g, "");
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  // Creamos un nuevo array "arrOrdenado" que almacenarà los string ordenados ascendetemente(a, b), dependiendo de sus longitudes.
  // Con el metodo sort() comparamos cada elemento(a.length - b.length) y dependiendo de su longitud lo ordena.
  var arrOrdenado = arrayOfStrings.sort((a, b) => a.length - b.length);
  // Luego retornamos el nuevo array con los elementos ordenados de forma ascendente.
  return arrOrdenado;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  // En la nueva variable "elementosEnComun" almacenaremos los elementos en comun que tienen los arrays pasados por paramentro.
  // Con el metodo "filter()" iteramos por cada elemento del "array1". Y comparamos los elementos de ambos arrays. 
  var elementosEnComun = array1.filter((elemento) => {
    // Con el metodo "includes()" preguntamos si el "array2" contiene el mismo elemento del "array1". 
    if (array2.includes(elemento)){
      // Si la condicion se cumple, lo retorna al nuevo array "elementosEnComun".
      return elemento;
    }
  });
  // Retornamos el nuevo array con los elementos en comun de los arrays originales.
  return elementosEnComun;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
