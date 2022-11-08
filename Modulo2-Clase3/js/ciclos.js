/*
Una tarea de programación común es realizar la misma acción muchas veces. Por ejemplo, para sacar a los clientes de la lista uno por uno, o para listar los importes de los salarios y ejecutar el mismo código para cada uno de ellos. Es para tales fines de repetición múltiple de la misma sección de código que se utilizan los ciclos.

Ciclo - Es la estructura de control en los lenguajes de programación de alto nivel destinada a organizar la ejecución repetida de un conjunto de instrucciones.
Cuerpo del ciclo - Es una secuencia de instrucciones diseñada para ser ejecutada repetidamente.
Iteración - Es la ejecución única del cuerpo del ciclo.
Condición de salida - Es la expresión que determina si la iteración se ejecutará de nuevo o el ciclo terminará.
Medidor - Es una variable que almacena el número de iteración actual. Un ciclo no contiene necesariamente un contador, y no tiene que ser uno solo; la condición de salida del ciclo puede depender de varias variables modificadas en el ciclo.

Ciclo while — Es un ciclo se ejecuta mientras alguna condición se especifica antes de que su inicio sea verdadero. Esta condición se comprueba antes de que se ejecute el cuerpo del mismo, por lo que es posible que el cuerpo no se ejecute en absoluto si la condición es falsa desde el principio.


//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/while

while (condition){
	//código, cuerpo del ciclo (statement)
}

La construcción while crea un ciclo que ejecuta un bloque de código, mientras la condición de comprobación se evalúa como true.

condition, significa que la condición se calcula antes de cada iteración del ciclo.
Si la condition se evalua como true, el operador while realiza una statement.
Si la condition se evalua como false, el ciclo se interrumpe y el script continúa ejecutando instrucciones después del ciclo while

*/

let counter = 0;

while (counter <= 10){
	console.log("counter",counter);
	counter += 1;
}

let clientCounter = 25;
const maxClients = 25;

while (clientCounter < maxClients){
	console.log(clientCounter);
	clientCounter += 1;
}

if(clientCounter === 25){
	console.log("La sala se encuentra llena");
}else{
	console.log("la sala no se lleno");
}

/*
do{
	console.log("entro al Do While por lo menos una ocasión");
}while(clientCounter < maxClients);
*/

//Do While
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/do...while

/*
do{

}while(condición);

La construcción do...while crea un ciclo que ejecuta un bloque de código hasta que la condition no lo devuelva false.

A diferencia del ciclo while, el ciclo do...while siempre ejecuta statement al menos una vez antes de evaluar la condition.

Dentro del ciclo, necesitamos hacer cambios en alguna variable para asegurarnos de que la expresión es false después de las iteraciones. De lo contrario, se producirá un ciclo infinito.

El diagrama de bloques ilustra el ciclo do-while

*/


let password = "";

/*	do{
		password = prompt("Introduzca una contraseña de más de 4 caracteres", "");
	}while(password.length < 5);
*/

//Ciclo for
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for

/*
Ciclo for - Es un ciclo, en el que alguna variable cambia su valor desde el valor inicial dado hasta el final en pasos y para cada valor de esta variable el cuerpo del ciclo se ejecuta una vez.

En la mayoría de los lenguajes de programación procedimental se implementa mediante una construcción for, en la que se especifica el contador, el número necesario de iteraciones y el paso en el que se modifica el contador.


for (valor de inicio; condición; post expresión){

}


Ejecución del algoritmo Ciclo for:

Inicialización (initialization) - Se ejecuta una vez antes del inicio del ciclo. Permite crear una variable de contador y especificar su valor inicial.
Condición(condition) - Es evaluada antes de cada iteración (repetición) del ciclo. El cuerpo del ciclo se ejecuta sólo cuando la expresión se evalúa como true. El ciclo termina si el valor es false.
Cuerpo (statements) - Es el conjunto de instrucciones a ejecutar en cada repetición. Se ejecuta si la expresión de la condición se convierte en true.
Post-expresión (post-expression) - Se ejecuta al final de cada repetición del ciclo, antes de comprobar la condición. Se utiliza para actualizar el contador de variables.
Los contadores de variables, por tradición, son las letras i, j y k.
*/

for (let i = 0; i <= 20; i += 5){
	console.log(i);
}

const maxTickets = 25;
let sumTickets = 0;

for (let i = 0; i < maxTickets; i += 1){
	sumTickets += 1
	console.log(`se vendio el ticket ${sumTickets}`);
}

//Operador break

const findNumber = 5;

for (let i = 0; i < 50; i += 1){

	if (i === findNumber) {
		console.log(`Encontramos el número ${findNumber} , interrumpiremos el ciclo`);
		break;
	}

	console.log(`Número de Ciclo ${i}`);
}

//Operador continue
/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/continue
No interrumpe todo el ciclo, sino sólo la ejecución de la iteración actual. Se utiliza cuando está claro que no hay nada más que hacer en la iteración actual del ciclo o nada en absoluto y es el momento de pasar a la siguiente iteración.

Usamos un ciclo para dar salida sólo a los números impares. En caso de que i ejecute continue, se detiene la ejecución del cuerpo y se pasa el control a la siguiente iteración.
*/

const number = 10;

for (let i = 0; i < number; i += 1) {
	if(i % 2 === 0){
		continue;
	}

	console.log("Números impares i", i);
}









