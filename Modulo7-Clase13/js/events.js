//Eventos

/*
Un evento es una señal del navegador de que algo ha sucedido en una página web. Los eventos se utilizan para responder a las acciones del usuario y ejecutar el código asociado a un evento concreto. Hay muchos tipos de eventos: de ratón, de teclado, de elementos de formulario, de carga de imágenes, de portapapeles, de cambio de etapa de animación CSS o de transición, de cambio de tamaño de la ventana y muchos otros.

Una acción puede desencadenar varios eventos. Por ejemplo, un clic provoca primero mousedown y luego mouseup y click. En los casos en los que una misma acción genera varios eventos, su orden es fijo. Es decir, los manejadores serán llamados en el orden mousedown → mouseup → click.

Para que un elemento responda a las acciones del usuario, necesita añadir un receptor de eventos (manejador). Es decir, una función que será llamada en cuanto se produzca el evento.
*/

//Método addEventListener()
//https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener

const singleBtn = document.querySelector("#single");

const handleClick = () => {
	console.log("Se activo el evento en singleBtn");
};

singleBtn.addEventListener("click", handleClick);

// ===============================================

const multiBtn = document.querySelector("#multiple");

const firstCallback = () => {
	console.log("Se activo el primer callback de multiBtn")
};

const secondCallback = () => {
	console.log("Se activo el segundo callback de multiBtn")
};

const thirdCallback = () => {
	console.log("Se activo el tercer callback de multiBtn")
};

multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback);

//Método removeEventListener()
//https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener

multiBtn.removeEventListener("click", secondCallback);

//Palabra clave this

const mango = {
  username: "Mango",
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};

//mango.showUsername();

//singleBtn.addEventListener("click", mango.showUsername);

singleBtn.addEventListener("click", mango.showUsername.bind(mango));

//Objeto del Evento

/*
Para gestionar un evento, no basta con saber que es un clic o una pulsación, sino que se necesitan detalles. Por ejemplo, el valor actual del cuadro de texto, el elemento en el que se produjo el evento, los métodos incorporados y otros.

Cada evento es un objeto que contiene información sobre los detalles del evento y se pasa automáticamente como primer argumento al manejador de eventos. Todos los eventos ocurren sobre la clase base Event.
*/

const eventClick = (event) => {
	console.log("event:", event);
	console.log("event type:", event.type);
	console.log("event currentTarget:", event.currentTarget);
}

singleBtn.addEventListener("click", eventClick);



//Acciones por defecto del navegador

/*
Algunos eventos desencadenan una acción del navegador incorporada por defecto como respuesta a un tipo particular de evento. Por ejemplo, al hacer clic en un enlace se inicia un traslado a una nueva dirección especificada en href y al enviar un formulario se recarga la página. En la mayoría de los casos, este comportamiento es indeseable y debe ser anulado.

Para anular la acción por defecto del navegador en un objeto de evento, existe un método estándar reventDefault().
*/
//https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault
const form = document.querySelector(".register-form");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const {
		elements: {username, password} 
	} = event.currentTarget;
		console.log(username.value, password.value);
});














