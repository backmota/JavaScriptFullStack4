//Funciones de red
//Función de efecto secundario es una función que en tiempo de ejecución puede cambiar o utilizar variables globales, cambiar el valor de argumentos de tipo referencia, realizar entrada y salida, etc.

const dirtyMultiply = (array, value) => {
	for (let i=0; i < array.length; i++){
		array[i] = array[i] * value;
	}
};

const numbers =  [1,2,3,4,5];
dirtyMultiply(numbers,3);

console.log(numbers); 

/*Función pura (pure function) es una función en donde el resultado depende únicamente de los valores de los argumentos pasados. Con los mismos argumentos siempre devuelve el mismo resultado y no tiene efectos secundarios, es decir, no cambia los valores de los argumentos.*/

const pureMultiply = (array, value) => {
	const newArray = [];
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	array.forEach(element => {
		newArray.push(element * value);
	});

	return newArray;
};

const doubleNumbers = pureMultiply(numbers, 2)

console.log(numbers);
console.log(pureMultiply(numbers, 2));
console.log(numbers);
console.log(doubleNumbers);

//Enumeración de métodos de array.
/*JavaScript tiene métodos de array de los lenguajes funcionales. La mayoría de ellos son puras funciones. Crean un nuevo array, lo llenan aplicando una función de devolución de llamada especificada al valor de cada elemento, y luego devuelven este nuevo array.

Todos los métodos de enumeración de arrays tienen una sintaxis similar. Array de origen array, llama al method y función callback como argumento del método.


array.method((item, index, array) =>  {

});

array.method(item => { });
*/

//Método map()
/*
Recorra la matriz original elemento por elemento.
No modifica el array original.
El resultado de la función callback se escribe en un nuevo array.
Devuelve un nuevo array de la misma longitud.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/

const planets = ["Tierra", "Marte", "Venus", "Jupiter"];

console.log(planets);

const planetsInUpperCase = planets.map((planet, index, originalArray) => {
	console.log(planet);
	console.log(index);
	console.log(originalArray);
	return planet.toUpperCase();;
});

console.log(planetsInUpperCase);

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());

console.log(planetsInLowerCase);


//Conjunto de objetos
//Ya sabemos que una tarea cotidiana es manipular un array de objetos. Por ejemplo, obtener un array de valores de propiedades de todos los objetos. Tenemos un array de estudiantes, y necesitamos obtener un array separada de sus nombres.

const students = [
	{ name: "Mango", score: 83 },
	{ name: "Poly", score: 59 },
	{ name: "Ajax", score: 37 },
	{ name: "Kiwi", score: 94 },
	{ name: "Houston", score: 64 },
	];

console.log(students);

const names = students.map(student => student.name);

console.log(names);
//Utilizando el método map() se puede enumerar un array de objetos y utilizar una función callback para devolver el valor de la propiedad de cada objeto.

//Método flatMap()
//El método flatMap(callback) es similar al método map(), pero se aplica en los casos en los que el resultado es un array multidimensional que necesita ser «suavizado».
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap

const studentsWithCourses = [
	{ name: "Mango", courses: ["matemáticas", "física"] },
	{ name: "Poly", courses: ["informática", "matemáticas"] },
	{ name: "Kiwi", courses: ["física", "biología"] },
	];

console.log("Cursos usando Map():",studentsWithCourses.map(student => student.courses));
console.log("Cursos usando FlatMap():",studentsWithCourses.flatMap(student => student.courses));

//Llama a una función de devolución de llamada para cada elemento del array original, y escribe el resultado en el nuevo array. La diferencia con map(), es que el nuevo array se «aplana» a una profundidad de uno (un anidamiento). Este array aplanado es el resultado de flatMap().

//Método filter()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
/*
No modifica el array original.
Recorre sobre el array original elemento por elemento.
Devuelve un nuevo array.
Añade al array devuelta los elementos que satisfacen la Función Callback.
Si callback devuelve true el elemento se añade al array de retorno.
Si callback devuelve false el elemento no se añade al array de retorno.
Si ningún elemento satisface la condición, se devuelve un array vacío.
*/

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);

