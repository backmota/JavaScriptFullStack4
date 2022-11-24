//Callbacks
/*
https://developer.mozilla.org/es/docs/Glossary/Callback_function
Las funciones no son diferentes de los números, las cadenas o los arrays: son simplemente un tipo de datos especial (objeto de alto nivel), un valor que puede almacenarse en una variable o pasarse como argumento a otra función.
*/

function greet(name){
	console.log(`Bienvenido ${name}.`);
}

/*En el primer registro, llamamos a la función greet con paréntesis y el resultado se envía a la consola. En el segundo registro, pasamos una referencia al función en lugar del resultado (sin paréntesis), por lo que la consola imprime su cuerpo. Esto significa que la función puede asignarse a una variable o pasarse como argumento a otra función.

Función de devolución de llamada (callback) es una función a la cual se pasa a otra función como argumento y que, a su vez, llama a la función pasada.

Una función de orden superior (higher order function) es una función que toma otras funciones como parámetros o devuelve una función como resultado.
*/

function bye(name){
	console.log(`Nos vemos pronto ${name}.`);
}

//console.log(greet("José Mota"));

function registerGuest(name, callback) {
	// body...
	console.log(`Usuario identificado: ${name}`);
	callback(name);
}

registerGuest("José Mota",greet);

registerGuest("José Mota",bye);