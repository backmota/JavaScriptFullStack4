const studentA = "José Mota";//Entorno Global
let transferir;

if(true){
	console.log(`Bloque A: El nombre del estudiante A es: ${studentA}`);//Bloque A

	const nickName = "Mota";
	console.log(`Bloque A: El nombre del estudiante A es: ${studentA} y su nickName es ${nickName}`);//Bloque A

	//console.log(`Bloque A: El nombre del estudiante A es: ${studentA}, su nickName es ${nickName} y su Alias: ${alias}`);//Bloque A
	//console.log(otherName);
	if (true) {
		//Bloque B
		const alias = "Geek";
		console.log(`Bloque B: El nombre del estudiante A es: ${studentA}`);
		console.log(`Bloque B: El nombre del estudiante A es: ${studentA} y su nickName es ${nickName}`);//Bloque B
		console.log(`Bloque B: El nombre del estudiante A es: ${studentA}, su nickName es ${nickName} y su Alias: ${alias}`);//Bloque B

	}

}

if (true) {
	//Bloque C
	console.log(`Bloque C: El nombre del estudiante A es: ${studentA}`);//Bloque C
	const otherName = "otroNombe";
	transferir = otherName;
}


console.log(`Global: El nombre del estudiante A es: ${studentA}`);
console.log(transferir);

//////////



const global = "global";

if (true) {
  const blockA = "block A";

  //Vemos el global + local A
  console.log(global); // 'global'
  console.log(blockA); // block A

  // Las variables blockB y blockC no se encuentran en los ámbitos disponibles.
  // Habrá un error de referencia de la variable.
  //console.log(blockB); // ReferenceError: blockB is not defined
  //console.log(blockC); // ReferenceError: blockC is not defined

  if (true) {
    const blockB = "block B";

    // Vemos el global + externo A + local B
    console.log(global); // global
    console.log(blockA); // block A
    console.log(blockB); // block B

    // La variable blockC no se encuentra en los ámbitos disponibles.
    // Habrá un error de referencia de la variable.
    //console.log(blockC); // ReferenceError: blockC is not defined
  }
}

if (true) {
  const blockC = "block C";

  //Vemos el global + local C
  console.log(global); // global
  console.log(blockC); // block C

  // Las variables blockA y blockB no se encuentran en los ámbitos disponibles.
  // Habrá un error de referencia de la variable.
  //console.log(blockA); // ReferenceError: blockA is not defined
  //console.log(blockB); // ReferenceError: blockB is not defined
}

// Sólo podemos ver el global
console.log(global); // global

// Las variables bloqueA, bloqueB y bloqueC no se encuentran en los ámbitos disponibles.
// Habrá un error de referencia de la variable.
//console.log(blockA); // ReferenceError: blockA is not defined
//console.log(blockB); // ReferenceError: blockB is not defined
//console.log(blockC); // ReferenceError: blockC is not defined


//El uso de Var puede afectar la seguridad porque no respeta el scope o alcance

if (true) {
	var value = "Variable Var";
	if (true) {
		var valueBlockTwo = "Este valor no debería estar disponible en Global"
	}
}

console.log(value);
console.log(valueBlockTwo);


