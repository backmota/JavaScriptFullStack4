//Programación basada en prototipos
/*
La POO en JavaScript se basa en la herencia de prototipos. Los objetos pueden encadenarse para que una propiedad que no se encuentre en un objeto buscar automáticamente una propiedad en otra. El enlace es una propiedad especial oculta [[Prototype]] que aparece en la consola del navegador como __proto__.
*/

const animal = {
	legs: 4,
	color: "Pardo",
};

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
const dog = Object.create(animal);

dog.name = "Chai";

console.log(dog);
console.log("Cuantas patas tiene Chai:",dog.legs);

console.log(animal.isPrototypeOf(dog));

console.log(animal);

/*
El objeto al que se refiere __proto__ se llama prototipo. En nuestro ejemplo, el objeto animal es el prototipo del objeto dog. El método isPrototypeOf() comprueba si el objeto animal es un prototipo de dog y devuelve true o false.
*/

console.log(dog.hasOwnProperty("name"));
console.log(dog.hasOwnProperty("legs"));

dog.legs = 4;

console.log(dog);

console.log(dog.__proto__);

console.log(dog);

/*
La referencia dog.name funciona de forma obvia - devuelve la propiedad name del objeto dog. Al referirse a dog.legs el intérprete busca la propiedad legs en el objeto dog, no la encuentra y continúa la búsqueda en el objeto por referencia de dog.__proto__, es decir, en este caso, en el objeto animal, su prototipo.

Es decir, un prototipo es un repositorio de respaldo de las propiedades y métodos de un objeto, que se utiliza automáticamente al buscarlos. Un objeto que actúa como prototipo también puede tener su propio prototipo, que tiene su propio prototipo, y así sucesivamente.

Se busca en la propiedad hasta que se produce la primera coincidencia. El intérprete busca la propiedad por su nombre en el objeto, si no la encuentra, busca la propiedad __proto__, es decir, hace referencia al objeto prototipo y luego al prototipo del prototipo. Si el intérprete llega al final de la cadena y no encuentra una propiedad con ese nombre, devuelve undefined.
*/

//Método hasOwnProperty()

//Una vez que hayamos aprendido cómo se buscan las propiedades de los objetos, debería estar claro por qué el ciclo for...in no distingue entre las propiedades de un objeto y su prototipo.

dog.size = "medium";

for (const key in dog){
	console.log("Ciclo sin continue",key);
}

for (const key in dog){
	if(!dog.hasOwnProperty(key)){
		continue;
	} 

	console.log("continue",key);
}

//El método Object.keys(obj) sólo devolverá un array de las claves propias del objeto obj, por lo que en la práctica se utiliza en lugar de for...in

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
console.log(Object.keys(dog));
console.log(dog.__proto__);


if(dog.color === "Pardo"){
	console.log("El perro es pardo");
}else{
	console.log("El perro no es pardo");
}

const user = {
	name: "Nombre Generico",
	edad: "Sin edad establecida",
	altura: "Estatura no agregada",
}

const jose = Object.create(user);

console.log("Objeto sin propiedades propias",jose);
console.log("Cual es el nombre del objeto José:",jose.name);
jose.name = "José Mota";

console.log(jose.__proto__);
console.log(jose.name);
console.log(jose);









