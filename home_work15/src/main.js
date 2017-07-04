/**
 * Created by user on 03.07.2017.
 */
/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"
*/

// 1) DRY

// DO not reapeat yourself;

// 2) Вы должны учесть все возможные варианты

const solution = (str) => {
    str = str.split('').sort();
    let obj = {};
    str.forEach(elem => {
        obj[elem] = true;
    });
    let newStr = Object.keys(obj).join('');

    let arr = [];
    for(let i = 97; i <= 122; i++){
        arr.push(String.fromCharCode(i))
    }
    arr = arr.join('');

    newStr == arr ? console.log('TASK-0: True') : console.log('TASK-0: False');
};
  solution("qwertyuioplkjhgfdsazxcvbnm"); // true
  solution("ejuxggfsts"); // false
  solution("qpwoeirutyalskdjfhgmznxbcv"); // true
  solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv"); // true
  solution("0123456789abcdefghijklmnop"); // false

/*
 2. Напишите функция которая преобразовывает открывает скобки всех
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов и объектов
 example:
 [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
 [25,10,[10,[15]]] => [25,10,10,15]
 [1, [2, [ {a: "b"} ] ] ] => [1, 2, {a: "b"}]
 */
let start = (arr) => {
    let newArr = [];
    return openBraces(arr, newArr);

};
let openBraces = (arr, newArr) => {
    arr.forEach(elem => {
        if(Array.isArray(elem)) {
            openBraces(elem, newArr);
        }else if(Object.keys(elem).length !== 0){
            Object.keys(elem).forEach(elem => newArr.push(elem));
            Object.values(elem).forEach(elem => newArr.push(elem));

        }else{
            newArr.push(elem);
        }
    });
    return newArr;
};

console.log('TASK-1: ', start([[1,2],[3,[4]],5, 10]));
console.log('TASK-1: ', start([25,10,[10,[15]]]));
console.log('TASK-1: ', start([1, [2, [ {a: "b", c: "d"}] ] ]));
/*
Виртуализировать таблицу, сделать рендер всей таблицы через JavaScript.
Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
*/

let phoneApp =  {
    pages: ['Contacts'],
    contactsColumn: ['Name', 'Last name', 'Email'],
    contactsBase: [
        {
            name: 'Иван',
            lastName: 'Петров',
            mail: 'IvanPetrov@ec.ua'
        },
        {
            name: 'Сергей',
            lastName: 'Иванов',
            mail: 'SergeiSergeev@ec.ua'
        },
        {
            name: 'Александр',
            lastName: 'Александров',
            mail: 'IvanIvanov@ec.ua'
        },
        {
            name: 'Алекс',
            lastName: 'Смирнов',
            mail: 'AlexAlex@ec.ua'
        },
        {
            name: 'Сергей',
            lastName: 'Волков',
            mail: 'VolkovSergey@ec.ua'
        },
        {
            name: 'Елена',
            lastName: 'Лещенко',
            mail: 'ElenaLeshenko@ec.ua'
        },
        {
            name: 'Алекс',
            lastName: 'Сергеев',
            mail: 'ShemyakinaN@ec.ua'
        },
        {
            name: 'Кира',
            lastName: 'Воробьева',
            mail: 'Kira1990@ec.ua'
        }
    ],
    new(tag) {
        return document.createElement(tag);
    },
    renderTable(){
        const tableWrapper = document.body.children[1].children[0].children[1];
        const table = this.new('table');
        table.classList.add('table', 'table-hover', 'contacts');
        tableWrapper.appendChild(table);
        this.tableHeader(table);
        this.tableBody(table);
    },
    tableHeader(table){
        const thead = this.new('thead');
        const trHead = this.new('tr');
        table.appendChild(thead);
        thead.appendChild(trHead);
        this.contactsColumn.forEach(elem => {
            const th = this.new('th');
            trHead.appendChild(th);
            th.textContent = elem;
        });
    },
    tableBody(table){
        const tbody = this.new('tbody');
        table.appendChild(tbody);
        this.contactsBase.forEach(elem => {
        const tr = this.new('tr');
            tbody.appendChild(tr);
            Object.values(elem).forEach(elemText => {
            const td = this.new('td');
            tr.appendChild(td);
                td.textContent = elemText;
            });
            console.log(Object.values(elem));
        });
    }
};
phoneApp.renderTable();