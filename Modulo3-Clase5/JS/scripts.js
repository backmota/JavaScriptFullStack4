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

let amount;
let balance;

amount = 500;
balance = 300;

withdraw(amount, balance);









