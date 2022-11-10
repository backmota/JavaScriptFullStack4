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

//Asignación por valor

let a = 5;
let b = a;

console.log(a);
console.log(b);

a = 10;

console.log(a);
console.log(b);

//Asignación por referencia

const names = ["Mango"];

const backUpNames = names;

console.log(names);
console.log(backUpNames);
//El método push() añade uno o más elementos al final del array, sin tener que especificar los índices de los elementos a añadir. Devuelve la longitud del array después de añadir los elementos.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push
names.push("Poly");

console.log(names);
console.log(backUpNames);

//El método pop() elimina el último elemento del final del array y devuelve el elemento eliminado. Si el array está vacío, el método devuelve undefined.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
names.pop();

console.log(names);
console.log(backUpNames);

names.push("Ajax");

console.log(names);
console.log(backUpNames);


//Métodos Array
//Método split(delimiter) se convierte una cadena en un array «dividiendola» con el delimitador delimiter. Si el separador es una cadena vacía, será una array de caracteres individuales. El delimitador puede ser uno o varios caracteres.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split

const name = "Mango";
console.log(name.split(""));

const email = "jj.mota.t@me.com";
const emailDiv = email.split("@");
console.log(emailDiv);
const userName = emailDiv[0];
const domain = emailDiv[1];

console.log(`El usuario es ${userName} y su dominio es: ${domain}`);

//El método Array join(delimiter) une los elementos del array en una cadena. En una cadena los elementos estarán separados por un carácter o un grupo de caracteres especificados en delimiter. Es decir, es la inversa del método de cadena split(delimiter).
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join

const fixEmail = emailDiv.join("@");
console.log(fixEmail);

const words = ["JavaScript", "es", "insteresante"];
console.log(words.join(""));
console.log(words.join(" "));
console.log(words.join("_"));

//Método indexOf()
//indexOf(value) devuelve el primer índice, en el que el elemento con valor se encontró el value en el array, o el número -1 si no existe tal elemento. Utilice indexOf cuando quiera obtener el índice directamente elemento.
/*
const clients = [];

clients[0] = "Mango";
clients[5] = "Poly";
clients[4] = "otro usuario";
clients[3] = "Ajax";
clients[1] = true;
clients[2] = false;
*/

console.log("Poly se encontro en la index",clients.indexOf("Poly"));
console.log("Poly se encontro en la index",clients.indexOf("Apple"));

if(clients.indexOf("Monkong") >= 0){
	console.log("Se encontre en la base de datos");
}else{
	console.log("No se encontre en la base de datos");
}


//Método includes()
//includes(value) comprueba si hay un elemento con valor value en el array y devuelve true o false respectivamente. El ámbito de aplicación de este método se reduce a las situaciones en las que es necesario comprobar si un elemento está en el array y su posición (índice) no es importante.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
/*
const clients = [];

clients[0] = "Mango";
clients[5] = "Poly";
clients[4] = "otro usuario";
clients[3] = "Ajax";
clients[1] = true;
clients[2] = false;
*/

console.log(clients.includes("Poly"));

if(clients.includes("Monkong")){
	console.log("Se encontre en la base de datos");
}else{
	console.log("No se encontre en la base de datos");
}

//Método slice()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//slice(begin, end) devuelve un nuevo array, que contiene una copia de una parte del array original sin modificarlo. La copia se realiza desde begin y hasta, pero sin incluir, end, índices de elementos del array original.

const newClients = ["Mango", "Ajax", "Poly", "Kiwi"];

console.log(newClients.slice());

//Si no se especifica end, se copiará desde start hasta el final del array original.
console.log(newClients.slice(2));
console.log(newClients.slice(1));
//arr.slice([inicio [, fin]])
console.log(newClients.slice(0,3));
//Si el valor de start es negativo y no se especifica end, se copiarán los últimos elementos start.
console.log(newClients.slice(-3));
console.log(newClients.slice(-2));

const sliceNewClients = newClients.slice(-2);

console.log(sliceNewClients);

//Método splice()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//Navaja suiza para trabajar con matrices si es necesario modificar el array original. Borre, añada y sustituya los elementos en un lugar arbitrario del array.

//Eliminación
//Para eliminar elementos de un array, se usan dos argumentos

const scores = [1, 2, 3, 4, 5];

const deletedScores = scores.splice(0,3);

console.log(scores);
console.log(deletedScores);

//Adición
//Para añadir uno o más elementos a un array, se deben pasar tres o más argumentos, siendo el segundo argumento igual a cero.
/*
El argumento position especifica la posición inicial en el array donde se insertarán los nuevos elementos
El segundo argumento es cero, indica al método que no elimine elementos en el punto donde se añaden nuevos elementos.
El tercer, cuarto y todos los argumentos posteriores son nuevos elementos que se añaden al array.
Por ejemplo, tenemos un array con nombres de colores como cadenas. Añadamos un nuevo color antes del elemento con índice 2.
*/
const colors = ["red", "green", "blue"];
colors.splice(2, 0, "purple");
console.log(colors);

//Sustitución
//Reemplazar es una operación de adición que elimina elementos en lugar de añadir otros nuevos. Requiere que se pasen al menos tres argumentos. El número de elementos a eliminar y añadir puede no ser el mismo.

const lenguajes = ["C", "C++", "Java", "JavaScript"];
lenguajes.splice(1,1, "Python");
console.log(lenguajes);

lenguajes.splice(0,3,"C#", "Swift", "Go");
console.log(lenguajes);

//Método concat()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const othersClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(othersClients);
console.log(allClientsWithOldFirst);

const allClientsWithOtherClientsFirst = othersClients.concat(oldClients);
console.log(allClientsWithOtherClientsFirst);

const newScores = deletedScores.concat(scores);

console.log(newScores);


















