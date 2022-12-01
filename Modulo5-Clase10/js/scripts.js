//Contexto de ejecución de la función
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this
const user = {
	username: "Rous",
	showName(){
		console.log(this.username);
	},
};

user.showName();

const bookShelf = {
	authors: ["JR Rowling", "JRR Tolkin"],
	getAuthors(){
		return console.log(this.authors);
	},
	addAuthor(authorName){
		this.authors.push(authorName);
	},
	changeNameAuthor(authorName, newName){
		if(this.authors.indexOf(authorName) !== -1){
			let index = this.authors.indexOf(authorName);
			this.authors[index] = newName;
		}else{
			console.log("No existe un autor con ese nombre en la base de datos");
		}
	},
};

bookShelf.getAuthors();
bookShelf.addAuthor("CS Lewis");
bookShelf.getAuthors();

console.log(bookShelf.authors[1]);
bookShelf.authors[1] = "Dante Alighieri";
bookShelf.getAuthors();

bookShelf.changeNameAuthor("CS Lewis", "Carlos Castañeda");
bookShelf.getAuthors();

bookShelf.changeNameAuthor("JRR Tolkin", "CS Lewis");

//Reglas determinadas 'this'
/*Sólo hay una regla que aprender para definir this, es el valor del contexto dentro de una función (no una función de flecha) se define no en el momento en que se crea, sino en el momento en que se llama. Es decir, el valor de this está determinado por la forma en que se llama a la función, no por el lugar donde se declaró.

this en el ámbito global.

En el ámbito global, si el script no se ejecuta en modo estricto, this se refiere al objeto window. En modo estricto, el valor de this, en el ámbito global, será undefined.
*/

function foo(){
	name: "Hola Mundo",
	console.log(this.name); //Información Global de This
}

foo();

//this en el método de objeto
const petya = {
	username: "Petya",
	showThis(){
		let index;
		console.log(this);
		console.log(this.username);
	},
};

petya.showThis();

function showThis() {
	console.log("this in showThis: ", this);
}

showThis();

const student = {
	username: "Alex",
};

console.log(student);

student.showContext = showThis;

console.log(student);

student.showContext();

//this en las funciones callback
//Cuando se pasan los métodos de objetos como funciones callback, el contexto no se conserva. Callback es un enlace a un método que se asigna como valor de un parámetro que se llama sin el objeto.

const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(customer.getFullName());

function makeMessage(callback){
	//La solución a este problema se discute en la sección sobre el método bind() y los métodos de objetos.
	console.log(`Tramitamos la solicitud de ${callback()}.`);
}

makeMessage(customer.getFullName);

//this en las funciones flecha 

const showAThis = () => {
	console.log("this in showAThis: ", this);
};

showAThis();

const teacher = {
	username: "José Mota",
};

teacher.showContext = showAThis;

teacher.showContext();

/*Al limitar las funciones de flecha a un contexto constante, los motores de JavaScript pueden optimizarlas mejor, a diferencia de las funciones normales en donde el valor this puede cambiarse.

Este ejemplo no es práctico, pero muestra bien cómo funciona el contexto de las flechas. El valor del contexto se toma del ámbito parental.
*/

const hotel = {
	name: "Resort hotel",
	price: 500,
	showThis(){
		const foo = () => {
		 console.log("this in foo: ", this);
		 console.log("Price: ", this.price);
		};

		foo();
		console.log("this in showThis: ", this);
		console.log("Price: ", this.price);
	},
};

hotel.showThis();

//Métodos de funcionamiento
/*Hay situaciones en las que es necesario llamar a una función en el contexto de un objeto, pero la función no es un método de ese objeto. Para ello, las funciones tienen métodos call, apply y bind.

Método call()
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/call

function.call(obj[, arg1[, arg2[, ...]]])
*/

function greetGuest(greeting) {
	console.log(`${greeting}${this.username}.`);
}

const mango = {
  username: "Mango",
};
const poly = {
  username: "Poly",
};

greetGuest.call(mango, "Bienvenido: ");
greetGuest.call(poly, "Hola: ");

//Método apply
/*El método apply es análogo del método call, excepto que la sintaxis para pasar los argumentos requiere un array en lugar de una enumeración, incluso si el argumento es sólo uno.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/apply


function greetGuest(greeting) {
	console.log(`${greeting}${this.username}.`);
}
*/

greetGuest.apply(mango, ["Mucho gusto "]);
greetGuest.apply(poly, ["Tiempo sin verte "]);


//Método bind()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
//Los métodos call y apply llaman a la función «en su sitio», es decir, inmediatamente. Pero en el caso de las funciones callback, cuando no se quiere llamar a la función inmediatamente, sino pasarle una enlace, con el contexto ligado, se utiliza el método bind.

function greet(clientName) {
	return console.log(`${clientName}, bienvenidos a «${this.service}».`);
}

const steam = {
  service: "Steam",
};

const steamGreet = greet.bind(steam);

steamGreet("Mango");

const gmail = {
  service: "Gmail",
};

const gmailGreeter = greet.bind(gmail);
gmailGreeter("Poly");

const twitter = {
  service: "twitter",
};

const twitterGreeter = greet.bind(twitter);

twitterGreeter("Brenda");

//bind() y los métodos de objetos
//Cuando se pasan métodos de objetos como funciones callback, el contexto no se conserva. Callback es un enlace a un método que se asigna como valor de un parámetro que se llama sin el objeto.
/*
const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  // callback() es una llamada al método getFullName sin un objeto
  console.log(`Tramitamos la solicitud de ${callback()}.`);
}


En modo estricto, el valor de this en el método getFullName, cuando se llama como función callback callback(), será undefined. Al referirse a las propiedades firstName y lastName habrá un error porque undefined no es un objeto.
makeMessage(customer.getFullName); // Habrá un error al llamar a la función
*/

function newMessage(callback){
	console.log(`Tramitamos la solicitud de ${callback()}.`);
}
//El método bind se utiliza para enlazar el contexto cuando se pasan métodos de objetos como funciones callback. No pasemos el método original getFullName, sino una copia del mismo con el contexto ligado al objeto customer.
newMessage(customer.getFullName.bind(customer));


















