//var x = alert('hello');

//const qestion = prompt('What is your name?', 'input your name');

//const approove = confirm('Be or bee')

//if (5 === '5'){
//	alert('False step, press "Так"');

//}
//else if(5 * 5 == 5 + 20){
//	alert('First_step, press "Так"');
//	if('hello' != 'by'){
//		if (5 == 5) {
//			alert('Final step');
//		}
//	}
//}
//else{
//	console.log('FALSE, press "Так"');
//}


//var value_1 = +prompt('Enter first value?', 'input value');
//var prev_result;
//if(!isNaN(value_1)){
//	var value_2 = +prompt('Enter second value?', 'input value');
//	if(!isNaN(value_2)){
//		var result = confirm(value_1 + value_2);
//	}
//	else{
//		prev_result = alert('Enter value please');
//	}
//}
//else{
//	prev_result = alert('Enter value please');
//}



//var value_1 = +prompt('Enter first value?', 'input value');
//var value_2 = +prompt('Enter second value?', 'input value');
//var prev_result;
//if(100 < !isNaN(value_1) < 150 || 100 < !isNaN(value_2) < 150){
//	var result = confirm('Bali');
//}
//else if{	
//	if(160 < !isNaN(value_1) || 160 < !isNaN(value_2)){	
//		var result = confirm('Singapur');
//	}
//	else{		
//		if(!isNaN(value_1) < 100 || !isNaN(value_2) < 100){	
//			var result = confirm('JavaScript');
//		}
//		else{			
//			if(!isNaN(value_1) < 0  || !isNaN(value_2) < 0){	
//				var result = confirm('Tailand');
//			}
//			else{				
//				if(!isNaN(value_1) == 0  || !isNaN(value_2) == 0){	
//					var result = confirm('Kharkov');
//				}
//				else{
//					prev_result = alert('Enter value please');
//				}
//			}
//		}
//	}
//}
//else{
//	prev_result = alert('error');
//}


//console.log('value_1');
//console.log('value_2');
//console.log(result);



function functionName(name){
	console.log(name);
	console.log(`hello ${name}`);
}
functionName('Dima');

function summ(x, y, z){
	var result = x + y + z;
	console.log(result);
}
Math.floor(summ(0.1, 0.1, 0.1));

let name_value = {
	name: 'Dima'
}
function qwerty(){
	console.log(name_value);
}
qwerty();



function summ1(x, y, z){
	var result = Math.floor(x + y + z);
	console.log(result);
	return result;
}
summ1(10, 1, 22.2);


const createArrey = function(){
	//function expression
	return ['10', 10, {name: 'da'}];
}

console.log(createArrey);
console.log(createArrey ());

let newArrey = function(x){
	let objName = {x};
	return x;
}
console.log(newArrey ('Dima'));


let newArrey1 = function(x){
	let objName = { name: x};
	console.log(objName);
	objName.name = objName.name.toUpperCase();
	return objName;
}
console.log(newArrey1 ('Dima'));
