//Instrucciones switch
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch
/*
En algunos casos, el inconveniente de leer complejas bifurcaciones if...else puede evitarse utilizando una sintaxis más plana para la instrucción de bifurcación switch.

El ámbito de aplicación de switch se limita a tareas con una pregunta general (qué comparar) y muchas opciones de respuesta (con qué comparar).

Su sintaxis consiste en un bloque switch(value) lo que se va a comparar y un conjunto de casos individuales case value lo que se va a comparar. Para la comparación se utiliza el operador de igualdad estricta ===. Es decir, no se puede comparar sobre más o menos, sólo sobre la igualdad.

switch (valor){
	case valor:
		instrucción;
		break;
	case valor:
		instrucción;
		break;
	case valor:
		instrucción;
		break;
	default:
		instrucción;		
}
*/

let cost;
const subscription = "free";

switch (subscription){
	case "free":
		cost = 0;
		console.log(`El costo de tu servicio es ${cost}`);
		break;
	case "pro":
		cost = 100;
		console.log(`El costo de tu servicio es ${cost}`);
		break;
	case "premium":
		cost = 500;
		console.log(`El costo de tu servicio es ${cost}`);
		break;
	default:
		console.log("Dato invalido");
}







