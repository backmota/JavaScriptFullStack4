//Referencia a las propiedades anidadas
const user = {
	name: "Jacques Gluke",
	tag: "jgluke",
	location: {
	   country: "Jamaica",
	   city: "Ocho Rios",
	 },
	hobbies: ["swiming", "music", "sci-fi"],
};


console.log(user);
console.log(user.name);
console.log(user.location.city);
console.log(user.hobbies[1]);

user.age = 28;

console.log(user);


//Referencia a las propiedades mediante llaves
/*
La segunda forma de acceder a una propiedad de un objeto es con la sintaxis objeto["nombre de la propiedad"]. Esto es similar al acceso a un elemento de un array, con la diferencia de que los corchetes no contienen el índice del elemento, sino el nombre de la propiedad en forma de cadena.

La sintaxis de «corchetes» se utiliza con mucha menos frecuencia cuando el nombre de la propiedad no se conoce de antemano o se almacena en una variable, por ejemplo, como valor de un parámetro de una función.

El valor de la propiedad con ese nombre será devuelto en lugar de la referencia.
Si no hay ninguna propiedad con ese nombre en el objeto undefined.
*/
const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

console.log(book["title"]);
console.log(book.price);
console.log(book["price"]);

const bookTitle = book["title"];
console.log(bookTitle);

const otherTitle = book.title;
console.log(otherTitle);

book["isPublic"] = false;

console.log(book);

//Propiedades breves

const name = "Jorge Morales";
const age = 36;

const userGoit = {
	name,
	age,
};

console.log(userGoit);
//Propiedades contabilizables
//La sintaxis de las propiedades computadas ayuda a evitar código innecesario y en algunos casos a simplificarlo. El valor de una propiedad computada puede ser cualquier expresión válida.

const propName = "OtherName"	

const otherUser = {
	age,
	[propName]: name,
};



const text = "Hola";

//Métodos de los objetos
/*
Hasta ahora sólo hemos considerado los objetos como almacenes de datos relacionados, por ejemplo, información de libros, etc. Los objetos de almacenamiento suelen estar en un array de los mismos objetos, que es una colección del mismo tipo de elementos.

Los objetos pueden almacenar no sólo datos, sino también funciones para operar con esos datos, siendo estos métodos. Si el valor de una propiedad es una función, esta propiedad se llama método del objeto.
*/
const bookShelf = {
	books: ["The Last Kingdom", "Dream Guardian"],
	// Este es un método del objeto (función)
	getBooks(){
		 console.log("Este método devolverá todos los libros a la propiedad books");
		 //Acceso a las propiedades de los objetos en los métodos
		 /*
		 Los métodos se utilizan para manipular y cambiar las propiedades de los objetos. Para acceder a un objeto, un método no utiliza un nombre de variable, por ejemplo bookShelf, sino la palabra clave this en contexto. El valor de this será el objeto anterior al point, es decir, el objeto que llamó a este método, en nuestro caso es una referencia al objeto. bookShelf.
		 */
		 //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this
		 return this.books;
	},
	addBooks(bookName){
		 console.log("Este método agregará un nuevo libro a la propiedad books");
		 this.books.push(bookName);
		 return "Carga exitosa";
	},

};

console.log(bookShelf);
console.log(bookShelf.books);
console.log(bookShelf.getBooks());
console.log(bookShelf.addBooks("Harry Potter"));
console.log(bookShelf.getBooks());


const caculator = {
	sum(x,y){
		let result = x + y;
		return result;
	},
	div(x,y){
		return x / y;
	},
	rest(x,y){
		return x - y;
	},
	mult(x,y){
		return x * y;
	},
};

console.log(caculator);
console.log(caculator.sum(5,5));
console.log(caculator.div(5,5));
console.log(caculator.rest(5,5));
console.log(caculator.mult(5,5));

//Iterando sobre el objeto
//Ciclo for...in

//Para enumerar los objetos se utiliza un ciclo especial for...in, en donde se enumeran las claves del objeto object.
/*
for (key in object){

}

- Iterar sobre el objeto Book

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};
*/
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in
for (const key in book){
	//console.log(key);
	//console.log(book[key]);
	console.log(`La llave: ${key} contiene el valor: ${book[key]}`);
}
/*
El operador in, que se utiliza en el ciclo for...in, no distingue entre las propiedades nativas y no nativas de los objetos. Esta peculiaridad se interpone porque siempre queremos fijarnos sólo en las propiedades intrínsecas. Para saber si un objeto tiene una propiedad propia o no, utilizamos el método hasOwnProperty(key), que devuelve true o false.
*/

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
console.log(book.hasOwnProperty("price"));
console.log(book.hasOwnProperty("rating"));

book.price = 200;


if(book.hasOwnProperty("price")){
	for(const key in book){
		console.log(`La llave: ${key} contiene el valor: ${book[key]}`);
	}
}else{
		console.log("El objeto necesita de un precio para iterar sus valores")
	}

//Método Object.keys()
/*La clase incorporada Object tiene varios métodos útiles para trabajar con objetos. La primera es Object.keys(obj), que acepta el objeto y devuelve una matriz de claves para sus propias propiedades. Si el objeto no tiene propiedades, el método devolverá un array vacío.
*/
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
console.log(Object.keys(book));

//Método Object.values()
/*Si el método Object.keys(obj) devuelve un array de claves para las propiedades propias del objeto, entonces el método Object.values(obj) devuelve un array de valores para sus propias propiedades. Si el objeto no tiene propiedades, el método Object.values(obj) devolverá un array vacío.
*/
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values
console.log(Object.values(book));

//Método Object.entries()

const entries = Object.entries(book);

console.log(entries[0]);
console.log(entries[0][0]);
console.log(entries);
console.log(entries[2][1][1]);

//Matriz de objetos
//Para un desarrollador es habitual manipular una matriz de objetos del mismo tipo. Esto significa que se garantiza que todos los objetos de la matriz tienen el mismo conjunto de propiedades, pero con valores diferentes.

const books = [
	{ 
	title: "The Last Kingdom",
	author: "Bernard Cornwell",
	rating: 8.38,
	},
	{ 
	title: "En la orilla de aguas tranquilas",
	author: "Robert Sheckley",
	rating: 8.51,
	},
	{
	title: "El sueño de un hombre divertido",
	author: "Fiódor Dostoyevski",
	rating: 7.75,
	},
];

console.log(books[1]);

//El ciclo estándar for...of se utiliza para probar una matriz de este tipo. Los valores de las propiedades de cada objeto se pueden obtener utilizando la sintaxis «a través de un punto», ya que en cada objeto el conjunto de propiedades y sus nombres serán los mismos, sólo los valores son los que difieren.

for (const book of books){
	console.log(book.title);
	console.log(book.author);
	console.log(book.rating);
}

const bookNames = [];

for (const book of books){
	bookNames.push(book["title"]);
}

console.log(bookNames);

let totalRating = 0;

for (const book of books){
	totalRating += book["rating"];
}
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating);



























