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

//Callback Online
//Si la función callback es pequeña y sólo se necesita para pasar un argumento, se puede declarar directamente al llamar a la función en la que se pasa el callback. Dicha función sólo estará disponible como valor de parámetro y en ninguna otra parte del código.

function register(user, callback) {
  console.log(`Registramos a un invitado ${user}.`);
  console.log("Callback:",callback);
  callback(user);
}

register("Cristian", function hello(user){
	 console.log(`Bienvenido ${user}`);
});

register("Cristian", function notify(user){
	 console.log(`Estimado(a) ${user}, su habitación estará lista en 30 minutos.`);
});

//Algunos Callbacks
/*
La función puede aceptar un número arbitrario de colbacks. Por ejemplo, imaginemos que estamos escribiendo la lógica para atender las llamadas de un teléfono. El programa debe habilitar el contestador automático si la persona que llama no está disponible, o conectar la llamada en caso contrario. La disponibilidad de la persona que llama será simulada por un generador de números aleatorios, de modo que entre diferentes llamadas de la función podemos obtener diferentes resultados.


function processCall(recipient) {
	 // Simular la disponibilidad de los abonados mediante un número aleatorio
	const isRecipientAvailable = Math.random() > 0.5;

	if(!isRecipientAvailable){
		console.log(`El abonado ${recipient} no está disponible, deje un mensaje.`);
	}else{
		console.log(`Conectando con ${recipient}, espere...`);
	}
}

processCall("Jorge");
*/

function processCall(recipient, onAvailable, onNotAvailable) {
  // Simular la disponibilidad de los abonados mediante un número aleatorio
	console.log("recipient",recipient);
	console.log("onAvailable",onAvailable);
	console.log("onNotAvailable",onNotAvailable);
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Conectando con ${name}, espere...`);
  // La lógica de aceptar una llamada
}

function activateAnsweringMachine(name) {
  console.log(`El abonado ${name} no esta disponible, deje un mensaje.`);
  // Lógica para activar el contestador automático
}

function leaveHoloMessage(name) {
  console.log(`El abonado ${name} no esta disponible, grabe un holograma.`);
  // Lógica de grabación de hologramas.
}

processCall("Jorge",takeCall,leaveHoloMessage);
processCall("Jennifer",takeCall,activateAnsweringMachine);

//Abstracción de la repetició
/*Abstracción - Oculta los detalles de la aplicación. Permite pensar en las tareas a un nivel superior (abstracto). Las funciones son una buena forma de construir abstracciones.

Por ejemplo, script realiza alguna acción un número determinado de veces. Para esto se puede hacer escribiendo un ciclo for.*/

function repeat(n, action) {
	for (let i = 1; i <= n; i++) {
		action(i);
	}
}

function prettyPrint(value){
	console.log("Logging value: ", value);
}

function printValue(value) {
	console.log(value);
}

repeat(3, printValue);
repeat(10, prettyPrint);

//Método forEach
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

//Un método de fuerza bruta para matrices que se utiliza como sustituto de los ciclos for y for...of cuando se trabaja con una colección de datos.
/*
array.forEach(function callback(element, index, array){
	 // Cuerpo de la función callback
});

Los argumentos de la función callback son el valor del elemento actual element, su índice index y el propio array original array. Sólo puede declarar los parámetros que necesita, la mayoría de las veces es un elemento, lo principal es no olvidarse de su orden.
*/

const numbers = [5, 10, 15, 20, 25];

// Clásico for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, valor ${numbers[i]}`);
}

// Digitación forEach


numbers.forEach(function (number, index, longArray){
	console.log(`Index ${index}, valor ${number}, array completo ${longArray}`);
});







