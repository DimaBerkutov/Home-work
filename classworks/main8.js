// function switchCase(someVal){
// 	let newarr = Array.isArray(someVal);
// 	switch(newarr){
// 		case true:
// 		return someVal.join('-');
// 		case false:
// 		for(let key in someVal){
// 			return someVal[key];
// 		}
// 	}
// }

// console.log(switchCase([1, 2, 3, 4, 5, 6]));
// console.log(switchCase({q: '1', w: '2', e: '3'}));


// function randomArg(a, b, c, d, e, f, g){
// 	let summ = 0;
// 	for(let i = 0; i < arguments.length; i++){
// 		summ += arguments[i];
// 	}
// 		return summ;
// }

// console.log(randomArg(1, 2, 3));


// let someObj{
// 	sum: function(num1, num2){
// 		return num1 + num2;
// 	}
// }

let obj1 = {
	name: 'Dima',
	friends: ['Lera', 'Vitya', 'Vladimir'],
	recepts:{
		piizza:{
			ingredients: ['cheeze', 'tomatos']
		}
	}
};
let obj2 = {};
function someFunc(obj1, obj2){
	// for(let key in obj1){
	// 	obj2[key] = obj1[key];
	// }
	let es5Cloned = Object.assign({}, obj1);
	// let es7Cloned = {... obj1, friends: [... obj1.friends]};
	return es5Cloned;
}
let newObj = someFunc(obj1, obj2);
obj1.recepts.hachapuri = {
	ingredients: ['@', '@']
};
console.log('newObj', newObj);
console.log('obj1', obj1);
console.log('obj2', someFunc(obj1, obj2));