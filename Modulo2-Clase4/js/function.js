/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
Función - Es un subprograma, una pieza de código independiente diseñada para realizar una tarea específica repetidamente con diferentes valores iniciales. Las funciones permiten estructurar grandes programas, reducir las repeticiones y aislar el código.

Una función puede ser considerada como una caja negra, toma algo como entrada (datos) y devuelve algo como salida (el resultado de la ejecución del código dentro de ella).

Declaración de la función (function declaration) comienza con la palabra clave función, seguida de su nombre, es un verbo que responde a la pregunta «¿Qué hacer?» y un par de paréntesis.

El cuerpo de la función se encierra entre llaves {} y contiene las instrucciones que se ejecutan al llamarla. La función se llama utilizando el nombre y un par de paréntesis cuando es necesario.

Parámetros y argumentos
*/

//Ajustes por defecto
/*A veces es necesario declarar una función en donde los parámetros tendrán valores distintos de undefined, aunque no se les hayan pasado argumentos. Esto se hace de una forma muy sencilla y obvia, basta con especificar el valor por defecto directamente al declarar los parámetros en el título de la función. Con esta entrada, si no se pasa ningún valor de argumento para un parámetro, se utiliza el valor por defecto.
*/
function multiply(x = 1, y = 1, z = 1) {

	//Pseudo-array arguments
	/*
	Se puede acceder a la lista de todos los argumentos mediante una variable especial arguments, a la que sólo se puede acceder dentro de la función y que almacena todos los argumentos como un pseudo-array.

Pseudo-array es la colección, con la propiedad length y la posibilidad de acceder a un elemento por índice, pero carece de la mayoría de los métodos para trabajar con un array.

Considere un ejemplo de uso de arguments en una función que multiplica cualquier número de argumentos:
	*/
	console.log(arguments[3]);

	console.log(`El resultado de la multiplicación de x:${x} * y:${y} * z:${z} es igual a ${x * y * z}`);
	//Devolver valores
	//El operador return se usa para pasar un valor del cuerpo de la función al código externo. Cuando el intérprete encuentra return, sale inmed
	return x * y * z;
}

let result = multiply(5,3,2,3);

console.log(result);

