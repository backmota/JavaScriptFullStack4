//Navegar en DOM
/*DOM proporciona una amplia gama de opciones para manipular un elemento y su contenido, pero para hacerlo, primero debe ser referenciado. El acceso a DOM comienza con el objeto document, desde el que se puede acceder a todos los elementos.

https://developer.mozilla.org/es/docs/Web/API/Document
https://developer.mozilla.org/es/docs/Glossary/DOM

elem.parentNode - Selecciona el padre de elem.
elem.childNodes - Pseudo-array, almacena todos los elementos hijos, incluyendo los elementos de texto.
elem.children - Pseudo-array, almacena sólo los nodos de los elementos hijos, es decir, los tags que coinciden.
elem.firstChild - Selecciona el primer elemento hijo dentro de elem, incluyendo nodos de texto.
elem.firstElementChild - Selecciona el primer nodo del elemento hijo dentro de elem.
elem.lastChild - Selecciona el último elemento hijo dentro de elem, incluyendo los nodos de texto.
elem.lastElementChild - Selecciona el último nodo de elemento hijo dentro de elem.
elem.previousSibling - Selecciona un elemento "a la izquierda" de elem (su vecino anterior).
elem.previousElementSibling - Selecciona un elemento de nodo «a la izquierda» de elem (su vecino anterior).
elem.nextSibling - Selecciona un elemento "a la derecha" de elem (su siguiente hermano).
elem.nextElementSibling - Selecciona el elemento de nodo «a la derecha» de elem (su siguiente hermano).


*/
console.log(document);

const body = document.body;
console.log(body);


const list = body.firstElementChild;
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

//Búsqueda de elementos
/*
así que ya sabemos que un elemento del DOM es un objeto con propiedades y métodos. Ahora es el momento de aprender a encontrar rápidamente un elemento utilizando un selector CSS arbitrario. El grupo de métodos elem.querySelector es el estándar moderno para la búsqueda de elementos. Permiten encontrar un elemento o grupo de elementos mediante un selector CSS de cualquier complejidad.
*/


//Query Selector
//https://developer.mozilla.org/es/docs/Web/API/Document/querySelector

//element.querySelector(selector);


//https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
//Query Selector All
//element.querySelectorAll(selector);


const listWithId = document.querySelector('#menu');
listWithId.style.textTransform = 'uppercase';
listWithId.style.fontSize = '24px';
console.log("Lista con ID",listWithId);

const listWithClass = document.querySelector('.menu');
console.log("Lista con Clase",listWithClass);

const menuItemByName = document.querySelector("li");
console.log("Item por nombre de etiqueta:",menuItemByName);

const menuItemsByName = document.querySelectorAll("li");
console.log("Items por nombre de etiqueta:",menuItemsByName);





