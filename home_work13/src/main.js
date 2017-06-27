/**
 * Created by Dima on 24.06.2017.
 */
`use strict`

const someWebpackModule = `module.exports = {
    context: '',
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

// class Change {
//     constructor() {}
//
//     newChange(val1, val2, val3) {
//         console.log('TASK-1:', someWebpackModule.replace(/%%HOMEDIR%%/g, val1).replace(/%%APP_DIR%%/g, val2).replace(/%%APPNAME%%/g, val3));
//     }
// }
// class Change1 extends Change {
//     constructor() {
//         super()
//     }
//     newChange(val1, val2, val3) {
//         console.log('TASK-1:', someWebpackModule.replace(/%%HOMEDIR%%/g, val1).replace(/%%APP_DIR%%/g, val2).replace(/%%APPNAME%%/g, val3));
//     }
// }
// class Change2 extends Change {
//     constructor() {
//         super()
//     }
//     newChange(val1, val2, val3) {
//         console.log('TASK-1:', someWebpackModule.replace(/%%HOMEDIR%%/g, val1).replace(/%%APP_DIR%%/g, val2).replace(/%%APPNAME%%/g, val3));
//     }
// }
// change = new Change().newChange("./JavaScript-Basic", "'fixtures/src", "'app.js'");
// change = new Change1().newChange("./JavaScript-Middle", "'application/src", "'bbb.js'");
// change = new Change2().newChange("./JavaScript-Advanced", "'textures/src", "'sfs.js'");

/* Распарсите строку и замените TASK - 1
 %%HOMEDIR%% -> './JavaScript-Basich
 %%APP_DIR%% -> 'fixtures/src
 %%APPNAME%% -> 'app.js'

 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам

 Сделайте несколько экземпляров данной функции
 *
 *h
 * */


/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */

class Http {
    constructor(){}
}
class ChildHttp1 extends Http {
    constructor(){
        super();
    }
    createServer(fn){
        let ctx = {
            req: {val1: 'val1', val2: 'val2'},
            PORT: '',
            url: '',
            res: {val11: 'val11', val12: 'val12'},
            status: 5352,
            message: 'hello',
            header: {
                content_type: 'application/json'
            }
        };
        let next = () => {};
        fn = () => {
            fn.call(this, ctx, () => {});
        };
        console.log(`TASK-2: Server running on https://${ctx} ${next}`);
    }
}
class ChildHttp2 extends Http {
    constructor(){
        super();
    }
    listen(param1, param2){
        console.log(`TASK-2: Server running on https://${param1}:${param2}`);
    }
}
const create = new ChildHttp1().createServer(function (ctx, next) {
    console.log('ctx', ctx);
});
const listenNew = new ChildHttp2().listen(3000, 'localhost');

/*
 *
 * TASK - 3
 *
 * Измените startTimer таким образом, чтобы числа отобразились последовательно
 * с 10 до 1
 * Изменять функцию serverResponse и шапку цикла - нельзя
 *
 * */

let startTimer = () => {
    let timer = 0;
    let serverResponse = i => {
        return setTimeout(function() {
            console.log('TASK-3:', i);
        }, (timer = timer / 2));
    };
    for (let i = 10; i >= 1; i--) {
        timer = timer * i;
        serverResponse(i);
    }
};
startTimer();

// @ SUPER

/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 *
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз),
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */

// class DataBase {
//     constructor() {}
//     query(){
//         let i = 5;
//         let timeout;
//         if(timeout()){
//             timeout = setInterval(() => {
//                 if(i > 0){
//                     console.log(i--);
//                 }else {
//                     console.log('The web server is down');
//                     clearInterval(timeout);
//                 }
//                 console.log('end timeout', timeout);
//             }, 1000)
//         }else{
//                 console.log('error');
//         }
//     }
// }
//
// const dataBase = new DataBase();
// dataBase.query();
// // 5
// // 4
// // 3
// // 2
// // 1
// // console.log('The web server is down') https://www.youtube.com/watch?v=W8_Kfjo3VjU
//
// dataBase.query();
// // 5
// // 4
// dataBase.query();
// // 5
// // 4
// // 3
// // 2
// dataBase.query();
// // 5
// // 4
// // 3
// // 2
// // 1
// // console.log('The web server is down')