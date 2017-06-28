`use strict`
// let str1 = 'JavaScript is rule';
// let str3 = 'JavaScript is is is is is rule';
// function strIng(str){
// 	return /JavaScript/.test(str);
// }
// console.log(strIng(str1));

// let replaceJS = (str) => {
// 	let val = str.split(' ');
// 	console.log('val', val);
// 	val.forEach((elem, index) => {
// 		console.log(elem.replace(/JavaScript /g.test(str),' '));
// 		console.log('valval', val);
// 	});
// }
	// if(/JavaScript/.test(str)){
	// 	return 
	// }\
// console.log(replaceJS(str3))

// let li2 = document.createElement('li');
// let li3 = document.createElement('li');
// li1.textContent = 'JavaScript';
// li2.textContent = 'React';
// li3.textContent = 'Node.js';
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
let arr = ['JavaScript', 'React', 'Node.js']
let ul = document.createElement('ul');
document.body.appendChild(ul);
arr.forEach((elem, index) => {
	let li = document.createElement('li');
	ul.appendChild(li);
	li.textContent = elem;
});