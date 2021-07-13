// introducción a Javascript

let dos;

dos = 2;
console.log(dos);

let str1 = "hola";
let str2 = "mundo";

// let allString = str1 + " " + str2;
let allString = `${str1}  ${str2}`;


console.log(allString)


let car1 = 1;
let car2 = "2";
console.log(car1 + car2)

let car = 1;
console.log(car);
car = "Renault";

//let edad = prompt("Digita tu edad");
//let suma = parseInt(edad)+2;
//console.log(suma);

let num1 = prompt("Digita primer número");
let num2 = prompt("Digita segundo número");
let suma = parseInt(num1) + parseInt(num2);
console.log(`La suma de ${num1} y ${num2} es: ${suma}`);

let anioNacimiento = prompt("Digita el año de tu nacimiento");
edad = 2021 - parseInt(anioNacimiento);
console.log(`Para el año 2021 tendrás: ${edad}`);

let peso = prompt("Digita tu peso en kilogramos: ");
let estatura = prompt("Digita tu estatura en metros: ");
let imc = parseInt(peso)/(parseFloat(estatura)**2);
console.log(`Tu BMI es: ${imc}`)