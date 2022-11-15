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







