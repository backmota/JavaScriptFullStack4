/*

Utilizar la logica en el IF buscando que sea Falso

let x = 10;
let y = 10;

if (!x === y){
	console.log("Las variables X Y no son iguales");
}else{
	console.log("las variables tienen el mismo valor");
}
*/

let cost;

const subscription = "premium";

if (subscription === "free") {
	cost = 0;
	console.log(`El precio de tu servicio es de: ${cost}`);
}else if(subscription === "pro"){
	cost = 100;
	console.log(`El precio de tu servicio es de: ${cost}`);
}else if(subscription === "premium"){
	cost = 500;
		console.log(`El precio de tu servicio es de: ${cost}`);
}else{
	console.log(`El tipo de suscripción no es valido`);
}

//Operador Condicional 
/*El operador condicional se utiliza como una sustitución más concisa sintácticamente para la instrucción if...else cuando la misma variable necesita ser asignada diferentes valores por condición.
*/

//<condición> ? <expresion_si_la_condición_es_verdadera> : <expresion_si_la_condición_es_falsa>

/*
Funciona de esta manera:

Se calcula la condición.
Si la condición es verdadera, es decir, se convierte en true, la expresión después de ?.
Si la condición es falsa, es decir, se convierte en false, la expresión después de :.
El valor de la expresión calculada se devuelve como resultado del operador condicional.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator



let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // "adult"

Realice la refactorización sustituyendo if...else por un operador condicional.
*/

const age = 20;
const type = age >= 18 ? "adult" : "child";

console.log(type);


//Escribimos la operación de búsqueda de un número mayor.

/*
const num1 = 5;
const num2 = 10;
let biggerNumber;

if (num1 > num2) {
  biggerNumber = num1;
} else {
  biggerNumber = num2;
}

console.log(biggerNumber); // 10
*/

const num1 = 5;
const num2 = 10;
const biggerNumber = num1 > num2 ? num1 : num2;

console.log(biggerNumber);



const subscription2 = "premium";
const cost2 = subscription2 === "free" ? 0 : subscription2 === "pro" ? 100 : subscription2 === "premium" ? 500 : "El tipo de suscripción no es valido";

console.log(`El precio del servicio es: ${cost2}`);
