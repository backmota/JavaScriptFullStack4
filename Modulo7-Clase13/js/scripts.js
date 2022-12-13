//Propiedad classList
//https://developer.mozilla.org/es/docs/Web/API/Element/classList

/*
La propiedad classList almacena un objeto con métodos para trabajar con las clases de elementos.

elem.classList.contains(cls) - Devuelve true o false dependiendo de si el elemento tiene la clase cls.
elem.classList.add(cls) - Añade la clase cls a la lista de clases del elemento.
elem.classList.remove(cls) - Elimina la clase cls de la lista de clases del elemento.
elem.classList.toggle(cls) - Si no hay clase cls, entonces la añade, si la hay, la elimina.
elem.classList.replace(oldClass, newClass) - Sustituye la clase existente oldClass por la especificada newClass.
*/

//const text = document.querySelector("p");
const text = document.querySelector("#paragraph");
//const text = document.querySelector(".text.red.big")


console.log(text);

console.log(text.classList);

console.log(text.classList.contains("red"));

text.classList.remove("red");

console.log(text.classList.contains("red"));

text.classList.add("blue");

console.log(text.classList);

text.classList.add("is-hidden");

text.classList.remove("is-hidden");

text.classList.replace("blue", "black");

text.classList.toggle("orange");

console.log(text.classList);

text.classList.toggle("orange");

console.log(text.classList);


//Propiedad Style

/*
Se utiliza para leer y modificar los estilos en línea. Devuelve un objeto CSSStyleDeclaration que contiene una lista de todas las propiedades definidas en los estilos en línea del elemento solamente, no todo el CSS. Cuando se escriben, las propiedades se escriben en camelCase, es decir, background-color se convierte en element.style.backgroundColor, etc.
*/

text.style.background = "teal";
text.style.color = "white";
text.style.fontSize = "24px";
text.style.textAling = "center";

console.log(text.style);