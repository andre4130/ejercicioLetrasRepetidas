// ejercicio Letras Repetidas

// Fase 1
// var nombre = "André de Mendonça Maia";
// console.log(nombre);
// for (var i = 0; i < nombre.length; i++) {
//   console.log(nombre[i]);
// }
//
// //Fase 2
// var nombre = "André de Mendonça Maia";
// var listaVocales = 'aeiouAEIOU';
// var listaNumeros = '0123456789'
// console.log("Partimos del nombre: " + nombre);
// for (var i = 0; i < nombre.length; i++) {
//   if (listaVocales.indexOf(nombre[i])!== -1) {
//     console.log("He encontrado la vocal "+ nombre[i])
//     ;
//   }
//   else if (listaNumeros.indexOf(nombre[i])!== -1){
//     console.log(nombre[i]+" no es una letra del nombre")
//   }
//   else if (nombre[i] == " ") {
//     console.log("Aquí hay un espacio")
//   }
//   else {
//     console.log("He encontrado la consonante "+ nombre[i]);
//   }
// }

//Fase 3

let nombre = "Anddrened"
nombre = nombre.split('');
let nombreMap = new Map();

for (var i = 0; i < nombre.length; i++) {
  if(nombreMap.has(nombre[i])) {
    nombreMap.set(nombre[i], nombreMap.get(nombre[i])+1);
  }
  else {
    nombreMap.set(nombre[i], 1);
  }
}

console.log(nombreMap);


//

// var repetidas = [];
// var contadorLetras =0;
// var count = -1;
// for (var i = 0; i < tempArray.length; i++) {
//   for (var j = -1; j < repetidas.length; j++){
//     if (tempArray[i] !== repetidas[j]){
//       count ++;
//       repetidas.push(tempArray[i]);
//         console.log(repetidas);
//         console.log(count);
//     }
//   }
// }


// codigo antiguo

// for (var i = 0; i < nombre.length; i++) {
//   if (nombre[i] !== array[contador]) {
//     console.log("Nueva letra: "+ nombre[i]);
//     const array = nombre.map(i => nombre[i]);
//     contador +=1;
//     console.log(contador);
//     console.log(array);
//     }
//   else {
//     console.log("la letra "+ nombre[i]+" ya está almacenada.");
//   }
// }
// console.log(map);
