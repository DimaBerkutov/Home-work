/**
 * Created by Dima on 14.06.2017.
 */
/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */
//Функция ничего не возвращает, поэтому z(x) ничего не вернет.
let y = 5;
let x = () => y;

let z = t => {
    let y = 5;
    t();
};
console.log(y);

z(x);

/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать передаваемую строку в html тэг
 *
 *
 * */

let $ = function(teg) {
    return `< $(teg) > < / $(teg) >`;
};
let createBODY = $('body');
let createDIV = $('div');
console.log('task 1 =', createBODY); // <body></body>
console.log('task 1 =', createDIV); // <div></div>