console.log(positiveValues);

const neagativeValues = values.filter(value => value < 0);

console.log(neagativeValues);


//Filtrado de elementos singulares
/*
Con el método filter() se puede filtrar un array para que sólo queden los elementos únicos. Este método sólo funciona con una matriz de los valores primitivos, no objetos.

Volvamos al grupo de alumnos y al array de todas las asignaturas cursadas, que recuperamos con el método flatMap().

const studentsWithCourses = [
	{ name: "Mango", courses: ["matemáticas", "física"] },
	{ name: "Poly", courses: ["informática", "matemáticas"] },
	{ name: "Kiwi", courses: ["física", "biología"] },
	];
*/

const allCourses = studentsWithCourses.flatMap(student => student.courses);
console.log(allCourses);

const uniqueCourses = allCourses.filter((course, index, array) => {
	/*
	Para el elemento 'matemáticas' bajo el índice 0:

	indexOf() devolverá 0 porque está buscando la primera coincidencia.
	El valor del parámetro index será 0.
	Son iguales, por lo que es un elemento único.
	Para el elemento 'matemáticas' bajo el índice 3:

	indexOf() devolverá 0 porque está buscando la primera coincidencia
	El valor del parámetro index será 3.
	No son iguales, por lo que es un elemento repetido, no único.
	*/	
	console.log("Curso:", course);
	console.log("Index:", index);
	console.log("IndexOF:",array.indexOf(course));
	console.log(array.indexOf(course) === index);

	return array.indexOf(course) === index;
});

console.log(uniqueCourses);

//Conjunto de objetos

const LOW_SCORE = 50;
const HIGH_SCORE = 80;

const studentsWithScore = [
	{ name: "Mango", score: 83 },
	{ name: "Poly", score: 59 },
	{ name: "Ajax", score: 37 },
	{ name: "Kiwi", score: 94 },
	{ name: "Houston", score: 64 },
	];

const best = studentsWithScore.filter(student => student.score >= HIGH_SCORE);

console.log(best);

const worst = studentsWithScore.filter(student => student.score < LOW_SCORE);

console.log(worst);

// En una función de devolución de llamada, es conveniente desestructurar las propiedades del objeto
const average = studentsWithScore.filter(({score}) => score >= LOW_SCORE && score < HIGH_SCORE);

console.log(average);

//Método Find()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
/*
Mientras que el método filter(callback) se utiliza para encontrar todos los elementos que satisfacen la condición, el método find(callback) encuentra y devuelve el primer elemento coincidente, después del cual se detiene la búsqueda del array. Es decir, busca hasta la primera coincidencia.

No modifica el array original.
Recorre el array original elemento por elemento.
Devuelve el primer elemento que satisface la condición, es decir, cuando la llamada de retorno devuelve true.
Si ninguno de los elementos coincide, es decir, para todos los elementos del callback devuelve false, el método devuelve undefined.
*/

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
  { label: "red", color: "#00000" },
];

//console.log("Método Filter()",colorPickerOptions.filter(option => option.label ==="red"));
console.log("Método Find()",colorPickerOptions.find(option => option.label === "red"));
console.log("Método Find()",colorPickerOptions.find(option => option.label === "white"));

//Método findIndex()
/*El método findIndex(callback) es un reemplazo moderno del método indexOf(). Permite buscar condiciones más complejas que la simple igualdad. Se utiliza para buscar tanto en un array de primitivas como en un array de objetos.*/
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
console.log("Método FindIndex()",colorPickerOptions.findIndex(option => option.label === "red"));
console.log("Método FindIndex()",colorPickerOptions.findIndex(option => option.label === "blue"));
console.log("Método FindIndex()",colorPickerOptions.findIndex(option => option.label === "white"));

