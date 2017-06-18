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

