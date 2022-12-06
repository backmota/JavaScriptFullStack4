//Clases

/* Nombre de la Clase{
	- Propiedades Estaticas
	- Métodos Estaticos

	- Propiedades Publicas
	- Propiedades Privadas

	- Constructor

	- Métodos
	- Métodos Getter y Setters
}


/*
La sintaxis literal del objeto permite crear un único objeto. Pero a menudo es necesario crear muchos objetos del mismo tipo con el mismo conjunto de propiedades, pero con diferentes valores y métodos para interactuar con ellos. Todo esto debe hacerse de forma dinámica, en tiempo de ejecución. Para ello, se utilizan clases, una sintaxis especial de declaración de funciones para crear objetos.

Declaración de clase

La declaración de la clase comienza con la palabra clave class seguida del nombre de la clase y las llaves, en este caso su cuerpo. Las clases suelen nombrarse con una letra mayúscula, y el propio nombre refleja el tipo de objeto que se crea (sustantivo).


class User {
	// Cuerpo de la clase
}

const cristian = new User();

console.log(cristian);

const jennifer = new User();

console.log("La clase de jennifer es:", jennifer);
*/

//Constructor de clase
//La clase tiene un método constructor para inicializar una instancia. Si no se declara, se crea un constructor por defecto, una función vacía que no modifica la instancia.

class User{
//Propiedades estáticas
/*
Además de las propiedades públicas y privadas de una instancia futura, una clase puede declarar sus propias propiedades que sólo están disponibles para la clase pero no para sus instancias: las propiedades (static). Estas son útiles para almacenar información relacionada con la propia clase.

Añadiremos a la clase user la propiedad privada role, que define los derechos, por ejemplo, administrador, editor, usuario, etc. Los posibles roles de usuario los almacenaremos como una propiedad estática Roles son un objeto de propiedad.

Las propiedades estáticas se declaran en el cuerpo de la clase. Se añade la palabra clave static antes del nombre de la propiedad.
*/
	static #takenEmails = [];

	static Roles = {
		ADMIN: "admin",
		EDITOR: "editor"
,	}	

//Métodos estáticos
	
	static isEmailTaken(email){
		return User.#takenEmails.includes(email);
	}


//Variables
	//Declaración opcional de propiedades públicas
	name;
	// Declaración obligatoria de propiedades privadas
	/*Encapsulación es un concepto que permite ocultar los detalles internos de una clase. El usuario de una clase sólo debe tener acceso a la interfaz pública: el conjunto de propiedades y métodos públicos de la clase.

	En las clases, la encapsulación se implementa mediante propiedades privadas, a las que sólo se puede acceder desde dentro de la clase.

	Digamos que el correo electrónico de un usuario no debe ser accesible directamente desde el exterior, es decir, debe ser privado. Añadiendo # al nombre de la propiedad, la hacemos privada. La declaración de una propiedad privada antes de la inicialización en el constructor es obligatoria.
	*/
	#email;
	#role;

//Objeto de los parámetros
//Una clase puede aceptar un gran número de entradas para las propiedades del futuro objeto. Por lo tanto, también es posible aplicarles el patrón de «objeto de parámetro», pasar un único objeto con propiedades lógicamente nombradas, en lugar de un conjunto de argumentos no relacionados.
	constructor({name, email, role}){
		this.name = name;
		this.#email = email;
		this.#role = role;
		User.#takenEmails.push(email);
	}

//Métodos de clase
//Para manejar las propiedades de la futura instancia, se utilizan los métodos de la clase, funciones que estarán disponibles para la instancia en su prototipo.

/*	
		getEmail(){
			return console.log(this.#email);
		}

		changeEmail(newEmail){
			this.#email = newEmail;
		}
*/
	//Getter y Setters
	/*
	Los Getters y Setters son una sintaxis más corta para declarar métodos que interactúan con las propiedades. Un getter y un setter imitan una propiedad pública normal de la clase, pero permiten cambiar otras propiedades de una manera más conveniente. Un getter se ejecuta cuando se intenta obtener el valor de una propiedad, mientras que un setter se ejecuta cuando se intenta cambiarla.

	Los Getters y Setters son buenos para operaciones simples de lectura y cambio de valores de propiedades, especialmente para propiedades privadas como su interfaz pública. No funcionarán con las propiedades que almacenan una matriz o un objeto.
	*/
	//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__
	get email(){
		return console.log(this.#email);
	}
	//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/set
	set email(newEmail){
		this.#email = newEmail;
		User.#takenEmails.push(newEmail);
	}
	
	get role(){
		return  console.log(`El rol de ${this.name} es ${this.#role}.`);
	}
	

	set role(newRole){
		this.#role = newRole;
	}

}

const jennifer = new User({
	name:"Jennifer",
	email:"jennifer@goit.com",
	role: User.Roles.ADMIN,
});

const cristian = new User({
	email:"cristian@goit.com",
	name:"cristian",
});

console.log("Objeto Jennifer: ", jennifer);

console.log("Objeto Cristian: ", cristian);

//jennifer.getEmail();
//jennifer.changeEmail("jennifer2022@goit.com");
//jennifer.getEmail();

cristian.email;

cristian.email = "newCristian@goit.com";
cristian.email;
console.log(cristian);

jennifer.role;

console.log(User.isEmailTaken("cristian@goit.com"));
console.log(User.isEmailTaken("newCristian@goit.com"));

let NewUserEmail = "daniel@goit.com";

if(!User.isEmailTaken(NewUserEmail)){
	console.log("Este correo ya se uso anteriormente");
}
	const daniel = new User({
	name:"Daniel",
	email:"daniel@goit.com",
	role: User.Roles.EDITOR,
});

	console.log(daniel);

















