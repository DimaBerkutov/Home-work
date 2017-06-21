// let JSONNwew = {
// 	"string": "some string",
// 	"obj": {
// 		"array": ["arr1", "arr2", "arr3"]
// 	}
// }

// console.log(JSON.stringify(JSONNwew));
// let newObj = JSON.stringify(JSONNwew);
// console.log(JSON.parse(newObj));


// function User(name) {
// 	this.name = name;
// }
// let userDima = new User('Dima');
// let userNikita = new User('Nikita');
// console.log(userDima.name);


// function City(name, person){
// 	this.name = name,
// 	this.population = person
// }
// let cityTolio = new City('Tokio', '12 914 432');
// let cityBarselona = new City('Barselona', '5 426 432');
// console.log(cityTolio);
// console.log(cityBarselona);

function World(number){
	this.currentCash = number,
	this.addCountry = (country) => {
		let val = country.countryName;
		country[val] = (value) => {
			console.log('world cash =', val - value);
			console.log('country cash =', value);
		};
	}
}
function Country(country, number) {
	this.countryName = country,
	this.countryCash = number,
	this.solvency = () => {}
}
let Earth = new World(100);
let Germany = new Country('du', function(cashNeed){

});
let frontend = new Country('/login', function(cashNeed){

});
Earth.addCountry(Germany);
Germany.du(30);


Earth.addCountry(frontend);
frontend.du(57);