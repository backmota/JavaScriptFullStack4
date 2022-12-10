//Creación
//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

/*
Para que el elemento creado se muestre en la página, debe añadirse a un elemento existente en el árbol DOM. Digamos que añadimos a algún elemento elemento, existen métodos para ello.

element.append(el1, el2, ...) - Añade uno o más elementos después de todos los hijos del elemento.
element.prepend(el1, el2, ...) - Añade uno o más elementos antes de todos los hijos del elemento elemento.
element.after(el1, el2, ...) - Añade uno o más elementos después del elemento element.
element.before(el1, el2, ...) - Añade uno o más elementos antes del elemento element.
En todos estos métodos, el son elementos o cadenas, en cualquier combinación y cantidad. Las cadenas se añaden como nodos de texto.
*/

const list = document.querySelector('.usernames');

console.log(list);

const lastItem = document.createElement("li");
lastItem.textContent = "Alex";
console.log(lastItem);

list.append(lastItem);

const firstItem = document.createElement("li");
firstItem.textContent = "Jennifer";
list.prepend(firstItem);

const title = document.createElement("h2");
title.textContent = "USERNAMES";
list.before(title);

const text = document.createElement("p");
text.textContent =  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
list.after(text);

//Eliminación
//https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
const longText = document.querySelector('p');
longText.remove();



