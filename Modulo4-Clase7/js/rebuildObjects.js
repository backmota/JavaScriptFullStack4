//Desestructuración de objetos
//Al desarrollar programas, los datos suelen venir en forma de matrices y objetos cuyos valores deben escribirse en variables locales. Con el fin de Para hacerlo de la forma más sencilla posible, existe una norma moderna para la sintaxis de la asignación destructiva.

//Desestructuración de objetos
//Los datos complejos se representan siempre mediante un objeto. Los múltiples accesos a las propiedades de los objetos contaminan el código visualmente.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const accessType = book.isPublic ? "publico" : "privado";

console.log(accessType);
const message = `Libro ${book.title} autor ${book.author} con la valoración ${book.rating} se encuentra en ${accessType} acceso.`;

console.log(message);

//La desestructuración permite «desempaquetar» los valores de las propiedades de un objeto en variables locales. Esto hace que el código en el punto de uso sea menos «ruidoso».

const {
	title, 
	author,
	genres,
	isPublic,
	rating,
	coverImage =  "https://via.placeholder.com/640/480",
} = book;

console.log("Portada del Libro",coverImage);

const textMessage = `Libro ${title} autor ${author} con la valoración ${rating} se encuentra en ${accessType} acceso.`;

console.log(textMessage);
console.log(genres);


//Cambio del nombre de la variable
/*Al desestructurar, se puede cambiar el nombre de la variable en la que se descompone el valor de la propiedad. En primer lugar, escribimos el nombre de la propiedad de la que queremos recuperar el valor, seguido de dos puntos y el nombre de la variable en la que se va a colocar el valor de la propiedad.
*/

const firstBook = {
  titleBook: "The Last Kingdom Nuevo Libro",
  CoverImageOne:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
  price: 200,
};

const secondBook = {
	titleBookTwo: "The Last Kingdom Segunda Parte",
};

const {
	titleBook: titleBookTwo,
	CoverImageOne: NewCover = "https://via.placeholder.com/640/480",
	price
} = firstBook;

console.log(titleBookTwo);
console.log(NewCover);
console.log(price);
console.log(firstBook);

//Desestructuración en ciclos

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "En las orillas de las aguas tranquilas",
    author: "Robert Sheckley",
    rating: 8.51,
  },
];
/*
for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}
*/
for (const book of books) {
	const { title, author, rating } = book;

	console.log(title);
	console.log(author);
	console.log(rating);
}


//Desestructuración profunda
//Para desestructurar las propiedades de los objetos anidados se utilizan los mismos principios que en los tres ejercicios anteriores.
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};


const {
	name: userName,
	tag: userTag,
	stats: {
		followers:userFollowers, views:userViews, likes:userLikes = 0
	},
} = user;


console.log(userName);
console.log(userTag);
console.log(userFollowers);
console.log(userViews);
console.log(userLikes);