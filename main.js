/*
var variableJuan = 123;
var variableJuan = 2345; // no se usa mas var
let precio; // sin valor establecido es una declaracion
console.log (precio)
let nombre = "Televisor 32 pulgadas" // se usan comillas dobles. Los espacios son un caracter. Se empieza a contar en 0
let stock = 120;
precio = 1450000;
nombre = "TV smart 32 pulgadas";
const LOTE = 4567 // esta variable es constante y no cambia. Es fija y unica
let valorLote = precio * stock;
console.log (valorLote);

//Operaciones matematca simple
let numeroA = 12;
let numeroB = 23;
let resultado = numeroA + numeroB; // puede ser +-* div
console.log(resultado);

//Operaciones concatenar string
let textoA = "Hola";
let textoB = "Jero y Maite";
let mensaje = textoA + " " + textoB;
console.log(mensaje);
let numeroC = 12;
let unirStringNumero = textoA + numeroC;
console.log (unirStringNumero);
*/
let nombreDePersona = prompt("Ingrese el nombre de persona");
alert("el nombre ingresado es " + nombreDePersona);
let operador = prompt("ingrese el operador");
operador = parseFloat(operador);
let operando = prompt("ingrese operando");
operando = parseFloat("operando");
let resultado = operador + operando;
alert("Sr " + nombreDePersona + "el resultado de la suma es: " + resultado);