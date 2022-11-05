//Los operadores lógicos se utilizan para comprobar condiciones con múltiples expresiones, por ejemplo en operaciones de comparación.
/*
Conversión de tipos
En las operaciones lógicas los tipos de operandos se convierten en true o false. La conversión tiene lugar si se detecta un operador lógico en el código.

Truthy y Falsy - Términos que se utilizan para esos valores, que, en una operación lógica, se reduce true o false, aunque originalmente no eran el tipo de dato lógico.
*/

const age = 20;
//Lógica «Y»
//El operador && convierte todos los operandos en booleanos y devuelve el valor de uno de ellos. El operando izquierdo si se puede convertir en false, y el operando derecho en los demás casos.
console.log(age > 10 && age < 30);// true && true -> true
console.log(age > 10 && age < 15);

//Lógica «O»
/*
El operador || convierte todos los operandos en el tipo de dato lógico y devuelve el valor de uno de ellos. El operando izquierdo si se puede convertir en true, y el operando derecho en los demás casos.
*/

console.log(age > 10 || age < 15);
console.log(age > 10 || age < 30);
console.log(age >= 20 || age > 25);

//Lógica «NO»
/*Todos los operadores que hemos considerado hasta ahora eran binarios - contienen dos operandos, izquierda y derecha. El operador lógico "NO" es un operador unario - que realiza una operación sobre un operando de la derecha.
*/

console.log(!true);
console.log(!false); 


let isTrue = (age >= 20 || age > 25);
console.log(isTrue);
console.log(!isTrue);


