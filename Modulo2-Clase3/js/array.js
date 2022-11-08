//Array - Es una estructura de datos para almacenar y manipular una colección de valores indexados. Se utiliza para almacenar colecciones ordenadas de datos, por ejemplo, listas de estaciones, productos, clientes de hoteles, etc.

const clients = ["Mango","Poly", "Ajax", 1, 12.5, true];

console.log(clients);
console.log(clients[1]);

const matriz = [[0,1,0],[1,1,1],[0,0,0]];

console.log(matriz);
console.log(matriz[1]);
console.log(matriz[0][1]);

matriz[1][1] = "Nuevo Valor";

console.log(matriz);

clients[2] = "JavaScript";

console.log(clients);

console.log(clients.length);
console.log(clients.length -1);
console.log(clients[5]);
console.log(clients[7]);

clients[8] = "Otro Valor";
console.log(clients);
console.log(clients[7]);

const lastElementIndex = clients.length - 1;
console.log(clients[lastElementIndex]);








