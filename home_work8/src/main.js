/**
 * Created by Dima on 07.06.2017.
 */
'use strict';

/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 *
 * */

function solution1() {
    let line = '';
    return function string(val) {
        line += ' ' + val;
        console.log('task 1:', line)
    };
}
let stringBuffer = solution1();

stringBuffer('Замыкания'); // Замыкания
stringBuffer('Использовать нужно'); // Замыкания Использовать нужно
stringBuffer('Привет'); // Замыкания Использовать нужно Привет

/*
 *
// * TASK 2
// * Напишите функцию которая принимает в качестве аргумента строку
// * из скобочек и посчитайте, * что все скобочки закрываются корректно
// *
// * */
//
function validBraces(str) {
}

validBraces('(){}[]'); //=> returns true
validBraces('(}'); //=> returns false
validBraces('[(])'); // => returns false
validBraces('([{}])'); //=> returns true

/*
 *
 * TASK 3
 * Напишите функцию которая будет принимать 1 аргумента - функцию
 *
 * Отрефакторите код таким образом, чтобы сообщение 'THE LAST LAST comment',
 * отобразилось в консоле последним
 *
 * */

function makeCallback(fn) {
    for (let i = 1; i <= 10; i++) {
        setTimeout(function() {
            console.log(i);
            if(i === 10){
                fn();
            }
        }, i * 1000);
    }
}

makeCallback(function() {
    console.log('Task 3: THE LAST LAST comment');
});


// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму
 * всех натуральных чисел
 * sum(5) //5+4+3+2+1
 *
 * Вычисления должны кешироваться, если в функцию попадает закешированное
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * */

let obj = {};
function sum(num) {
    let summ = 0;
    if(num in obj){
        console.log('Task SUPER Значение взято из кэша', obj[num]);
    }else {
        for(let i = num; i > 0; i--){
            summ += i;
        }
        obj[num] = summ;
        console.log('Task SUPER:', obj[num]);
    }
}

sum(5); // 15 Значение кешировано
sum(5); // 15 Значение взято из кэша

sum(6); // 21 Кешировано
sum(6); // 21 Значение взято из кэша
