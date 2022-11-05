//Ramificación
/*
La bifurcación se utiliza para ejecutar un código diferente dependiendo de la condición. El principio de funcionamiento es sencillo: el resultado de una condición se convierte en el tipo de dato lógico true o false, entonces el flujo del programa se dirige a una u otra rama.
*/

let heroAttack = 10;
let dragonLife = 20;

//Instrucciones if
//Los datos de entrada que se dan a un tipo de dato lógico se llama condición. La condición se coloca después del operador if entre paréntesis. Si la condición se convierte en true, entonces se ejecuta el código entre llaves del cuerpo del if.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else

if (dragonLife > 0) {
	console.log(`La vida del dragon es: ${dragonLife}`);
	console.log("El dragon Vive");
}else{
	console.log(`La vida del dragon es: ${dragonLife}`);
	console.log("El dragon murio");
}

dragonLife -= heroAttack;

if (dragonLife > 0) {
	console.log(`La vida del dragon es: ${dragonLife}`);
	console.log("El dragon Vive");
}else{
	console.log(`La vida del dragon es: ${dragonLife}`);
	console.log("El dragon murio");
}

dragonLife -= heroAttack;

if (dragonLife > 0) {
	console.log(`La vida del dragon es: ${dragonLife}`);
	console.log("El dragon Vive");
}else{
	console.log(`La vida del dragon es: ${dragonLife}`);
	console.log("El dragon murio");
}

//Instrucciones else...if
/*
La construcción if...else puede comprobar y reaccionar en función de si se cumple o no una sola condición

El bloque else...if permite añadir otra sentencia if con una condición después de else. Al final de la cadena puede haber un bloque clásico else, que se ejecutará sólo si ninguna de las condiciones lleva true.
*/

let cost;
const subscription = "premium";

if(subscription === "free"){
	cost = 0;
	console.log(`El costo de tu subscripcion es de $${cost}`);
}else if (subscription === "pro"){
	cost = 100;
	console.log(`El costo de tu subscripcion es de $${cost}`);
}else if (subscription === "premium"){
	cost = 500;
	console.log(`El costo de tu subscripcion es de $${cost}`);
}else{
	console.log("Tu subscripcion no es valida");
}





