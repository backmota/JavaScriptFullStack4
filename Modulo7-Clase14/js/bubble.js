//Propagación de eventos

/*
Propagación de eventos (event propagation) - es un término que describe el ciclo de vida de un evento, que incluye tres fases: inmersión, focalización y afloramiento. En la práctica, lo más habitual es que sólo se utilice la fase del revestimiento.

Cuando se produce un evento, pasa por tres fases obligatorias:

Capturing phase (inmersión) - El evento comienza en window y se hunde (pasa por todos los elementos antecesores) hasta el elemento de destino más profundo donde se produjo la acción, por ejemplo, el clic.
Target phase (targeting) - El evento ha alcanzado el elemento objetivo. Esta fase consiste únicamente en notificar al elemento que se ha producido una acción.
Bubbling phase (superficie) - Fase final, el evento rebota desde el elemento más profundo, el objetivo, a través de todos sus elementos progenitores hasta la ventana.

*/

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", (event) => {
	 console.log("Parent click handler");
	 console.log("event.target", event.target);
	 console.log("event.currentTarget: ", event.currentTarget);
});

child.addEventListener("click", (event) => {
	//event.stopPropagation();
	 console.log("Child click handler");
	 console.log("event.target", event.target);
	 console.log("event.currentTarget: ", event.currentTarget);
});

descendant.addEventListener("click", (event) => {
	//Detener el ascenso
	//https://developer.mozilla.org/es/docs/Web/API/Event/stopPropagation
	//Normalmente el evento aparecerá en el elemento window, llamando a todos los manejadores en su ruta. Pero cualquier gestor intermedio puede decidir que el evento es manejado completamente y se detiene el popping llamando al método stopPropagation().
	event.stopPropagation();
	//event.stopImmediatePropagation()
	 console.log("Descendant click handler");
	 console.log("event.target", event.target);
	 console.log("event.currentTarget: ", event.currentTarget);
});

