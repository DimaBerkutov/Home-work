// let group = [];
// 	let teacherName = 'Maxim';


// function someClass(param) {
// 	for(let i = 0; i < 30; i++){
// 		let studentName = 'Anton' + i;
// 		group.push({studentName, teacherName});
// 		studentName.__proto__ = teacherName;
// 		group.magic = function(){
// 			this.name + 'Халява прийди';
// 		}
// 	}
// 	return group
// }
// console.log(someClass(group));

// let obj1 = {
// 	name: 'Dima'
// }
// let obj2 = {
// 	showName: function () {
// 		console.log(this.name);
// 	}
// }
// let obj3 = {
// 	name: 'Dima',
// 	lastName: 'Berkutov'
// }
// obj1.__proto__ = obj2;
// obj1.__proto__ = obj3;
// obj2.__proto__ = obj3;
// console.log(obj1.name, obj1.lastName);
// console.log(obj2.name);

// function Params(param1, param2, param3, param4){
// 	if(param1){
// 		this.myArray = param1
// 	}
// 	if(param2){
// 		this.cars = param2
// 	}
// 	if(param3){
// 		this.name = param3
// 	}
// 	// param1 ? this.myArray = param1 ? ;
// 	// param2 ? this.cars = param2 ? ;
// 	// param3 ? this.name = param3 ? ;
// }
// function counter (val) {
// 	let counterValue = 0;
// 	return {
// 		addCounter(() =>{
// 			counterValue += val + param4;
// 			return counterValue
// 		})
// 	};
// }
// let someObj = new Params([1, 2, 3, 4], {auto1: 'Audi', auto2: 'BMW'}, 'Ivan', 10);
// console.log(someObj);
// console.log(counter());

function Three(){
	console.log('Дерево от косточки')
}

function Wether(aaa){
	this.aaa = aaa;
}

Three.prototype.aaa = () => {
	console.log('Гроза и дождь');
}

let newThree = new Three('Яблоко');