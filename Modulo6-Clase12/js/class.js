class Car{

	static EngineMotor = {
		V8: "Todo Terreno",
		Standard: "Familiar",
		Deluxe: "Sport",
	};

	model;
	#color;
	#motor

	constructor({model, color, motor}){
		this.model = model;
		this.#color = color;
		this.#motor = motor
	}

	getEngine(){
		return console.log(`El carro modelo: ${this.model} color: ${this.#color}, fue encendido`);
	}

	getColor(){
		return console.log(this.#color);
	}

	get color(){
		return console.log(this.#color);
	}

	set color(newColor){
		this.#color = newColor;
	}

	get motor(){
		return console.log(this.#motor);
	}

	set motor(newMotor){
		this.#motor = newMotor;
	}
}

const corolla = new Car({
	model: "Toyota Corolla",
	color: "Red",
	motor: Car.EngineMotor.Standard,
});


console.log(corolla);
//Getter
corolla.color;
corolla.color = "Blue";
//Método

corolla.getColor();

corolla.motor;

corolla.motor = Car.EngineMotor.Deluxe;
corolla.motor;

corolla.getEngine();

//Herencia de Clases


class Truck extends Car{
	#charge;

	constructor({charge,model, color, motor}){
		super(model);
		this.#charge = charge;
	}

	get charge(){
		return this.#charge;
	}
}

const lobo = new Truck({
	charge: "1 Ton",
	model: "Ford Lobo",
	color: "Black",
	motor: Car.EngineMotor.V8,
});

console.log(lobo);
console.log(lobo.charge);

////

class User {
	#email;

	  constructor(email) {
	    this.#email = email;
	  }

	  get email() {
	    return this.#email;
	  }

	  set email(newEmail) {
	    this.#email = newEmail;
	  }	
}

class ContentEditor extends User {
	constructor({email, posts}){
		super(email);
		this.posts = posts;
	}
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
console.log(editor);
console.log(editor.email);



















