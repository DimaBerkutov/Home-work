/**
 * Created by Dima on 28.06.2017.
 */
`use strict`;
/*
 TASK 0. Найдите числа которые повторяются нечетное количество раз в массиве
 solution([12, 23, 34, 12, 12, 23, 12, 45]) -> [34 45]
 solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]) -> [4 100 5000]
 solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]) -> [6 5 9 21]
 solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]) -> [8 16 23 42]
 solution([2, 2, 44, 44]) => []
 */


class OddQuantity{
    constructor(){}
    odd(arr){
        let objOdd = {};
        arr.forEach(elem => elem in objOdd ? objOdd[elem] += 1 : objOdd[elem] = 1);
        this.answer(objOdd);
    }
    answer(obj) {
        let newArr = [];
        for (let key in obj) {
            if (obj[key] % 2 !== 0) {
                newArr.push(key);
            }
        }
        console.log('TASK-0:', newArr);
    }
}
let quantity1 = new OddQuantity().odd([12, 23, 34, 12, 12, 23, 12, 45]);
let quantity2 = new OddQuantity().odd([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]);
let quantity3 = new OddQuantity().odd([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]);
let quantity4 = new OddQuantity().odd([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]);
let quantity5 = new OddQuantity().odd([2, 2, 44, 44]);


/* TASK - 1
 Распарсите строку и замените
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'

 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам

 Сделайте несколько экземпляров данной функции
 *
 *
 * */
const someWebpackModule = `module.exports = {
    context: %%HOMEDIR%%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

class Change {
    constructor() {}

    newChange(val1, val2, val3) {
        console.log('TASK-1:', someWebpackModule.replace(/%%HOMEDIR%%/g, val1).replace(/%%APP_DIR%%/g, val2).replace(/%%APPNAME%%/g, val3));
    }
}
class Change1 extends Change {
    constructor() {
        super()
    }
    newChange(val1, val2, val3) {
        console.log('TASK-1:', someWebpackModule.replace(/%%HOMEDIR%%/g, val1).replace(/%%APP_DIR%%/g, val2).replace(/%%APPNAME%%/g, val3));
    }
}
class Change2 extends Change {
    constructor() {
        super()
    }
    newChange(val1, val2, val3) {
        console.log('TASK-1:', someWebpackModule.replace(/%%HOMEDIR%%/g, val1).replace(/%%APP_DIR%%/g, val2).replace(/%%APPNAME%%/g, val3));
    }
}
change = new Change().newChange("./JavaScript-Basic", "'fixtures/src", "'app.js'");
change = new Change1().newChange("./JavaScript-Middle", "'application/src", "'bbb.js'");
change = new Change2().newChange("./JavaScript-Advanced", "'textures/src", "'sfs.js'");


// const myRegExp = (str, homeDir, appDir, appName) => {}

// myRegExp(someWebpackModule, './JavaScript-Basic', 'fixtures/src', 'app.js')


/*
 TASK - 2
 Сделайте разметку как скриншоте используя HTML
 вам необходимо использовать тэги(!)
 */

/*
 TASK 3
 JavaScript =>
 Создать объект с методами, которые будут динамически генерировать DOM
 Это будет тест, который мы будем разрабатывать в следующих заданиях.
 Сейчас вам нужно только динамически создать html,
 методы должны храниться в одном объекте.
 Изначально на странице должен быть только <body>,
 вызывая методы объекта нужно создать dom-элементы
 */

let app = {
    render(){
        let arr1 = ['Вопрос № 1', 'Вопрос № 2', 'Вопрос № 3'];
        let arr2 = ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'];

        let section = document.createElement('section');
        document.body.appendChild(section);

        let h1 = document.createElement('h1');
        h1.textContent = 'Тест по программированию JS';
        section.appendChild(h1);

        let ol = document.createElement('ol');
        section.appendChild(ol);

        arr1.forEach(elem1 => {
            let li_ol = document.createElement('li');
            let ul = document.createElement('ul');
            ol.appendChild(li_ol);
            li_ol.textContent = elem1;
            li_ol.appendChild(ul);
            arr2.forEach(elem2 => {
                let li_ul = document.createElement('li');
                ul.appendChild(li_ul);

                let label = document.createElement('label');
                li_ul.appendChild(label);
                let input = document.createElement('input');
                label.appendChild(input);
                input.type='checkbox';
                let checkbox = document.createElement('i');
                label.appendChild(checkbox);

                let span = document.createElement('span');
                li_ul.appendChild(span);
                span.textContent = elem2;
            });
        });

        let button = document.createElement('button');
        section.appendChild(button);
        button.type='submit';
        button.textContent = 'Проверить мои результаты';
    }
};
app.render();