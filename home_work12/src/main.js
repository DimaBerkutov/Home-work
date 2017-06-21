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
function Http() {
    this.createServer = function (param, param1, param2, param3) {
        // this.listen.call(this, PORT, host);
        console.log('createServer', ctx);
        // console.log(param(ctx));

        console.log('param(ctx)', param(ctx));
        console.log('param1', param1);
        console.log('param2', param2);
        // console.log(host);
        return this
    };
    this.listen = function (PORT, host) {
        // console.log('PORT', PORT);
        // console.log('host', host);
        this.createServer.call(this, PORT = 'PORT', host);
        return this
    };
}
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
let next = 'Function';
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
