`use strict`;
// const td = [... document.querySelector('tbody').querySelectorAll('td')];
// td.forEach(elem => elem.onclick = (event) => {
// 	elem.style.background = 'red'
// 	console.log(event);
// });
let qwert = selectot => document.querySelector(selectot)
const block1 = qwert('.block1');
const block2 = qwert('.block2');
const block3 = qwert('.block3');
	console.log(block3);

block1.addEventListener('click', () => {
	alert('block1');
}, true)
block2.addEventListener('click', () => {
	event.stopImmediatePropagation()
	alert('block2');
}, true)
block3.addEventListener('click', (event) => {
	event
	alert('block3');
}, true)