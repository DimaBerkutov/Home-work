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
// let y = 5;
// let x = () => y;
//
// let z = t => {
//     let y = 5;
//     t();
// };
// console.log(y);
//
// z(x);

/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать передаваемую строку в html тэг
 *
 *
 * */

// let $ = function (teg) {
//     // return "<" + teg + ">" + "<" + "/" + teg + ">"
//     return `<${teg}></${teg}>`;
// };
// let createBODY = $('body');
// let createDIV = $('div');
// console.log('task 1 =', createBODY); // <body></body>
// console.log('task 1 =', createDIV); // <div></div>

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

// var ezjQuery = {
//     tegsString: '',
//     add: (teg) => {
//     ezjQuery.tegsString += `<${teg}></${teg}>`;
//         console.log(ezjQuery.tegsString);
//     }
// };
// ezjQuery.add('body') //<body></body>
// ezjQuery.add('div') //<body></body><div></div>
// ezjQuery.add('h1'); //<body></body><div></div><h1></h1>


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
// var ezjQuery2 = {
//     tegsString1: '',
//     tegsString2: '',
//     add: (teg, text) => {
//         ezjQuery2.tegsString1 = `${ezjQuery2.tegsString1}<${teg}>`;
//         ezjQuery2.tegsString2 = `</${teg}>${ezjQuery2.tegsString2}`;
//         console.log(text === undefined ? ezjQuery2.tegsString1 + ezjQuery2.tegsString2 : ezjQuery2.tegsString1 + text + ezjQuery2.tegsString2);
//     },
//     render: () =>{
//         ezjQuery2.tegsString1 = '';
//         ezjQuery2.tegsString2 = '';
//         console.log('render');
//     }
// };
// var helloList = ezjQuery2
// helloList.add('body') // <body></body>
// helloList.add('div') // <body><div></div></body>
// helloList.add('ul') // <body><div><ul></ul></div></body>
// helloList.add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
// helloList.render();
// console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
// //  Обратите внимание, что после вызова render создание строки началось сначала
//
// var bodyDiv = ezjQuery2
// helloList.add('body') //<body></body>
// helloList.add('div') //<body><div></div></body>
// helloList.render();
// console.log(bodyDiv); //<body><div></div></body>
//
// //Для выполнивших все задания
// // сделайте document.write(helloList) увидите результат :)
//
// document.write(helloList);

// @SUPER
//  Переименуйте объект ezjQuery в $.
//  Создание перевого метода должено быть без метода

 var $ = {
     tegsString1: '',
     tegsString2: '',
     add: (teg, text) => {
         $.tegsString1 = `${$.tegsString1}<${teg}>`;
         $.tegsString2 = `</${teg}>${$.tegsString2}`;
         console.log(text === undefined ? ezjQuery2.tegsString1 + ezjQuery2.tegsString2 : ezjQuery2.tegsString1 + text + ezjQuery2.tegsString2);
     },
     render: () =>{
         $.tegsString1 = '';
         $.tegsString2 = '';
         console.log('render');
     }
 };
//  var helloList = ezjQuery2
//  helloList.add('body') // <body></body>
//  helloList.add('div') // <body><div></div></body>
//  helloList.add('ul') // <body><div><ul></ul></div></body>
//  helloList.add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
//  helloList.render();
//  console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
// // Обратите внимание, что после вызова render создание строки началось сначала
//
//  var bodyDiv = ezjQuery2
//  helloList.add('body') //<body></body>
//  helloList.add('div') //<body><div></div></body>
//  helloList.render();
//  console.log(bodyDiv); //<body><div></div></body>

$('body').add('li', 'hi').render() // <body><li>hi</li></body>

