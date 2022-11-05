//Números
//Todos los números en JavaScript, tanto los enteros como las fracciones, tienen el tipo Number y puedes escribirlos no sólo en notación decimal.
/*
Reducción a un número
La mayoría de las operaciones aritméticas y funciones matemáticas convierten un valor en un número automáticamente. Para hacerlo explícitamente, utilice la función Number(val), pasando en val lo que quiere convertir en un número

Si el valor no se puede convertir en un número, el resultado es el valor numérico especial NaN (Not a Number). Otros operadores y funciones matemáticas se convierten de la misma manera.
*/

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number

const valueA = "5";
console.log(Number(valueA));
console.log(valueA);

console.log(typeof Number(valueA));
console.log(typeof valueA);

const valueB = "random string";
console.log(Number(valueB));// NaN (Not a Number)
console.log(typeof Number(valueB));//is A Number
console.log(typeof valueB);//String

//Los métodosNumber.parseInt() y Number.parseFloat()
/*
Convierte la cadena carácter por carácter en la medida de lo posible. Si se produce un error, se devuelve el número resultante.

Método Number.parseInt() analiza un número entero a partir de una cadena.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
*/

console.log(Number.parseInt("5px"));
console.log(Number.parseInt("5cm"));
console.log(Number.parseInt("12qwe74"));
console.log(Number.parseInt("12.46qwe79")); 
console.log(Number.parseInt("qweqwe")); //NaN
console.log(Number.parseInt("12.46")); 

//Método Number.parseFloat() analiza un número fraccionario a partir de una cadena.

console.log(Number.parseFloat("5px")); 
console.log(Number.parseFloat("12qwe74"));
console.log(Number.parseFloat("12.46qwe79"));
console.log(Number.parseFloat("12.46342"));
console.log(Number.parseFloat("qweqwe"));//NaN

//Comprobación de un número
/*
Puede usar el método Number.isNaN(val) para comprobar un número. Compruebe si el valor especificado es NaN o no. El método responde a la pregunta "Esto Not A Number?" y devuelve:

true - si el valor val es NaN
false - si el valor val no es NaN
Para todos los valores de val excepto NaN, al pasar Number.isNaN(val) se obtendrá false. Este método no intenta convertir val en un número, sino que simplemente realiza una comprobación en NaN.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/isNaN
*/

const validNumber = Number(51);
console.log(Number.isNaN(validNumber));//False - Si es un número

const invalidNumber = Number("qweqwe");
console.log(Number.isNaN(invalidNumber));//True - No es un número 

const hello = "hola";
let askNumber = Number(hello);
console.log(Number(askNumber));
console.log(Number.isNaN(askNumber));

//Clase Math
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math
//Una de las clases incorporadas que proporciona un conjunto de métodos para trabajar con números. No es necesario conocer todos los métodos de memoria, sólo algunos de los más útiles

// Math.floor(num) - devuelve el mayor número entero,
// menor o igual a lo especificado
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
console.log(Math.floor(1.7));
console.log(Math.floor(2.1));

// Math.ceil(num) - devuelve el menor número entero,
// mayor o igual que el número especificado.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil

console.log(Math.ceil(1.1)); 
console.log(Math.ceil(1.8)); 

// Math.round(num) - devuelve el valor del número,
// redondea al entero más cercano
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/round


console.log(Math.round(1.2));
console.log(Math.round(1.5));
console.log(Math.round(1.4));
console.log(Math.round(1.49999999999));
console.log(Math.round(1.599999));

// Math.max(num1, num2, ...) - devuelve el mayor número del conjunto
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/max

console.log(Math.max(20, 10, 50, 40, 100, -200));

//// Math.min(num1, num2, ...) - devuelve el menor número del conjunto
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/min
console.log(Math.min(20, 10, 50, 40, 100, -200)); 


// Math.pow(base, exponent) - potenciación 
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
console.log(Math.pow(3,2));//El cuadrado de 3 es 9
console.log(Math.pow(3,3));//El cubo de 3 es 27
console.log(Math.pow(3,16));
console.log(Math.pow(2,53));

// Math.random() - devuelve un número pseudo-aleatorio en el rango [0, 1)
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random

console.log(Math.random());
//Quiero un número del 1 a  
console.log(Math.random() * (9) + 1);









