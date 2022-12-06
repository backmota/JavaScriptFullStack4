
class User{
//Propiedades Estaticas
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
	
	name;
//Variables Privadas
	#email;
	#role;
//Constructor
	constructor({name, email, role}){
		this.name = name;
		this.#email = email;
		this.#role = role;
		User.#takenEmails.push(email);
	}

//Métodos Getter y Setter
	get email(){
		return console.log(this.#email);
	}
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

















