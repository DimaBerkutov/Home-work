/**
 * Created by Dima on 17.06.2017.
 */

"use strict";

 // * Сделайте 4 объекта - не усложняйте, просто наследование
 // * через __proto__
 // - Пользователь
 // - Верифицированный пользователь
 // - Гость
 // - База данных
 // - База хранит информацию о пользователях
 // - Пользователи знают мыло админа
 // - админ знает пароль от базы данных
 // - Гости могут зарегистрироваться в базе данных


// let user = {};
// let verifiedUser = {
//     adminMAil: 'qqq@qqq.com'
// };
// let gest = {};
// let base = {
//     user: 'Dima',
//     user2: 'Nikita',
//     databasePaass: 'qeeqe14512fwf'
// };
// user.__proto__= verifiedUser;
// verifiedUser.__proto__= base.databasePaass;
// console.log(user.adminMAil);
// console.log(user.databasePaass);



// call - this - покажет тело функции, поскольку в данном контексте this - это функция
// check-syntax - покажет оибку, не правильный вызов, нужно так: obj.go()
// why-this - в вызове 3) method и obj.stop не определены
// property-this - покажет undefined, посколку в export нету firstName
// return this - покажет "Василий", поскольку user.export() вызовет функцию, она в свою очередь вернет this, это user, после чего зайдет в name, это "Василий"
// return-object-this - так же как и предидуший, value заходит в user, а там name это "Василий"

// calculator
// var calculator = {
//     val1: '0',
//     val2: '0',
//     read(){
//         this.val1 = prompt('Type value1', 1);
//         this.val2 = prompt('Type value2', 1);
//     },
//     sum(){
//         let summ = +this.val1 + +this.val2;
//         return 'summ = ' + summ;
//     },
//     mul(){
//         let mull = +this.val1 * +this.val2;
//         return  'mull = ' + mull;
//     }
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// chain-calls
// var ladder = {
//     step: 0,
//     up: function() { // вверх по лестнице
//         this.step++;
//         return this
//     },
//     down: function() { // вниз по лестнице
//         this.step--;
//         return this
//     },
//     showStep: function() { // вывести текущую ступеньку
//         alert( this.step );
//         return this
//     }
// };
// ladder.up().up().down().up().down().showStep(); // 1

//two-one
// let obj = {};
// function A() {
//     return obj
// }
// function B() {
//     return obj
// }
//
// var a = new A;
// var b = new B;
//
// alert( a == b ); // true

//calc-constructor
// function Calculator() {
//     this.val1= '0';
//         this.val2= '0';
//     this.read = () =>  {
//         this.val1 = prompt('Type value1', 1);
//         this.val2 = prompt('Type value2', 1);
//     };
//     this.sum = () =>  {
//         return +this.val1 + +this.val2
//     };
//     this.mul = () => {
//         return  +this.val1 * +this.val2
//     };
// }
// var calculator = new Calculator();
// calculator.read();
//
// alert( "Сумма=" + calculator.sum() );
// alert( "Произведение=" + calculator.mul() );

//accumulator
// function Accumulator(startingValue){
//     this.value = startingValue;
//     this.read = function(){
//         let addValue = prompt(`Текущее значение : ${this.value}
// Введите число:`, 1);
//         this.value += +addValue;
//     }
// }
// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( 'Результат = ' + accumulator.value ); // выведет текущее значение

//calc extendable
// function Calculator() {
//     let action = {
//         '-': function (a, b) {
//             return +a - +b;
//         },
//         '+': function (a, b) {
//             return +a + +b;
//         }
//     };
//     this.calculate = function (val) {
//         let a = val.split(' ')[0],
//             b = val.split(' ')[2],
//             sign = val.split(' ')[1]
//         if(!isNaN(a) || !isNaN(b)){
//             return action[sign] (a, b)
//         } else {
//             return 'error'
//         }
//     };
//     this.addMethod = function(name, func){
//         action[name] = func;
//     };
// }
// var calc = new Calculator;
//
// var powerCalc = new Calculator;
// powerCalc.addMethod("*", function(a, b) {
//   return a * b;
// });
// powerCalc.addMethod("/", function(a, b) {
//   return a / b;
// });
// powerCalc.addMethod("**", function(a, b) {
//   return Math.pow(a, b);
// });
//
// var result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
//
// alert( calc.calculate("3 + 7") ); // 10


/* .. ваш код для filter, inBetween, inArray */
var arr = [1, 2, 3, 4, 5, 6, 7];
function filter(arr, func){
    let someArr = [];
    arr.map((elem, index) => {
            console.log(func);
        if(func(elem)){
            someArr.push(elem);
        }
    })
    console.log(someArr);
    return someArr;
}
function inBetween(a, b) {
    return arr.map((elem, index) =>  a <= elem <= b);
}
function inArray(incomeArr) {
   return arr.map((arrElem, index) => incomeArr.map((incomeElem, index) => arrElem == incomeElem));
}
alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6
alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
alert( filter(arr, inArray([1, 2, 10])) ); // 1,2


// var arr = [1, 2, 3, 4, 5, 6, 7];
// function filter(arr, func) {
//   var result = [];
//
//   for (var i = 0; i < arr.length; i++) {
//     var val = arr[i];
//     if (func(val)) {
//       result.push(val);
//     }
//   }
//
//   return result;
// }
//
// function inBetween(a, b) {
//     return function(x) {
//       return x >= a && x <= b;
//     };
//   }
//
// alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
// function inArray(arr) {
//     return function(x) {
//       return arr.indexOf(x) != -1;
//     };
//   }
//
// alert( filter(arr, inArray([1, 2, 10])) ); // 1,2