//Eventos del teclado
//https://developer.mozilla.org/es/docs/Web/API/Element/keydown_event
//https://developer.mozilla.org/es/docs/Web/API/Element/keyup_event

/*
document.addEventListener("keydown", event => {
  console.log("Keydown: ", event);
});

document.addEventListener("keyup", event => {
  console.log("Keyup: ", event);
});
*/

//Propiedades key y code

/*
document.addEventListener("keydown", event => {
  console.log("key: ", event.key);
  console.log("code: ", event.code);
});
*/

const clearLogBtn = document.querySelector('[data-action=clear]');
const logList = document.querySelector(".log-list");
let keyPressCounter = 1;

document.addEventListener("keydown", logMessage);

//Teclas de modificación
document.addEventListener("keydown", event => {
	event.preventDefault();

	if((event.ctrlKey || event.metaKey) && event.code === "KeyS"){
		console.log("Se guardo el documento");
	}
});


document.addEventListener("keyup", logMessage);
clearLogBtn.addEventListener("click",reset);

function logMessage({type, key, code}){
	const markup = `<div class="log-item">
	<span class="chip">${keyPressCounter}</span>
	<ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

  logList.insertAdjacentHTML("afterbegin",markup);

  if(type === "keyup"){
  	keyPressCounter++;
  //console.log("El personaje se detuvo")
  }else{
  	//Teclas de modificación
  	event.preventDefault();
  		if(key === "Meta" && code === "KeyS"){
  		console.log("Se presiono CMD");
  	}
  //console.log("El personaje avanza")
  }
}

function reset(){
	keyPressCounter = 1;
	logList.innerHTML = "";
}











