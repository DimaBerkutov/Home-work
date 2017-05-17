/**
 * Created by Dima on 17.05.2017.
 */


/*
 1. Составить предложение из нижестоящих переменных:
 "Сколько нужно программистов чтобы сделать проект ? 1, 25, команда"
 */
let numbers = [25, 1];
// let project = 'проект'; - не нужная переменная
// let team = `команда`; - кавычки не те (обратные)
let team = 'команда';
let howMuch = 'Сколько';
let sentence = 'нужно программистов чтобы сделать проект ?';

var sentence_example1 = '"' + howMuch + ' ' +  sentence + ' ' + numbers[1] + ', ' + numbers[0] + ', ' + team + '"';

console.log('task 1, Method 1', sentence_example1);


// 2ой способ,
let project = 'проект';
var sentenceMass = sentence.split(' ');
var sentence_example2 = '"' + howMuch + ' ' +  sentenceMass[0] + ' ' + sentenceMass[1] + ' ' + sentenceMass[2] + ' ' + sentenceMass[3] +
    ' ' + project + ' ' + sentenceMass.slice(-1) + ' ' + numbers[1] + ', ' + numbers[0] + ', ' + team + '"';

console.log('task 1, Method 2', sentence_example2);

/*
 2. Составьте предложение из представленного массива
 и выведите предложение в консоль;
 "Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью.
 Он не был больше ни телом, к которому рано или поздно ..."
 */

let array = [
    'Он',
    'был больше ни телом, к которому рано или поздно',
    'он обнаружил',
    'не',
    'Так, когда Будда достиг Просветления',
    '...',
    'что больше',
    'ощущает себя мишенью',
    'не'
];

let homeSentence = '"' + array[4] + ', ' + array[2] + ', ' + array[6] + ' ' + array[3] + ' ' + array[7] + `.
    ${array[0]}` + ' ' + array[8] + ' ' + array[1] + ' ' + array[5] + '"';

console.log('kask 2', homeSentence);


/*
3. Добавьте свойста 4 новых свойства в объект используя
квадратные скобки и точку.
*/

let myObj = {};
myObj.name = 'Dima';
myObj.age = '24';
myObj['mail'] = 'dima@dima.gmail.com';
myObj['skype'] = 'dima42523';

console.log('task 3', myObj);



/*
 4. Используя метод .slice, добавьте недостающие символы в строку
 */

let sliceString = 'Ytube'; //
sliceString = sliceString.slice(0, 1) + 'ou' + sliceString.slice(1, 2).toUpperCase() + sliceString.slice(-3);

console.log('task 4', sliceString); // YouTube


/*
 5. Преобразуйте строку x,
 в максимально удобно читаемый для программиста вид
 */

let frameworks = [4.7, 'Angular', '4Angular', 'React/Redux'];
// let x =
//     'google \
//   released ' +
//     'new version\
//    ' +
//     frameworks[1] +
//     Math.floor(frameworks[0]) +
//     '\
//   But real speed is ' +
//     `${frameworks[frameworks.length - 1]}`;


let task5_1 =
    'google \ released ' + 'new version \ ' + frameworks[1] + Math.floor(frameworks[0]) +
    '\  But real speed is ' + `${frameworks[frameworks.length - 1]}`;
var value1 = frameworks[1] + Math.floor(frameworks[0]);
var value2 = frameworks[frameworks.length - 1];
let task5_2=`google released new version ${value1} But real speed is ${value2}`;

console.log('task 5 Method 2', task5_1);
console.log('task 5 Method 2', task5_2);