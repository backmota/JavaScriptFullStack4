/*
La asignación destructiva también puede utilizarse para los arrays, pero con algunas características especiales.

En lugar de llaves {}, se utilizan corchetes [].
Las variables especificadas entre corchetes [] se asignarán secuencialmente a los valores de los elementos del array.
Por ejemplo, tienes un array de colores del que quieres obtener los valores de cada componente de color en variables separadas.
*/

const rgb = [200, 255, 100];

const [red, green, blue, alfa = 0.3] = rgb;

console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`);

/*
Después de la palabra clave const o let ponga corchetes de apertura y cierre como cuando declara un array. Dentro de los paréntesis, utilice una coma para especificar los nombres de las variables que contendrán los valores del array.

Esto creará 3 variables y colocará los elementos en orden numérico desde 0 hasta el final del array.

Cuando las matrices están desestructuradas, el valor de la variable se puede asignar después de haberla declarado. En la práctica, esto se utiliza poco.
*/

const [r, ...colors] = rgb;

console.log(r);
console.log(colors);

const [,, b] = rgb;

console.log(b);
