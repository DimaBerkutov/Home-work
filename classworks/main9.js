// let myObject = {
// 	es5function: function (argument) {
// 		for(let key in myObject){
// 			// console.log(key);
// 		}
// 	},
// 	es6function(){
// 		Object.keys(myObject).forEach(function(elem, index, myObject){
// 			console.log(myObject[elem]);
// 		});

// 	},
// 	length: 10
// }
// myObject.es5function();
// myObject.es6function();


// let sum = function(a, b){
// 	return a + b;
// };

// let sumES6 = (val) => {
// 	console.log(val * 2);
// 	return val * 2;
// }

// sumES6(6);
// sumES6(52.6264);

// let double = (a) => a * 2;


// let someArrey = [1000, 1500, 2500, 3500];
// let mySalary = arr => 
// 	arr.filter((elem) =>{
// 		if (elem > 1500) {
// 			console.log(elem);
// 			return elem;
// 		}		
// 		console.log('error');
// 	});

// mySalary(someArrey);

// function showContext(){
// 	console.log(this);
// }

// let recipeBook1 = {
// 	friends: ['торт', 'мороженное', 'пицца'],
// 	showFriends(){
// 		console.log(this.friends);
// 	}
// };
// let recipeBook2 = {
// 	friends: ['яблоко', 'слива', 'апельсин'],
// 	myFriends(){
// 		console.log(this.friends);
// 	}
// };

// function someFriends(recipeBook1){
// 	console.log(this.friends);
// }

// recipeBook1.showFriends();
// recipeBook2.myFriends();

const user = {
	name: 'Jack',
	fruits: 'mango, kivi, banan',
	friends: [
		{
			name: 'Egor',
			fruits: 'Apple'
		},
		{
			name: 'Jennie',
			fruits: 'Lime'
		},
		{
			name: 'Frodo',
			fruits: 'Granate'
		}
	],
	showFruits(){
		console.log(this.fruits);
	},
	friendsFruits(){
		this.friends.forEach((elem, index) =>{
			console.log(this.call(fruits));
		});
	}
}
user.showFruits();
user.friendsFruits();
