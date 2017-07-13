/**
 * Created by user on 12.07.2017.
 */
`use strict`;
/*
 TASK 0
 Отобразите всех лидеров массива.
 *
 * Элемент лидер если он больше чем все последующие элементы
 * после него ( элементы справа ).
 * Последний элемент всегда лидер. Например в массиве [16,17,4,3,5,2]
 * лидеры 17, 5 и 2.
 * */
let solution = (arr) => {
    let someArr = [], obj = {};
    arr.forEach((elem, index) => {
        someArr = arr.slice(index);
        someArr.sort(function (a, b) {
          return a - b;

        }).reverse();
        obj[someArr[0]] = '';
    });
    console.log('TASK 0:', Object.keys(obj));
};

solution([16, 17, 4, 3, 5, 2]);// === [17, 5, 2]
solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8]);// // [67, 45, 35, 8]
solution([12, 10, 12, 8, 7, 6]); // [12, 8, 7, 6]
solution([1, 2, 3, 4, 5, 4]); // [5, 4]
