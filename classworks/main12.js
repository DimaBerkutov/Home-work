`use strict`
// function Cars(wheels, color, doors, type) {
// 	this.wheels = wheels;
// 	this.color = color;
// 	this.doors = doors;
// 	this.type = type;
// }
// let a = 0;
// Cars.prototype.drive = function() {
// 	this.run = true;
// 	console.log('car is driving');
// }
// Cars.prototype.stop = function() {
// 	if(this.run){
// 		this.run = false;
// 		console.log(this.type + ' is stopped');
// 	}else{
// 		console.log(this.type + ' already stay');
// 	}
// }
// let lexus = new Cars(4, 'red', 5, 'lexus');
// let bmw = new Cars(1, 'black', 2, 'bmw');




// let cat = {
// 	legs: 4,
// 	callKitty(food, food2){
// 		console.log(this.name, 'kiss kiss kiss', food);
// 		console.log(food2);
// 	}
// }
// let myCat = {
// 	name: 'Hermiona'
// }
// let anotherCat = {
// 	name: 'Belyashik'
// }
// myCat.__proto__ = cat;
// anotherCat.__proto__ = myCat;
// myCat.callKitty('fish', 'korm');
// cat.callKitty.call(anotherCat, 'viskas', 'hozyain');
// cat.callKitty.apply(anotherCat, ['applyViskas', 'applyHozyain']);
// let feedBelyashik = cat.callKitty.bind(anotherCat);
// feedBelyashik('indeyka', 'eda');



function Creature(type, ears){
	this.type = type;
	this.magic = function(){
		console.log('Mage');
	}
}

Human.prototype = Object.create(Creature.prototype);

Creature.prototype.doMagic = function (){
	if(this.type === 'Mage'){
		this.magic();
		return
	}
	console.log('Human');
};
function Human(type, ears){
	Creature.call(this, ears)
	this.ears = ears;
}

let creature = new Human('Коннор', 150);
let human = new Human('Воробей', 2);
let gendalf = new Human('Mage', 150);

function Mag(){}