//Método every()
//Comprueba si todos los elementos del array pasan la prueba proporcionada por la función de devolución de llamada. Devuelve true o false.
/*
No modifica el array original.
Recorre el array original elemento por elemento.
Devuelve true si todos los elementos del array cumplen la condición.
Devuelve false si al menos un elemento del array no cumple la condición.
El recorrido del array se detiene si callback se vuelve false.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every
*/

console.log("Todos los números son positivos",[1, 2, 3, 4, 5].every(value => value >= 0));
console.log("Todos los números son positivos",[1, -2, 3, -4, 5].every(value => value >= 0));

//Método some()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some
/*
No modifica al array original.
Recorre al array original elemento por elemento.
Devuelve true si al menos un elemento del array satisface la condición.
Devuelve false si ningún elemento del array satisface la condición.
El recorrido del array se detiene si callback se vuelve true.
*/

console.log("Algún número es positivo",[1, 2, 3, 4, 5].some(value => value >= 0));
console.log("Algún número es positivo",[-1, -2, 3, -4, -5].some(value => value >= 0));
console.log("Algún número es positivo",[-1, -2, -3, -4, -5].some(value => value >= 0));

//Conjunto de objetos

const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

const allAvailable = fruits.every(fruit => fruit.amount > 0);

console.log("Todas las frutas están disponibles:",allAvailable);

const anyAvailable = fruits.some(fruit => fruit.amount > 0);


console.log("Alguna fruta está disponible:",anyAvailable);

//Método reduce()
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
/*
array.reduce((previousValue, element, index, array) => {

},initialVale);

No modifica el array original.
Recorre el array original elemento por elemento.
Devuelve cualquier cosa.
Hace cualquier cosa.
*/

const listNumbers = [2, 7, 3, 14, 6];

const total = listNumbers.reduce((previousValue, number) =>{
	return previousValue + number
},0);

console.log(total);

//Conjunto de objetos
//Cuando se trabaja con un array de objetos, se realiza una reducción por el valor de alguna propiedad. Por ejemplo, hay una serie de estudiantes con resultados de exámenes. Necesitas obtener la puntuación media.
/*
const studentsWithScore = [
	{ name: "Mango", score: 83 },
	{ name: "Poly", score: 59 },
	{ name: "Ajax", score: 37 },
	{ name: "Kiwi", score: 94 },
	{ name: "Houston", score: 64 },
	];
*/

const totalScore = studentsWithScore.reduce((total, student) => {
	return total + student.score;
},0);

const averageScore = totalScore / studentsWithScore.length;

console.log("Sumatoria de Scores", totalScore);
console.log("Promedio de Scores", averageScore);

//Avanzado reduce
/*
Supongamos que tenemos la siguiente tarea: a partir de un array de tweets de un usuario individual necesitamos calcular la suma de todos los likes. Podemos hacer un ciclo for o forEach, cada una de estas soluciones requerirá código adicional. O puede utilizar reduce.
*/
const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes ,0);

console.log(likes);

//Método sort()
//El método Sort() ordena los elementos de un array, pero a diferencia de otros métodos de ordenación, ordena el array original.
/*
Ordena y modifica el array original.
Devuelve el array modificado, es decir, una referencia al array original ordenado.
Por defecto, se ordena de forma ascendente.
La ordenación se realiza convirtiendo los valores en una cadena y comparando números ordinales en la tabla Unicode.

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

const scores = [61, 19, 74, 35, 92, 56];
const scoresSort = scores;

console.log(scores);
console.log(scoresSort);
scoresSort.sort();
console.log(scores);

const studentsName = ["Vika", "Andrei", "Oleg", "Julia", "Boris", "Katia"];
studentsName.sort();

console.log(studentsName);

const letters = ["b", "B", "a", "A", "c", "C", "Z"];
letters.sort();
console.log(letters); 

//Su orden de clasificación de los números

const numbersSort = [61, 19, 74, 35, 92, 56];
const descendingScores = [...scores].sort((a,b) => b - a);

console.log(descendingScores);





























































































