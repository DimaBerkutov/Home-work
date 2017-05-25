/**
 * Created by Dima on 24.05.2017.
 */


/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(valueBetween1, valueBetween2) {
    if(valueBetween2 < valueBetween1){
        return ('error, value2 < value1');
    }
    if (!isNaN(valueBetween1) && !isNaN(valueBetween2)) {
        let arrBetween = [];
        valueBetween1++;
        for (let i = valueBetween1; i < valueBetween2; i++) {
            arrBetween.push(i);
        }
        return arrBetween;
    }
    else {
        return ('error');
    }
}

console.log('task1 ',numbersBetween(1, 5)); // 2,3,4
console.log('task1 ',numbersBetween(3, 6)); // 4,5
console.log('task1 ',numbersBetween(12, 'gf')); // 13,14
console.log('task1 ',numbersBetween(55, 15)); // 11, 12, 13, 14



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

function someFunction (someValue) {
    if(!isNaN(someValue)){
        let arrValue = [];
        for(let i = 0; i <= someValue; i++){
            arrValue.push(fizzBuzz(i));
        }
        return fizzBuzz(arrValue);
    }
    return someValue;
}
function fizzBuzz(num) {
    if(num && (num % 5) == 0 && (num % 3) == 0){
        return('FizzBuzz3,5');
    }
    if(num && (num % 3) == 0){
        return('Fizz3');
    }
    if(num && (num % 5) == 0){
        return('Buzz5');
    }
    return num;
}

console.log('task2 ', someFunction(100)); // 1
console.log('task2 ', someFunction('fdsadsfdafda')); // 'Fizz'



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

console.log('task3 ',arrOld); // 'Fizz'
console.log('task3 ',task3Arr(arrOld)); // 'Fizz'




/*
 @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN,
 тогда добавляет данному объекту свойство unknownAge: true

 На основании нового массива, создайте новую функцию, которая вернет новый массив
 содержащий все объекты содержащие свойство unknownAge:true
 */

let array = Array.from({ length: 35 }).map(
    (value, index) => (index % 2 ? { age: index + 2 } : { age: NaN })
);

function ageFunction() {
    for(let i = 0; i < array.length; i++) {
        for(let key in array[i]){
            let arrKey = array[i];
            // console.log('key = ', key);
            if (isNaN(arrKey[key])) {
                arrKey.unknownAge = true;
            }
        }
    }
    // newMassFunction(array);
    return newMassFunction(array);
}
function newMassFunction(incomeArr) {
    var newArr = [];
    for(let i = 0; i < array.length; i++) {
        if('unknownAge' in incomeArr[i] && incomeArr[i]['unknownAge']){
            newArr.push(incomeArr[i]);
        }
    }
    return newArr;
}


console.log('task4 ', 'ageFunction =', ageFunction());

console.log('task4 ', array); // [ {age:NaN}, {age:3}, {age:NaN}, {age:5}, {age:NaN}, {age:7} ....]
console.log('task4 ', array.length); // 35



// Unnecessary values
// let arr = ['privet', 12, {}, [1, 2]];
// let arr2 = ['privet', 12, {}, [1, 2]];
//
// function returnArr(argument) {}
// returnArr(arr);
// returnArr(arr2);