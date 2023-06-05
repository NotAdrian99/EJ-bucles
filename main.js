// Ej 1
//  function multiplacion(num) {
//    for (let i = 0; i < 10; i++) {
//      const mult = i * num;
//      console.table(${i} x ${num} = ${mult});
//    }
//  }

// multiplacion(10);

// Ej 2

// let acumulacion = 0;
// let num = parseInt(prompt("Ingrese un numero"));

// while (num !== 0) {
//   acumulacion += num;
//   num = parseInt(prompt("Ingrese un numero"));
// }
// console.log("Total: " + acumulacion);

// Ej 3

// let numSecreto = Math.floor(Math.random() * 100);
// let intentos = 0;

// console.log(numSecreto);
// while (true) {
//   let numIngresado = parseInt(prompt("Ingresar numero"));
//   intentos++;

//   if (numIngresado > numSecreto) {
//     console.log("El numero secreto es menor al ingresado");
//   } else if (numIngresado < numSecreto) {
//     console.log("El numero secreto es mayor al ingresado");
//   } else {
//     console.log("Felicitaciones, adivinaste el numero secreto en: " + intentos + " intentos");
//     break;
//   }
// }

// Ej 4

// let num = parseInt(prompt("Ingresar numero:"));
// let divisores = [];

// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     divisores.push(i);
//   }
// }

// console.log("Los divisores de " + num + " son: " + divisores);

// Ej 5

// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < array.length; i++) {
//   console.log("Elemento " + (i + 1) + ": " + array[i]);
// }

// Ej 6

// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < array.length; i++) {
//   let doble = array[i] * 2;
//   console.log("El doble de " + array[i] + " es " + doble);
// }

// Ej 7

// let familia = [
//   { nombre: "Juan", edad: 20, altura: 1.8, animalFav: "gato" },
//   { nombre: "Francisco", edad: 25, altura: 1.7, animalFav: "perro" },
//   { nombre: "Estela", edad: 50, altura: 1.6, animalFav: "gato" },
//   { nombre: "Manuel", edad: 49, altura: 1.8, animalFav: "perro" },
//   { nombre: "Adela", edad: 72, altura: 1.5, animalFav: "loro" },
// ];
// for (let i = 0; i < familia.length; i++) {
//   let persona = familia[i];
//   console.log("Me llamo " + persona.nombre + ", tengo " + persona.edad + " años, mido " + persona.altura + " metros, y mi animal favorito es el " + persona.animalFav + ".");
// }

// Ej 8

// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 !== 0) {
//     console.log(array[i]);
//   }
// }

// Ej 9

// let sumaPares = 0;
// let sumaImpares = 0;

// while (true) {
//   let num = parseInt(prompt("Ingresar numero"));

//   if (num === 0) {
//     break;
//   }
//   if (num % 2 == 0) {
//     sumaPares += num;
//   } else {
//     sumaImpares += num;
//   }
// }

// console.log("La suma total de los numeros pares es: " + sumaPares);
// console.log("La suma total de los numeros impares es: " + sumaImpares);

// Ej 10

// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let max = array[0];

// for (let i = 1; i < array.length; i++) {
//   if (array[i] > max) {
//     max = array[i];
//   }
// }
// console.log("El numero mas grande es: " + max);
