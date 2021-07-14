// introducción a Javascript clase 1

//let dos;

//dos = 2;
//console.log(dos);

//let str1 = "hola";
//let str2 = "mundo";

// let allString = str1 + " " + str2;
//let allString = `${str1}  ${str2}`;


//console.log(allString)


//let car1 = 1;
//let car2 = "2";
//console.log(car1 + car2)

//let car = 1;
//console.log(car);
//car = "Renault";

//let edad = prompt("Digita tu edad");
//let suma = parseInt(edad)+2;
//console.log(suma);

//let num1 = prompt("Digita primer número");
//let num2 = prompt("Digita segundo número");
//let suma = parseInt(num1) + parseInt(num2);
//console.log(`La suma de ${num1} y ${num2} es: ${suma}`);

//let anioNacimiento = prompt("Digita el año de tu nacimiento");
//edad = 2021 - parseInt(anioNacimiento);
//console.log(`Para el año 2021 tendrás: ${edad}`);

//let peso = prompt("Digita tu peso en kilogramos: ");
//let estatura = prompt("Digita tu estatura en metros: ");
//let imc = parseInt(peso)/(parseFloat(estatura)**2);
//console.log(`Tu BMI es: ${imc}`)

let numero1 = prompt("Digita un número: ");
if (parseInt(numero1) > 10) {
  console.log(`${numero1} es mayor a 10`);
} else {
  console.log(`${numero1} es menor a 10`)
}

let aleatorio = parseInt(Math.random()*9);
let numeroAdivinar = prompt("Digita un número entre 0 y 9 para adivinar: ");
if (parseInt(numeroAdivinar) === aleatorio) {
  console.log("Felicitaciones, ese era!");
} else {
  console.log(`Lo siento, intenta nuevamente!`)
}

let multiplo1 = prompt("Digita un número: ");
if ((parseInt(multiplo1) % 5) == 0) {
  console.log(`Si, el número ${multiplo1} es multiplo de 5`);
} else {
  console.log(`No, el número ${multiplo1} no es multiplo de 5`);
}

let numero = prompt("Digita un número: ");
if (parseInt(numero) == 10) {
  console.log("El número es igual a 10");
} else if (parseInt(numero) > 10) {
  console.log("El número es mayor a 10");
} else {
  console.log("El número es menor a 10");
}

let peso = prompt("Digita tu peso en kilogramos: ");
let estatura = prompt("Digita tu estatura en metros: ");
let imc = parseInt(peso)/(parseFloat(estatura)**2);
console.log(imc)
if (imc < 18.5) {
  console.log("Bajo de peso");
} else if (imc >= 18.5 && imc <= 24.9){
  console.log("Normal");
} else if(imc >= 25 && imc <=29.9) {
 console.log("Sobrepeso"); 
} else {
  console.log("Obeso");
}

let multiplo = prompt("Digita un número: ");
if ((parseInt(multiplo) % 3) == 0 && (parseInt(multiplo) % 5) == 0) {
  console.log("bingbong");
} else if ((parseInt(multiplo) % 3) == 0){
  console.log("bing");
} else if ((parseInt(multiplo) % 5) == 0){
  console.log("bong");
} else {
  console.log(multiplo);
}