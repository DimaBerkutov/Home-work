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


// TASK 1
// Сделайте карусель.
// При клике по кнопке "<=" показывается первое изображение по "=>" последнее.
//
// Сделайте слайдер - бесконечным, после третьего изображения снова первое.
// Добавьте внизу цифры с текущим активным изображением.

// const prev = document.getElementsByClassName('prev');
//  next = document.getElementsByClassName('next');
let slide = 0;

let nextSlide = () => {
    let active_slide = document.getElementById('firstTask').children[slide];
    active_slide = active_slide.style.opacity = 0;
    slide += 1;
    active_slide = document.getElementById('firstTask').children[slide];
    if(active_slide == undefined){
        slide = 0;
        active_slide = document.getElementById('firstTask').children[slide];
    }
    active_slide = active_slide.style.opacity = 1;
};
let previousSlide = () => {
    let active_slide = document.getElementById('firstTask').children[slide];
    active_slide = active_slide.style.opacity = 0;
    slide -= 1;
    active_slide = document.getElementById('firstTask').children[slide];
    if(active_slide == undefined){
        slide = 2;
        active_slide = document.getElementById('firstTask').children[slide];
    }
    active_slide = active_slide.style.opacity = 1;
};
next.onclick = () => {
    nextSlide();
};
prev.onclick = () => {
    previousSlide();
};

// @SUPER -> @front-end
// Уберите в стилях li - position:absolute.
// изменяйте свойство transform:translate3d у .carousel, добавьте transition
// и сделайте чтобы картинки передвигались влево и вправо
//
// @PUPER -> переход к первой картинка

let slide_count = 1,
    arr = [],
    position = 0;
arr = document.getElementById('firstTaskSuper').querySelectorAll('li');
let nextSlide1 = () => {
    slide_count += 1;
    position -= 748;
    if(arr.length < slide_count){
        position = 0;
        slide_count = 1;
    }
    console.log(arr.length);
    console.log(slide_count);
    arr.forEach((elem, index) => {
        document.getElementById('firstTaskSuper').children[index].style.transform = `translate3d(${position}px, 0, 0)`;
        document.getElementById('firstTaskSuper').children[index].style.transition = '0.5s';
    });
};
let previousSlide1 = () => {
    position += 748;
    slide_count -= 1;
    if(slide_count == 0){
        position = -(748 * arr.length - 748);
        slide_count = 3;
    }
    console.log(position);
    console.log(arr.length);
    console.log(slide_count);
    arr.forEach((elem, index) => {
        document.getElementById('firstTaskSuper').children[index].style.transform = `translate3d(${position}px, 0, 0)`;
        document.getElementById('firstTaskSuper').children[index].style.transition = '0.5s';
    });
};
next1.onclick = () => {
    nextSlide1();
};
prev1.onclick = () => {
    previousSlide1();
};

/*
* TASK 2
* Сделайте класс, который будет иметь метод topStyle
* метод topStyle принимает объект с CSS стилями и добавляет в <head>
*   новый элемент с данными стилями
*
 .topStyle('fetch', {backgroundColor:'blue'})
*
* */

class Task2Class{
    constructor(){}
    topStyle(text, stylesObj){
        document.body.querySelector('header').insertAdjacentHTML('afterbegin', '<button id="newButton"></button>');
        let newBlock = document.getElementById('newButton');
        let values =  Object.values(stylesObj);
        Object.keys(stylesObj).forEach((elem, index) => {
            newBlock.style[elem] = values[index];
        });
    }
}
const newTask = new Task2Class().topStyle('fetch', {backgroundColor:'blue', width: '100px', height: '50px'});

/* @SUPER
 *
 * Напишите функцию которая будет преобразовывать CSS-свойство в
 * ликвидное JS свойство
 *
 * background-color -> backgroundColor
 * margin-left -> marginLeft
 * flex-basis -> flexBasis
 *
 * ...etc
 *
 * сделать через regExp
 *
 * */

const regExpFunc = (string, a1, a2, a3) => [a1, a2.toUpperCase(), a3].join('');
let newRegExpFunc1 = 'background-color'.replace(/(\w*)-(\w)(\w*)/g, regExpFunc);
let newRegExpFunc2 = 'margin-left'.replace(/(\w*)-(\w)(\w*)/g, regExpFunc);
let newRegExpFunc3 = 'flex-basis-color'.replace(/(\w*)-(\w)(\w*)/g, regExpFunc);
console.log('@SUPER', newRegExpFunc1);
console.log('@SUPER', newRegExpFunc2);
console.log('@SUPER', newRegExpFunc3);