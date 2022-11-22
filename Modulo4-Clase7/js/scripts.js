//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters

const users = { 
		name: "Un nombre",
		lastName: "Un apellido",
	};

const numbers = [14, -4, 25, 8, 11, users];

console.log(numbers);

//spread: transferencia de argumentos
/*La operación ... (spread) permite extender una colección de elementos (array, cadena u objeto) a un lugar donde se espera un conjunto de valores individuales. Por supuesto, hay algunas limitaciones, por ejemplo, no se puede extender una matriz en un objeto y viceversa.*/

console.log(...numbers);

//spread: creación de un nuevo array
//La operación ... (spread) permite crear una copia de un array o «pegar» un número arbitrario de arrays en un nuevo array. Anteriormente, se utilizaban los métodos slice() y concat() para ello, pero la operación de propagación permite hacer lo mismo de forma más breve.

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];

const allTemps = [...lastWeekTemps,...currentWeekTemps];
console.log(allTemps);

//spread: creación de nuevos objetos
//La operación ... (spread) le permite extender las propiedades de un número arbitrario de en un nuevo objeto.

const first = { propA: 5, propB: 10 ,propD: 10};
const second = { propC: 15 , propD: 20};

const third = {...first,...second};

console.log(third);

const fourth = {...second, ...first };
const five = {...first,...second};

console.log(fourth);
console.log(five);

const userNamesOne = {
	name: "David",
};

const userNamesTwo = {
	name: "Jorge",
};

const allUserNames = {...userNamesOne, ...userNamesTwo};

console.log(allUserNames);

//rest: colección de todos los argumentos de la función
/*La operación ... (rest) reúne un grupo de elementos independientes en una nueva colección. Sintácticamente, es un gemelo de la operación de dispersión, pero la diferencia es simple - la dispersión es cuando ... está en la parte derecha de la operación de asignación, mientras que el descanso es cuando ... está en su parte izquierda.

Volvamos a la analogía de la manzana. Si hay manzanas en el suelo y tenemos una caja vacía, entonces la operación rest «recogerá» las manzanas en la caja. Las manzanas originales permanecerán en el suelo y la caja contendrá una copia de cada manzana.

Uno de los usos de la operación rest es crear funciones que pueden tomar cualquier número de argumentos.
*/

//rest: colección de parte de los argumentos de la función
//La operación ... (rest) también permite que sólo la porción de los argumentos que se requiere sea array, declarando los parámetros antes de la «colección».
//Array de argumentos restantes de todos los argumentos para los que se declaren parámetros tendrán sus valores pasados, los argumentos restantes se colocarán en un array. La operación rest recoge todos los argumentos restantes y, por tanto, debe ir en último lugar en la firma de la función, de lo contrario se producirá un error.

function multiply(fistNumber, secondNumber, ...otherArgs) {
	console.log("Primer Número",fistNumber);
	console.log("Segundo Número",secondNumber);
	console.log("El resultado es: ", fistNumber * secondNumber);
	console.log(otherArgs);
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);







