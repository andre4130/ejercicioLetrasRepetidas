// ejercicio Letras Repetidas

//Fase 1
var nombre = "André de Mendonça Maia";
console.log(nombre);
for (var i = 0; i < nombre.length; i++) {
  console.log(nombre[i]);
}

//Fase 2

var nombre = "André de Mendonça Maia";
var listaVocales = 'aeiouAEIOU';
var listaNumeros = '0123456789'
console.log("Partimos del nombre: " + nombre);
for (var i = 0; i < nombre.length; i++) {
  if (listaVocales.indexOf(nombre[i])!== -1) {
    console.log("He encontrado la vocal "+ nombre[i])
    ;
  }
  else if (listaNumeros.indexOf(nombre[i])!== -1){
    console.log(nombre[i]+" no es una letra del nombre")
  }
  else if (nombre[i] == " ") {
    console.log("Aquí hay un espacio")
  }
  else {
    console.log("He encontrado la consonante "+ nombre[i]);
  }
}

//Fase 3

let nombre = "André de Mendonça Maia"
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


// Fase 4

let nombre1 = "André";
let apellido = "Maia";
nombre1 = nombre1.split('');
apellido = apellido.split('');
espacio = " ";

fullName = nombre1.concat(espacio, apellido);

console.log(fullName);
