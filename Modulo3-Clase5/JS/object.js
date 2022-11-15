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

console.log(user);
console.log(user.location);
console.log(user.location.country);

user.name = "David Medina";
console.log(user);
user.tag = "DMedina";
console.log(user);

user.age = 28;
console.log(user);

let myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

console.log(myCar);
myCar = 5;
console.log(myCar);




