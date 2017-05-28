/**
 * Created by Dima on 28.05.2017.
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
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            notNullArr.push(arr[i]) ;
        }
        else{
            nullArr.push(arr[i]) ;
        }
    }
    let newMass = notNullArr.concat(nullArr);
    return newMass;
}
console.log('task 1', moveZeroToEnd(arr1));

/*
 2. Верните сумму двух найменьших чисел в массиве

 let [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10

 */

let arr11 = [10,20,30,1,31,11,10];
function minimalNumber(arr) {
    arr.sort();
    let result = arr[0] + arr[1];
    return result;
}

console.log('task 2', minimalNumber(arr11));

/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */


function nameShuffler(value) {
    value = value.split(' ').reverse();
    return value[0] + ' ' + value[1];
}
console.log('task 3', nameShuffler('john McClane'));
/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

let someArr = ['jo', 'nelson', 'jurie'];
function capitalizeArr(value) {
    let capitalArr = [];
    for(let i = 0; i < value.length; i++){
        value[i][0].toUpperCase();
        capitalArr.push(value[i].toUpperCase());
    }
    return capitalArr;
}
console.log('task 4', capitalizeArr(someArr));



//@SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности

 example:
 [1,3,5,9] => 7
 [0,8,16,32] => 24
 [4, 6, 8, 10] => 2 // число сначала
 [0,16,24,32] => 8

 */

// function random(arr) {
//
// }
//
// console.log('task super1', random([1, 3, 5, 9]));
// console.log('task super1', random([0, 8, 16, 32]));
// console.log('task super1', random([0, 16, 24, 32]));
// console.log('task super1', random([4, 6, 8, 10]));
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
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
                openBraces(arr[i], newArr);
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log('task super2', start([[1,2],[3,[4]],5, 10]));
console.log('task super2', start([25,10,[10,[15]]]));