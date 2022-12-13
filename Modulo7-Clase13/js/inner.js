//Propiedad innerHTML

//https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML

//Otra forma de crear elementos DOM y colocarlos en un árbol es utilizar las cadenas con tags y dejar que el navegador haga todo el trabajo pesado. Este enfoque tiene sus pros y sus contras.

//Lectura
//La propiedad innerHTML almacena el contenido de un elemento, incluyendo los tags, como una cadena. El valor de retorno es siempre un código HTML válido.

const article = document.querySelector(".article");
console.log(article.innerHTML);

const title = document.querySelector(".article .title");
console.log(title.innerHTML);

const text = document.querySelector(".article .text");
console.log(text.innerHTML);

const link = document.querySelector(".article .link");
console.log(link.innerHTML);

//Cambio
//La propiedad innerHTML se puede leer y escribir. Si escribe una cadena con tags HTML, el navegador analizará la cadena y las convertirá en elementos válidos y los añadirá al árbol DOM.

title.innerHTML = 'Clase Número 13 de JavaScript En <span class="accent">Goit</span>';

//

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

const list = document.querySelector(".list");

console.log(list.innerHTML);

const markup = technologies.map((technology) => `<li class="list-item">${technology}</li>`).join("");

console.log(markup);

list.innerHTML = markup;

//Método insertAdjacentHTML()
//https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentHTML

//Un método moderno para añadir una línea de tags HTML antes, después o dentro de un elemento. Resuelve el problema del innerHTML de la re-serialización del contenido de los elementos cuando se agrega el marcado al marcado existente.


const newTechnologies = ["GP3", "ChatGP3", "Swift"];

const newCode = newTechnologies.map((technology) => `<li class="list-item">${technology}</li>`).join("");

const newTechnologies2 = ["Python", "Ruby", "Java"];

const newCode2 = newTechnologies2.map((technology) => `<li class="list-item">${technology}</li>`).join("");

const newTechnologies3 = ["PHP", "AJAX", "Kotlin"];

const newCode3 = newTechnologies3.map((technology) => `<li class="list-item">${technology}</li>`).join("");



list.insertAdjacentHTML("beforeend", newCode);
list.insertAdjacentHTML("beforebegin", newCode2);
list.insertAdjacentHTML("afterbegin", newCode3);

