/**
 * Created by user on 05.07.2017.
 */
`use strict`;

/* 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив
 в двухмерный
 а если массив двухмерный, тогда в трехмерный массив
 // solution([ [1, 'a'],[2, 'b'],[3, 'c'] ]) => [[1, 2, 3],[a, b, c]]
 // solution([ [1, 3, 5],[2, 4, 6] ]) => [ [1, 2],[3, 4],[5, 6] ]
 // solution([[]]) => []

 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
 */
let solution2 = (arr) => {
    let transform = (newElem, elem) => {
        let aaa = [];
        if (elem.length == 3) {
            newElem.forEach((elem1, index) => {
                if (index % 2 !== 0 && index !== 0) {
                    aaa.push([newElem[index - 1], elem1]);
                }
                // console.log('aaa:', aaa);
                return aaa
            });
        } else {
            newElem.forEach((elem1, index) => {
                if ((index + 1) % 3 == 0) {
                    aaa.push([newElem[index - 2], newElem[index - 1], elem1]);
                }
                return aaa
            });
        }
        console.log('Task 0:', aaa);
    };
    arr.reduce((prevElem, elem) => {
        let newElem = prevElem.concat(elem).sort();
        transform(newElem, elem);
        return newElem
    });
};
solution2([[1, 3, 5], [2, 4, 6]]);
solution2([[1, 'a'], [2, 'b'], [3, 'c']]);

/*
 Визуализируйте массив, если в коллекции есть свойство children,
 тогда создайте вложенный лист
 name - свойство h1
 children ul->li
 Используйте innerHTML
 */

const navigation = [
    {name: 'Главная'},
    {
        name: 'Каталог',
        children: [
            {
                name: 'Компьютеры',
                children: [
                    {name: 'Ноутбуки'},
                    {name: 'Планшеты'}
                ]
            }
        ]
    },
    {name: 'Профиль'}
];

const visualArray = arr => {
    let myString = '';
    myString += '<main>';
    let uLConstruct = arr => {
        arr.forEach(elem => {
            myString += '<div>';
            myString += `<h1>${elem.name}</h1>`;
            if (elem.children) {
                myString += '<ul>';
                myString += '<li>';
                uLConstruct(elem.children);
                myString += '</li>';
                myString += '</ul>';
            }
            myString += '</div>';
        });
    };
    uLConstruct(arr);
    myString += '</main>';
    return myString
};
document.body.innerHTML += visualArray(navigation);

/*  ПРИЛОЖЕНИЕ  */
// 1. Форкните репозиторий Саши.
// Добавьте скрипт который будет рисовать всю страницу с таблицей.
// https://github.com/aleksandra-maslennikova/my-phone-book
// удалите на всех страницах bootstrap.js, jquery.js
// по максимуму

// 2. Напишите функцию, которая будет получать последнего родителя
// у элемента, но не body

// 3. При нажатии на кнопку если были выбраны правильные ответы,
// отображайте "ПРАВИЛЬНО" или не правильно
// или отображайте значек X или галочку, возле вопроса