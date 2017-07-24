`use strict`;
let press = document.body;
press.addEventListener('keydown', (event) => {
	if(event.keyCode >= '112' && event.keyCode <= '123'){
	console.log(event)
		alert(event.code)
		event.preventDefault();
	}
});
