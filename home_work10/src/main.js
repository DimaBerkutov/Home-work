/**
 * Created by Dima on 14.06.2017.
 */
'use strict';
/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */
console.log('task 0: Функция ничего не возвращает, поэтому z(x) ничего не вернет.');
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

let $ = function (teg) {
    // return "<" + teg + ">" + "<" + "/" + teg + ">"
    return `<${teg}></${teg}>`;
};
let createBODY = $('body');
let createDIV = $('div');
console.log('task 1:', createBODY); // <body></body>
console.log('task 1:', createDIV); // <div></div>

/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
 // obj.method().method().method()
 ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */

var ezjQuery = {
    tegsString: '',
    add: (teg) => {
    ezjQuery.tegsString += `<${teg}></${teg}>`;
        console.log(ezjQuery.tegsString);
    }
};
console.log('task 2:');
ezjQuery.add('body') //<body></body>
ezjQuery.add('div') //<body></body><div></div>
ezjQuery.add('h1'); //<body></body><div></div><h1></h1>


/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий тэг помещался внутри
 * предыдущего !
 ---
 * И добавьте объекту ezjQuery метод render, который будет возвращать
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать информацию внутри тэга
 *
 *
 */
//
var ezjQuery2 = {
    tegsString1: '',
    tegsString2: '',
    add: function(teg, text){
        this.tegsString1 = `${this.tegsString1}<${teg}>`;
        this.tegsString2 = `</${teg}>${this.tegsString2}`;
        console.log(text === undefined ? this.tegsString1 + this.tegsString2 : this.tegsString1 + text + this.tegsString2);
        return this
    },
    render: function() {
        this.tegsString1 = '';
        this.tegsString2 = '';
        console.log('render', this.tegsString1, this.tegsString2);
        return this
    }
};
console.log('task 3:');
var helloList = ezjQuery2
helloList.add('body') // <body></body>
    .add('div') // <body><div></div></body>
    .add('ul') // <body><div><ul></ul></div></body>
    .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
    .render();
console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
//  Обратите внимание, что после вызова render создание строки началось сначала

var bodyDiv = ezjQuery2
helloList.add('body') //<body></body>
    .add('div') //<body><div></div></body>
    .render();
console.log(bodyDiv); //<body><div></div></body>

//Для выполнивших все задания
// сделайте document.write(helloList) увидите результат :)

document.write(helloList);

// @SUPER
//  Переименуйте объект ezjQuery в $.
//  Создание перевого метода должено быть без метода

 var $1 = {
     tegsString1: '',
     tegsString2: '',
     add: notMetodFunc,
     render: () =>{
         $1.tegsString1 = '';
         $1.tegsString2 = '';
         console.log('render');
     }
     return this
 };
function  notMetodFunc(teg, text){
    this.tegsString1 = `${this.tegsString1}<${teg}>`;
    this.tegsString2 = `</${teg}>${this.tegsString2}`;
    console.log(text === undefined ? this.tegsString1 + this.tegsString2 : this.tegsString1 + text + this.tegsString2);
}
console.log('SUPER:');
 var helloList = $1
 helloList.add('body') // <body></body>
 helloList.add('div') // <body><div></div></body>
 helloList.add('ul') // <body><div><ul></ul></div></body>
 helloList.add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
 helloList.render();
 console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
// Обратите внимание, что после вызова render создание строки началось сначала

 var bodyDiv = $1
 helloList.add('body') //<body></body>
 helloList.add('div') //<body><div></div></body>
 helloList.render();
 console.log(bodyDiv); //<body><div></div></body>

// $('body').add('li', 'hi').render() // <body><li>hi</li></body>

