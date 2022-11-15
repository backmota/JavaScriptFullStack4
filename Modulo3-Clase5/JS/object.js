//Los objetos permiten describir y agrupar las características de una entidad: un usuario, un libro, un producto en una tienda, cualquier cosa. Los objetos también se llaman diccionarios, es decir, contienen términos (propiedades) y sus definiciones (valores).
/*
Cuando se crea un objeto, se pueden añadir propiedades, cada una descrita por pares clave:valor. La clave también se llama nombre de la propiedad y siempre es una cadena. El valor de una propiedad puede ser de cualquier tipo: primitivas, arrays, objetos, booleanos, funciones, etc. Las propiedades están separadas por una coma.

Las reglas para nombrar las llaves son sencillas:

Si la clave va entre comillas, puede ser una cadena arbitraria.
Si no hay comillas, se aplican las restricciones: el nombre no tiene espacios, empieza por una letra o los caracteres _ y $.
*/
const book = {
	title: "The Last Kigndom",
	author: "Bernard Cornwell",
	genres: ["historical prose", "adventure"],
	isPublic: true,
	price: 200,
};

console.log(book);
console.log(`El precio del libro ${book.title} es ${book.price}`);
book.genres.push("real life");
console.log(book);

/*Propiedades anidadas
El valor de la propiedad puede ser otro objeto, para almacenar datos anidados y agrupados. Por ejemplo, las estadísticas de los usuarios de las redes sociales consisten en el número de seguidores, vistas y gustos, y lo más conveniente es almacenar estos datos como un objeto. Lo mismo con la ubicación, por separado el país y la ciudad.
*/

const user = {
	name: "Jacques Gluke",
	tag: "jgluke",
	location: {
		country: "Jamaica",
		city: "Ocho Rios",
	},
	stats:{
		followers: 5603,
		views: 4827,
		likes: 1308,
	},
};
/*Referencia a las propiedades a través de un punto

La primera forma de acceder a una propiedad de un objeto es con la sintaxis objeto.nombre_propiedad. La sintaxis «a través del punto» se utiliza en la mayoría de los casos y es apropiada cuando conocemos de antemano el nombre (clave) de la propiedad a la que queremos acceder.

El valor de la propiedad con ese nombre será devuelto en lugar de la referencia.
Si no hay ninguna propiedad con ese nombre en el objeto undefined.
*/

console.log(user);
console.log(user.location);
console.log(user.location.country);

user.name = "David Medina";
console.log(user);
user.tag = "DMedina";
console.log(user);

user.age = 28;
console.log(user);

delete user.age;
console.log(user);

let myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

console.log(myCar);
myCar = 5;
console.log(myCar);




