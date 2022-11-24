//Funciones de Flecha
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions

/*Las funciones de flecha tienen un sintáxis más corto y conciso, lo que reduce la cantidad de código, especialmente cuando la función es pequeña o cuando se utiliza como callback.

Todas las flechas se crean como una expresión funcional, y si la función no es anónima, debe asignarse a una variable.
*/



//Función Normal
function classicAdd(a,b,c) {
	return a + b + c;
}

//Expresión Funcional 
const add = function(a,b,c){
	return a + b + c;
};

//Función Flecha

const arrowAdd = (a,b,c) => {
	return a + b + c;
}

//Si sólo hay un parámetro, su declaración puede ir sin paréntesis.
const hello = name =>{
	console.log(`Hola ${name}`);
}

hello("David");

//Si no hay parámetros, debe haber paréntesis vacíos.

const greet = () =>{
	console.log("Hola!!!");
}

greet();

//Retorno implícito

//En una función de flecha, el símbolo => va seguido de su cuerpo. Aquí puede haber dos opciones: con y sin llaves.

const addNumbers = (a,b,c) =>{
	console.log(a,b,c);
	return a + b + c;
};

console.log(addNumbers(1,2,3));

const addReturn = (a,b,c) => a + b + c;

console.log(addReturn(1,2,3));

/*Si no hay llaves, se devuelve el resultado de la expresión después de =>. Esto se llama retorno implícito. El ejemplo devuelve el resultado de una expresión que suma los parámetros a, b y c.

La sintaxis de retorno implícito reduce en gran medida el «ruido» de declarar una función con un cuerpo y una expresión de retorno, pero sólo es adecuada cuando no es necesario ejecutar ninguna instrucción adicional en el cuerpo de la función aparte del retorno del valor.
*/

//Pseudo-array arguments
/*Las funciones de flecha no tienen una variable local argumentos que contengan todos los argumentos. Si se quiere recoger todos los argumentos en un array, se utiliza la operación rest.
*/


const numbersOfTheArrow = (...args) =>{
	console.log(args);
};

numbersOfTheArrow(1,2,3,4,5,6,7,8,9);

//Funciones de flecha como callbacks

/*Las funciones anónimas en forma de flecha son ideales como callbacks para enumerar métodos de matrices debido a que la sintaxis de la declaración es más corta, especialmente si el cuerpo de la función no es necesario.*/

const numbers = [5, 10, 15, 20, 25];

// Declaración de funciones
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, valor ${number}`);
});

// Función de flecha anónima

numbers.forEach((number, index) => console.log(`Función Flecha: Index ${index}, valor ${number}`));

//Una función callback de flecha también puede ser declarada por separado y referenciada. Vale la pena si la misma función se utiliza en más de un del programa o si es complicado.

const logMessage = (number, index) => console.log(`Callback: Index ${index}, valor ${number}`);

numbers.forEach(logMessage);








