/**
 * Created by Dima on 24.05.2017.
 */


/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

// function numbersBetween(valueBetween1, valueBetween2) {
//     if(valueBetween2 < valueBetween1){
//         return ('error, value2 < value1');
//     }
//     if (!isNaN(valueBetween1) && !isNaN(valueBetween2)) {
//         let arrBetween = [];
//         valueBetween1++;
//         for (let i = valueBetween1; i < valueBetween2; i++) {
//             arrBetween.push(i);
//         }
//         return arrBetween;
//     }
//     else {
//         return ('error');
//     }
// }
//
// console.log(numbersBetween(1, 5)); // 2,3,4
// console.log(numbersBetween(3, 6)); // 4,5
// console.log(numbersBetween(12, 'gf')); // 13,14
// console.log(numbersBetween(55, 15)); // 11, 12, 13, 14



/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
-> @@ SUPER
Напишите функцию, которая будет возвращать 'Fizz'
если передаваемый параметр кратен 3,
    'Buzz', если передаваемый параметр кратен 5,
'FizzBuzz' - если параметер кратен 3 и 5
Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/

// for(let i = 0; i <= 100; i++){
//     let arrValue = fizzBuzz(i);
//     // fizzBuzz(arrValue);
//     console.log(i, arrValue);
// }
// function fizzBuzz(num) {
//     if(!isNaN(num) && (num % 5) == 0 && (num % 3) == 0){
//         return('FizzBuzz3,5');
//     }
//     if(!isNaN(num) && (num % 3) == 0){
//         return('Fizz3');
//     }
//     if(!isNaN(num) && (num % 5) == 0){
//         return('Buzz5');
//     }
//     return num;
// }

// console.log(fizzBuzzStart(100)); // 1
// console.log(fizzBuzzStart('fdsadsfdafda')); // 'Fizz'



/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

let arrOld = [1, null, undefined, 'str', {}, [], function() {}];
function task3Arr(someValue) {
    let arrType = [];
    for(let i = 0; i < someValue.length; i++){
        arrType.push(typeof (someValue[i]));
    }
    return arrType;
}

console.log(arrOld); // 'Fizz'
console.log(task3Arr(arrOld)); // 'Fizz'
