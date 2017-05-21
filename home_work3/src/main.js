/*
1. Напишите функцию которая принимает в
качестве аргумента массив
и элемент массива и добавляет элемент в конец массива
*/

// Method 1
function task1_1(arrey1_1, arreyElement1) {
    var arreyResult = arrey1_1 + ',' + arreyElement1;
    return arreyResult.split(',');

}
let arrey1_1 = ['Element1', 'Element2', 'Element3', 'Element4', 'Element5', 'Element6', 'Element7'];
let arreyElement1 = arrey1_1.slice(-1);

console.log(task1_1(arrey1_1, arreyElement1));

// Method 2
function task1_2(arrey1_2, arreyElement2) {
    var qqq = (arrey1_2.length);
    arrey1_2[qqq] = arreyElement2;
    return arrey1_2;

}
let arrey1_2 = ['Element1', 'Element2', 'Element3', 'Element4', 'Element5', 'Element6', 'Element7'];
let arreyElement2 = arrey1_2[arrey1_2.length - 1];


console.log(task1_2(arrey1_2, arreyElement2));
/*
 2. Напишите функцию которая получает 3 параметра
 и возвращает объект типа:
 {
 argument1: param1,
 argument2: param2,
 argument3: param3,
 }
 */

// console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));

/* {
 argument1:'protocol',
 argument2:{url:'22'},
 argument3:8000
 }*/

// var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

// console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));
/* {
 argument1:'77',
 argument2:[{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }],
 argument3:PRIVET KAK DELA CHTO NOVOGO
 }*/

function task2(param1, param2, param3) {
    var objParams = {
        name1: param1,
        name2: param2,
        name3: param3
    };
    return objParams;
}
var param1 = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];
var param2 = {url:'22'};
var param3 = 'protocol';

console.log(task2(param1, param2, param3));



/*
 3.  Напишите функцию которая принимает 3 аргумента,
 третий аргумент - это объект.

 Функция создает новый объект и добавляет ключ
 это первый аргумент, а значение - второй аргумент
 Проверяет если есть свойство name в переданном объекте,
 тогда добавляет данное свойство и возвращает новый объект

 var myName = { name: 'Oleg' };

 function addNameToUser(newKey, newValue, userName) {

 }
 */

//console.log(addNameToUser('family', '%Lustenko%', myName));
/* {name:'Oleg', family:'%Lustenko%'} */

//console.log(myName);
/* {name:'Oleg'} */

function task3 (newKey, newValue, userNames) {
    newObj = {};
    newObj[newKey] = newValue;
    if (userNames.name != undefined){
        newObj.name = 'Dima';
    }
    else{}
    console.log(userNames);
    return newObj;
}
let newKey = 'pass';
let newValue = 111;
let userNames = {
    name: 'Nikita',
    secondName: 'Marina',
    thirdName: 'Kate'
};
console.log(task3 (newKey, newValue, userNames));



/*
 -> @@ SUPER
 Напишите функцию, которая будет возвращать 'Fizz'
 если передаваемый параметр кратен 3,
 'Buzz', если передаваемый параметр кратен 5,
 'FizzBuzz' - если параметер кратен 3 и 5
 Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
 */

function fizzBuzz(num) {
    if(!isNaN(num) && (num % 3) != 0){
        if(!isNaN(num) && (num % 5) != 0){
            if(!isNaN(num) && (num % 5) != 0 && (num % 3) != 0){
                console.log(num);
            }
            else{
                console.log('FizzBuzz');
            }
        }
        else{
            console.log('Buzz');
        }
    }
    else{
        console.log('Fizz');
    }
    return num;
}

fizzBuzz(1); // 1
fizzBuzz(2.4); // 2
fizzBuzz(3); // 'Fizz'
fizzBuzz(5.7); // 'Buzz'
// ...
fizzBuzz(15); // 'FizzBuzz'
fizzBuzz(21); // 'Fizz'
fizzBuzz('fdsadsfdafda'); // 'Fizz'


/* -> @@ SUPER 2
 Напишите функцию, которая будет принимать 4 аргумента,
 последний всегда функция.
 Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом

 */

function SUPER2(mark1, mark2, mark3, funcBrands){
    var brands = [mark1, mark2, mark3];
    var result = funcBrands(brands);
    return result;
}

var brand1 = 'BMW';
var brand2 = 'Citroen';
var brand3 = 'Ford';
var func_brand = function (brand) {
    return brand;
};
console.log('finish', SUPER2(brand1, brand2, brand3, func_brand));