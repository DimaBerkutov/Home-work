/**
 * Created by Dima on 10.06.2017.
 */
'use strict';

// Legolas Task !

// TASK 1
// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --

/*
 Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 * */

let developer1 = {
    skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
    requires: ['Node.js', 'JavaScript', 'OOP'],
    goodDev: goodDev
};
let developer2 = {
    experience: [
        { technology: 'java' },
        { technology: 'c++' },
        { technology: 'aws' },
        { technology: 'docker' }
    ],
    requires: ['java', 'json', 'c++', 'JavaScript'],
    goodDev: goodDev
};

function goodDev(dev) {
    if('skills' in this){
        this.requires.forEach((elem, index) => {
            if(this.skills.includes(elem)){
                console.log('required:', elem, 'success');
            }
            else{
                console.log('required:', elem, 'fail');
            }
        });
    }
    if('experience' in this){
        this.experience.forEach((elem, index) => {
            if(this.requires.includes(elem.technology)){
                console.log('required:', elem.technology, 'success');
            }
            else{
                console.log('required:', elem.technology, 'fail');
            }
        });
    }
}

let developers = [developer1, developer2];
developers.forEach((dev, index) => {
    console.log(`developer ${index + 1}`);
    dev.goodDev();
});

// developer 1
// required: Node.js ... success
// required: JavaScript ... success
// required: OOP ... success
// ---

// developer 2
// required: json ... fail
// required: JavaScript ... success
// required: Java ... success
// required: OOP ... success


/*
 *
 * TASK 2
 *
 * Создайте объект содержащий коллекцию элементов с одинаковыми
 * свойстами и разными значениями!
 * Напишите функцию принимает 1 аргумент сортирует объект по
 * переданному значению
 *
 * При вызове функции используйте this
 *
 * */

let myObject = {
    database: [
        { age: 100, name: 'b' },
        { age: 15, name: 'c' },
        { age: 25, name: 'a' }
    ],
    myFilter: function (val) {
        return this.database.sort((a, b) => {
            console.log('a =', a[val], 'b =', b[val]);
            if (a[val] > b[val]) {
                return 1;
            }
            if (a[val] < b[val]) {
                return -1;
            }
            // a должно быть равным b
            return 0;
        });
    }
};
// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}

console.log(myObject.myFilter('age'));
console.log(myObject.myFilter('name'));

// {age:25, name:a}, {age:100, name: b} ...

/*
 * TASK 3
 *
 * Перепишите homework 5 с использованием методов массивов и
 * => arrow functions
 *
 *
 */


/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 .сoncat();
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];

function moveZeroToEnd(arr) {
    let notNullArr = [];
    let nullArr = [];
    arr.forEach((elem) => {
        if(elem !== 0){
            notNullArr.push(elem) ;
        }
        else{
            nullArr.push(elem) ;
        }
    });
    let newMass = notNullArr.concat(nullArr);
    return newMass;
}
console.log('task 3_1', moveZeroToEnd(arr1));

/*
 2. Верните сумму двух найменьших чисел в массиве

 let [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10

 */

let arr11 = [10,20,30,1,31,11,10];
function minimalNumber(arr) {
    arr.sort((a, b)  =>  a - b);
    return arr[0] + arr[1];
}

console.log('task  3_2', minimalNumber(arr11));

/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */


function nameShuffler(value) {
    return value.split(' ').reverse().reduce((prevElem, elem) => prevElem + ' ' + elem);
}
console.log('task  3_3', nameShuffler('john McClane'));

/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

// let someArr = ['jo', 'nelson', 'jurie'];
// function capitalizeArr(value) {
//     return value.map((elem) => elem.toUpperCase());
// }
// console.log('task  3_4', capitalizeArr(someArr));



//@SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности

 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24
 [4, 6, 8, 10] => 2 // число сначала
 [0,16,24,32] => 8

 */

function random(arr) {
    let step = (arr[arr.length - 1] - arr [0]) /arr.length;
    return arr.reduce((prevElem, elem, index) => {
    // console.log('params', step, arr[0], elem);
    // console.log('find value', prevElem + step, elem, step);
        if(prevElem + step != elem){
            console.log('find value', arr[0] + step);
        }
    });
    // let currentStep = step;
    // return arr.forEach((elem, index) => {
    //     // console.log('params', step, arr[0], elem);
    //     console.log('find value', arr[0] + step, elem, step);
    //     if(arr[0] + step == elem){
    //         // console.log('find value', arr[0] + step);
    //     }
    //     step = step + currentStep;
    // });
}

console.log('task  3_super1', random([1, 3, 5, 9]));
console.log('task  3_super1', random([0, 8, 16, 32]));
console.log('task  3_super1', random([0, 16, 24, 32]));
console.log('task  3_super1', random([4, 6, 8, 10]));
/*



 /*
 2. Напишите функция которая преобразовывает/открывает скобки всех
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов

 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]

 */


function start(arr){
    let newArr = [];
    return openBraces(arr, newArr);
}
function openBraces(arr, newArr) {
    arr.forEach((elem) => {
        if(Array.isArray(elem)) {
            openBraces(elem, newArr);
        }else{
            newArr.push(elem);
        }
    });
    return newArr;
}

console.log('task  3_super2', start([[1,2],[3,[4]],5, 10]));
console.log('task  3_super2', start([25,10,[10,[15]]]));

////////@ TODO -- LVL Strong Junior
/*
 *
 * TASK 1
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с которым связывается метод
 *  - Объявление привязываемого метода( функция )
 *
 *
 *  Если количество аргументов у функции fn совпадает с переданными
 *  параметрами тогда сохраняет метод в замыкании
 *  и привязывает функцию к методу объекта
 *
 *  при вызове одного и того же метода с разным количеством аргументов,
 *  должно давать различный результат
 *
 * */

// let junior = {};
//
// // fn.length == arguments.length
//
// function addMethod(object, name, fn) {}
//
// addMethod(junior, 'ok', function() {
//     console.log('zero arguments');
// });
// addMethod(junior, 'ok', function(one) {
//     console.log('one arguments');
// });
// addMethod(junior, 'ok', function(one, two) {
//     console.log('two arguments');
// });
// addMethod(junior, 'ok', function(one, two, three) {
//     console.log('three arguments');
// });
//
// junior.ok(); //'zero arguments'
// junior.ok(1); //'one arguments'
// junior.ok(1, 2); // 'two arguments'
// junior.ok(1, 2, 3); // 'three arguments'