const helloString = 'hello';
const iAmString = 'word';

const geString = 'hello world';

//const helloWorld = helloString + iAmString;
const helloWorld = `hello ${iAmString}`;

let myString = 'dima';
console.log(myString.toUpperCase(), myString);
console.log(myString[3])
console.log(helloWorld);



var user = {
	name: 'У Димы есть автомобили:',
	cars: ['BMW', 'Audi']
}

var userInfo =`У Димы есть автомобили: 
				${user.cars}`;


console.log(userInfo);


const myName = 'Dima';
const myNamee = 'dIMA';
console.log(myName.toLowerCase());
console.log(myName.slice(3));
console.log(myName.slice(-3));
console.log(myName.slice(2,3));

var newName0 = myName[0];
var myNamee0 = myName[0];
var newName1 = newName0.toLowerCase() + myName.toUpperCase().slice(-3);

var newName2 = myNamee0.toUpperCase() + myNamee.toLowerCase().slice(-3);
console.log(newName1);
console.log(newName2);


const myNameInfo = 'privet, kak, dela';
let myNameNew = myNameInfo.split(',');
console.log(myNameNew);


const myNameInfo1 = 'privet, kak, dela';
let myNameNew1 = myNameInfo1.replace('privet', 'kak');
console.log(myNameNew1);


console.log(myNameInfo1.indexOf('k'));

console.log(myNameInfo1.indexOf('a'));


var fff = '50'
console.log(fff == 50);
console.log(fff === 50);
console.log(null == '');
console.log(undefined == '');
console.log(undefined == null);
console.log(50 % 3);


var year2017 = 2017%20
console.log(year2017);


console.log(!true);
console.log(!0 == false);



console.log(!true);

console.log(Math.round());


var somaArray = [100, 200, 400];
console.log(Math.max(somaArray));


var somaArray1 = Math.max(...[100, 200, 400]);
console.log(somaArray1);