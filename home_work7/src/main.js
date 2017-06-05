/**
 * Created by Dima on 04.06.2017.
 */
'use strict';

/*
 *
 * TASK 1
 *
 * Напишите функцию которая будет вызываться трижды и складывать
 * все передаваемые ей числа
 *
 *
 * */

function add(x) {
    return function firstFunction(y) {
        return function secondFunction(z) {
            return x + y + z;
        }
    }
}

console.log('first task:', add(1)(2)(3)); // 6
console.log('first task:', add(10)(5)(15)); // 30


/*
 *
 * TASK 2
 *
 * Напишите функцию которая возвращает объект и одно из свойств объекта
 * это функция
 * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
 * число на 1 больше чем предыдущее
 * ---------------------------------------
 * так же у объекта должен быть метод обнуления счетчика
 * Узнать счетчик напрямую в объекте, нельзя
 *
 * */

function patternModule() {
    let counter = {};
    counter.summ = 0;
    counter.method = function () {
        this.summ += 1;
        console.log('second task : summ =', this.summ);
    };
    counter.zeroingOut = function () {
        this.summ = 0;
        // console.log('second task : summ =', this.summ);
    };
    return counter;
}
let test = patternModule(); // 0
test.method(); //1
test.method(); //2
test.method(); //3
test.zeroingOut(); //)
test.method(); //1
test.method(); //2
test.method(); //3


// @SUPER

/*
 * TASK 1
 *
 * Напишите функцию которая принимает 4 аргумента:
 *
 * -  Объект
 * -  Имя свойства с которым связывается метод
 * -  Сколько раз можно вызвать метод *
 * -  Объявление привязываемого метода( функция )
 *
 *  При вызове метода отобразите сумму передаваемых параметров.
 *  Когда заканчивается счетчик, отображается ошибка
 *
 * */

// let jun = {};
//
// function methodCounter(obj, name, num, fn) {
//     obj[name] = function (a, b, c, d) {
//         let arg = [a, b, c, d];
//         if(num > 0){
//             if(isNaN(fn(arg))){
//                 console.log('SUPER  ERROR ! add more methods');
//             }
//             else{
//                 console.log( 'SUPER  counter =', num, 'sum =', fn(arg));
//                 num -= 1;
//             }
//         }else {
//             console.log('SUPER  ERROR ! counter ended');
//         }
//     };
// }
// methodCounter(jun, 'logger', 2, function (args) {
//     let sum = args.reduce(function (a, b) {
//         return a + b
//     }, 0);
//     // console.log('sum', sum);
//     return sum;
// });
//
// jun.logger(1, 2, 3, 4); // 2, 10
// jun.logger(5, 5, 5, 5); // 1, 20
// jun.logger(5, 5); // ERROR ! add more methods





// @SUPER - PUPER,
/*
 * Добавьте функции methodCounter, возможность увеличивать счетчик
 * на заданное число
 * */
let jun = {};

function methodCounter(obj, name, num, fn) {
    obj.counrer = num;
    obj.addVal = 0;
    obj.init = function (add) {
        obj.counrer += add;
    };
    obj.init(obj.addVal);  // возможность увеличивать счетчик на заданное число
    obj[name] = function (a, b, c, d) {
        let arg = [a, b, c, d];
        if(obj.counrer > 0){
            if(isNaN(fn(arg))){
                console.log('SUPER - PUPER  ERROR ! add more methods');
            }
            else{
                console.log('SUPER - PUPER  counter =', obj.counrer, 'sum =', fn(arg));
                obj.counrer -= 1;
            }
        }else {
            console.log('SUPER - PUPER  ERROR ! counter ended');
        }
    };
}
methodCounter(jun, 'logger', 2, function (args) {
    let sum = args.reduce(function (a, b) {
        return a + b
    }, 0);
    // console.log('sum', sum);
    return sum;
});

// jun.counter(2);
jun.logger(1, 2, 3, 4, 7); // 2, 10
jun.logger(5, 5, 5, 5); // 1, 20
jun.logger(5, 7, 2, 5); // 1, 20
jun.logger(5, 2, 8, 5); // 1, 20
jun.logger(5, 5); // ERROR ! add more methods


