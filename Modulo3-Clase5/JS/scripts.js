let amount;
let balance;

function count(countFrom = 0, countTo = 10, step = 1){
	console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
	console.log("Argumento index 3",arguments[3]);
	console.log("Argumento index 4",arguments[4]);

	let theLastNumber;	
	let values;

	for(let i = countFrom; i <= countTo ; i += step){
		console.log(i);

		theLastNumber = i;
	}

	values = [theLastNumber, countFrom, countTo, step];

	return values;
}


let theLastNumber;

theLastNumber = count();
count(10,100,10);
count(10,100,10,50,100);


console.log("El número de retorno de la función count fue: ",theLastNumber);
///Pattern «Retorno temprano»
/*
El operador if...else es la principal forma de crear ramas. Sin embargo, las ramas anidadas complejas hacen que el código sea confuso de entender.

Vamos a crear una función que maneje los retiros de una cuenta bancaria personal. Recibe el importe a retirar y el saldo de la cuenta corriente, y a continuación, en función de la condición, ejecuta uno u otro bloque del código.
*/



function withdraw(amount, balance){
	console.log(amount, balance);
	if (amount === undefined) {
		console.log("hace falta el monto de retiro");
		return;
	}

	if (balance === undefined) {
		console.log("hace falta el balance");
		return;
	}

	if(amount === 0){
		console.log("Introduzca un importe superior a cero para realizar la operación");
		return;
	}

	if(amount > balance){
		console.log("Insuficiencia de fondos en la cuenta");
		return;
	}

	console.log("operación correcta");
}


amount = 500;
balance = 300;



//Expresión funcional
//Expresión de la función (function expression) es una declaración normal de una variable en donde el valor será una función. Una forma alternativa de declarar una función.

//La diferencia es que una expresión funcional no puede ser llamada antes de ser creada, sólo después, porque es literalmente una declaración de una variable const.
//multiply(2,3,6);

const multiply = function (x,y,z){
	console.log(`El resultado de la multiplicación es igual a  ${x * y * z}`);
};

multiply(2,3,6);

const OtherMultiply = multiply;

OtherMultiply(3,3,3);

//Ámbito global
//Las variables declaradas en el nivel más alto, es decir, fuera de cualquier construcción como if, while, for y funciones, están en el ámbito global y están disponibles en todas partes después de ser declaradas.

const globalValue = 10;

console.log(globalValue);

function foo() {
	const functionValue = 50;
	console.log(globalValue);

	return functionValue;
}

foo();
let functionValue = foo();
console.log(functionValue);

/*
for (let i = 0; i < 5; i++) {
  const a = 20;
  console.log(a); // 20

  if (i === 2) {
    const b = 30;
    console.log(a); // 20
    console.log(b); // 30
  }

  if (i === 3) {
    console.log(a); // 20

    // ❌ ¡Error! La variable b no está disponible en este ámbito
    //console.log(b);
  }
}

console.log(a);
*/

//Pila de llamadas
//Cuando se llama a una función, se puede llamar a otras funciones dentro del cuerpo de la función, y se puede llamar a otras funciones en ellas, etc. JavaScript es un lenguaje de un solo hilo, lo que significa que sólo se puede ejecutar una instrucción a la vez. Esto significa que las funciones que ya han sido llamadas pero no han completado su ejecución tienen que esperar a las funciones llamadas dentro de sí mismas para continuar su trabajo.

function fnA(){
	console.log("Registro desde el interior de la función fnA antes de llamar a fnB - 2");
	fnB();
	console.log("Registro desde el interior de la función fnA después de llamar a fnB - 4");
	}


function fnB(){
	  console.log("Registro dentro de la función fnB - 3");
}

console.log("Registro antes de llamar a fnA - 1");
fnA();
console.log("Registro después de llamar a fnA - 5");
fnB();


/*
Pila - Es una estructura de datos que funciona según el principio LIFO (Last-In-First-Out), que significa último en entrar, primero en salir. Lo último que se añade a la pila se eliminará de ella en primer lugar, por lo que sólo se pueden añadir o eliminar elementos de la parte superior de la pila.

Piensa en la pila como un array con sólo los métodos pop y push, es decir, sólo puede añadir o eliminar un elemento al final de la colección
*/

function bar(){
	console.log("Inicia función bar");
	console.log("Termina función bar");

}

function baz(){
	console.log("Inicia función baz");
	bar();
	bar();
	console.log("Termina función baz");
}

function callStack(){
	console.log("Inicia la función - callStack");
	bar();
	baz();
	console.log("Termina la función - callStack");
}

callStack();
