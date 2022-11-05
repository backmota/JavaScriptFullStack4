//Línea - Es un conjunto indexado de cero o más caracteres encerrados entre comillas simples o dobles.

const username = "Mango";
console.log(username);

//Concatenación de cadenas
/*
Si se aplica el operador + a una cadena y a cualquier otro tipo de datos, el resultado de la operación de "suma" es una cadena. Esta operación se llama concatenación, o suma de cadenas.

Durante la concatenación, cualquier tipo de datos se reduce a una cadena y se concatena con una cadena, pero hay una peculiaridad: la secuencia de operandos.

La secuencia de las operaciones es importante, la conversión de tipos sólo se produce en el momento de la operación de suma con una cadena, antes se aplican las reglas habituales de las matemáticas.
*/

const message = "Mango " + "is" + " happy";
console.log(message);

let a = "hello";
let b = ","
//Cadenas de Plantillas
/*Las cadenas de plantillas son una alternativa a la concatenación con una sintaxis más conveniente. Una cadena de plantilla se encierra entre comillas invertidas (barra) en lugar de comillas dobles o simples y puede contener marcadores de posición, que se indican con un signo de dólar y llaves - `${expresión}'
*/
console.log(`${a} ${b} ${username}`);

let isANumber = 1;
let isAString = "2";

console.log(isANumber + isAString);

console.log(1 + "2");
console.log(1 + "2" + 4);
console.log(1 + 2 + "4");
console.log("5" + 1 + 2 + "4");

const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room is ${roomNumber}!`;
console.log(greeting);

const otherMessage = "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log(greeting); 


//Métodos toLowerCase() y toUpperCase()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
const messageWelcome = "Welcome to Bahamas!";
console.log(messageWelcome);
console.log(messageWelcome.toLowerCase());
console.log(messageWelcome.toUpperCase());

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput);
console.log(userInput === BRAND_NAME); 
console.log(normalizedToUpperCaseInput);
console.log(normalizedToUpperCaseInput === BRAND_NAME);


//Método indexOf()
//Devuelve la posición (índice) en la que se encuentra la primera subcadena coincidente, o -1 si es que no se encuentra nada.
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
//const messageWelcome = "Welcome to Bahamas!";

console.log(messageWelcome.indexOf("to"));
console.log(messageWelcome.indexOf("e"));
console.log(message.indexOf("hello"));

//Método includes()
//Compruebe si la subcadena es parte de la cadena y devuelve un tipo de dato lógico - true si lo es y false en caso contrario. El caso de los caracteres en la cadena y la subcadena importa, porque por ejemplo la letra "a" no es igual a la letra "A".
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
const productName = "Reparación de Droid";

console.log(productName.includes("н")); 
console.log(productName.includes("Н"));
console.log(productName.includes("droid"));
console.log(productName.includes("Droid"));
console.log(productName.includes("Reparación"));
console.log(productName.includes("reparación"));

//Método endsWith()
//Determina si la cadena termina con los caracteres (subcadena) especificados entre paréntesis, devolviendo true o fals
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
const jsFileName = "script.js";

console.log(jsFileName.endsWith(".js"));

const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js"));

//Métodos replace() y replaceAll()
//Devuelve una nueva cadena en la que la primera (replace) o todas las subcadenas coincidentes (replaceAll) han sido sustituidas por el valor especificado.
//const jsFileName = "script.js";

const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log(minifiedJsFileName);

const cssFileNames = "styles.css, about.css, portfolio.css , portfolio.js";
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log(minifiedCssFileNames);

