// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, 
  //donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz =[];
for(var propiedad in objeto){
  matriz.push( [propiedad, objeto[propiedad]]);
}
return matriz;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el
  // número de veces que aparece en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || 
  //Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var aux = {};
 for ( i = 0; i < string.length; i ++){
  if(aux.hasOwnProperty(string[i])){
    aux[string[i]]++;
  } else {
    aux[string[i]] = 1;
  }
 }
return aux;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var aux = "";
  var aux1 = "";
  for(i = 0; i < s.length; i++ ){
    if( s[i] === s[i].toUpperCase()){
      aux = aux + s[i];
    } 
    else {
      aux1 = aux1 + s[i];
    }
  }
  return aux + aux1;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal 
  // que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabrasSeparadas = str.split(" ");
  var fraseInvertida = [];
  for (i = 0; i < palabrasSeparadas.length; i++){
    var palabraInvertida = "";
    palabraInvertida = palabrasSeparadas[i].split("");
    palabraInvertida = palabraInvertida.reverse();
    palabraInvertida = palabraInvertida.join("");
    fraseInvertida.push(palabraInvertida);
  }
 return fraseInvertida.join(" ");
  
  
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
/*
  var numeroString = numero.toString();
  var numeroI = numeroString.split().reverse().join("");
  if (numeroString === numeroI){
    return "Es capicua";
  } else {
    return "No es capicua";
  }*/
  let str = numero.toString()
  let arr = str.split("")
  let reverseNumber = arr.reverse() 
  reverseNumber = reverseNumber.join("")

  if (numero == reverseNumber) return "Es capicua"

  return "No es capicua"

}
  
  /*var array = [];
  array.push(numero);// 0 : 4, 1: 9, 2: 4
  var array2 = array.split("").reverse().join()
  if(array2 === array){
    return "Es capicua";
  } 
  return "No es capicua";
  */
  



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
  
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente 
  //de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] ||
  // Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  //                  0      1      2            3
  // Devuelve ---> [“You", "are", "looking", "beautiful"]
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, 
  //escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. 
  // (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

