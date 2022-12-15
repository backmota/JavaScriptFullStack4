//Evento change
/*
Se produce después de que se haya modificado un elemento del formulario. Para los campos de texto o textarea, el evento no se producirá cada vez que se introduzca un carácter, sino cuando se pierda el enfoque, lo que no siempre es conveniente. Por ejemplo, mientras estás escribiendo algo en un campo de texto no hay ningún evento, pero tan pronto como se pierda el enfoque, se producirá el evento change. Para otros elementos, como select, casillas de verificación y botones de radio, el evento change se activa inmediatamente cuando se selecciona un valor.
*/

const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

setOutput();

select.addEventListener("change", setOutput);

function setOutput(){
	 const selectedOptionValue = select.value;
	 const selectedOptionIndex = select.selectedIndex;
	 const selectedOptionText = select.options[selectedOptionIndex].text;

	 textOutput.textContent = selectedOptionText;
	 valueOutput.textContent = selectedOptionValue;
}

const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
	output.textContent = event.currentTarget.value;
});

//Eventos Focus y blur
/*
El elemento obtiene el enfoque cuando se hace clic con el ratón o se salta con la tecla Tab. El momento de conseguir el enfoque y de perderlo es muy importante, cuando conseguimos el enfoque y podemos cargar los datos para el autorrelleno, empezar a rastrear los cambios, etc. Cuando se pierde el enfoque, podemos comprobar los datos introducidos.

Cuando un elemento está enfocado, se produce un evento focus, y cuando el enfoque desaparece, por ejemplo, el usuario hace clic en otra parte de la pantalla, se produce un evento blur. El enfoque puede ser activado o cancelado programáticamente llamando a los métodos focus() y blur() del elemento con el mismo nombre.
*/

const textInputTwo = document.querySelector(".text-input-two");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
	textInputTwo.focus();
});

removeFocusBtn.addEventListener("click", () => {
	textInputTwo.blur();
});

textInputTwo.addEventListener("focus", () => {
	textInputTwo.value = "Se activo el focus";
});

textInputTwo.addEventListener("blur", () => {
	textInputTwo.value = "Se quito el focus";
});










