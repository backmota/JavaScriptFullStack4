//const clients = [];
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

const clients = [];

clients[0] = "Mango";
clients[5] = "Poly";
clients[4] = "otro usuario";
clients[3] = "Ajax";
clients[1] = true;
clients[2] = false;

console.log(clients[0][2][2]);

console.log(clients.length-1);
//El ciclo for puede utilizarse para iterar sobre un array, es decir, «revisar» elemento por elemento.
for (let i=0; i < clients.length; i += 1){
	console.log(clients[i]);
}

//Para acceder a los elementos, se utiliza la sintaxis de corchetes array[index], donde index es el valor del contador del ciclo desde 0 hasta el último índice array, que es menor pero no igual a su longitud.


//Ciclo for...of
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of

for (const client of clients){
	console.log(client);
}

const string = "JavaScript";

for (const character of string){
	console.log(character);
}

//Operadores break y continue

const clientNameFind = "Ajax";
let message = "¡El cliente con este nombre no está en la base de datos!";

for (const client of clients){
	if(client === clientNameFind){
		message = "¡Hay un cliente con este nombre en la base de datos!";
		break;
	}
}

console.log(message);

//Usemos un ciclo para dar salida sólo a los números superiores a un determinado valor.
const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (const number of numbers){
	if (number < threshold) {
		continue;
	}

	console.log(`El número es superio a ${threshold}: ${number}`);
}





