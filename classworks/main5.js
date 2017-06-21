// function aOrB(a, b) {
// 	if(a < b){
// 		return b;
// 	}
// 	if(a > b){
// 		return a;
// 	}
// }



// console.log(aOrB(2, 4));


// function aOrB(a, b) {
// 		return a > b ? a : b;
// }
// console.log(aOrB(2, 4));

// let obj = {
// 	arr : [1, 'gedg', 5, 8],
// 	name : 'Dima'
// }
// let numm = [1, 20, 30, 40, 50, 60];
// function twoArgsFunction(value1, value2){
// 	if (Array.isArray(value1)){
// 		for(let i = 0; i < value1.length; i++){
// 			let elem = value1[i];
// 			if(elem > value2){
// 				return elem;
// 			}
// 		}
// 	}else{
// 		for( let key in value1) {
// 			let elemObj = value1[key];
// 			if(Array.isArray(elemObj)){
// 				for(let i = 0; i < elemObj.length; i++){
// 					let elem = value1[i];
// 					if(elem > value2){
// 						return elemObj;
// 					}
// 				}
// 			}

// 		}
// 	}

// }
// console.log('1', twoArgsFunction(obj, 200));
// console.log('2', twoArgsFunction(numm, 43));


// function sum(number) {
// 	if (number < 1){
// 		return number;
// 	}
// 	return sum(number - 1) + number;
// }
// console.log(sum(5));


const js = 'JS Is Cool language';
function reverseFunc(val) {
	let newJSval = val.split(' ');
	arr = [];
	for (let i = 0; i < newJSval.length; i++){
		let newVal = newJSval[i].reverse();
		arr.push(newVal);
	}
	return text;
}
 console.log(reverseFunc(js));