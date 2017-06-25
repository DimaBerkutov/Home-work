`use strict`

// class Server{
// 	constructor(database){
// 		this.database = database;
// 	}
// }
// class Client extends Server{
// 	constructor(options, name){
// 		super();
// 		listen(port, host)
// 	}
// }
// let http = new Server([{'fsdfs'}, '432432']);

// class Parent {
// 	constructor(){}
// 	sayHello()  {
// 		console.log('hello' + this.name);
// 	}
// 	satMeow() {
// 		console.log('Meow' + this.name);
// 	}
// }
// class Child extends Parent{
// 	constructor(name){
// 		super();
// 		this.name = name;
// 	}
// 	sayHello() {
// 		console.log('helloNEW' + this.name);
// 	}
// }
// let car = new Child('Хвостик');

// setTimeout(() => {
// 	console.log('time1')
// }, 3000)
// setTimeout(() => {
// 	console.log('time2')
// }, 2000)
// setTimeout(() => {
// 	console.log('time3')
// }, 1000)
// let a = 0;
// let aa = setInterval(() => {
// 	console.log('every 3 sec', a += 1);
// }, 1000)

const a = 53;
const b = 24;
try{
JSON.parse({})
}catch(e){
	console.log(e);
}finally{
	console.log('end');
}