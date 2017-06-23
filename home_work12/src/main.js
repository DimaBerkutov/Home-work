/**
 * Created by Dima on 21.06.2017.
 */
'use strict';

/*
 *
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 *
 * listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */
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
let next = function () {};

function Http() {
    this.createServer = function (param1, param2, param3) {
        // this.listen.call(this, PORT, host);
        // console.log('this', this);
        // console.log('this', this.createServer);
        // console.log('ctx1', ctx);
        // console.log('param1', param1);
        // console.log('param2', param2);
        // console.log('param3', param3);
        console.log(`Task 0: Server running on https://${param1}:${param2}`);
        return this
    };
    this.listen = function (PORT, host) {
        this.createServer.call(this, PORT, host);
        this.port = PORT;
        this.host = host;
        return this
    };
}

const server = new Http().createServer(function(ctx, next) {
    console.log('ctx', ctx);
}).listen(3000, 'localhost');
// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплатой, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human

function Human(val1, val2, val3, val4, val5) {
    this.name = 'Anton';
    this.age = 12;
    this.sex = 'Male';
    this.height = 173;
    this.weight = 67;
}

Worker.prototype = Object.create(Human.prototype);
Student.prototype = Object.create(Human.prototype);

function Worker(val1, val2, val3) {
    Human.call(this, val1, val2, val3);
    this.placeWork = val1;
    this.salary = val2;
    this.work = (val3) => val3;
}
function Student(val1, val2, val3) {
    Human.call(this, val1, val2, val3);
    this.placeLearn = val1;
    this.scholarship = val2;
    this.watchTVshows = (val3) => val3;
}
let worker = new Worker('gardener', 3213, 'working');
let student = new Student('institute', 346, 'studying');
console.log('Task 1: worker: ', worker);
console.log('Task 1: student: ', student);