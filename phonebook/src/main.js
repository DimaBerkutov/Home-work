/**
 * Created by Dima on 20.06.2017.
 */
`use strict`

let dataBase = [
    {id: 1, name: 'Vasya', lastName: 'Ivanov', phone: '0974532641'},
    {id: 2, name: 'Petr', lastName: 'Jiharev', phone: '0993378130'},
    {id: 3, name: 'Stas', lastName: 'Berejnoy', phone: '0993378130'},
    {id: 4, name: 'Vasya', lastName: 'Rudenko'}
    // {id: 4, name: 'Vasya', lastName: 'Rudenko', phone: '0974525646'}
];

class Phonebook {
    constructor(){}
    numberMethod(val){
//Проверка, что телефонный номер содержит только числа
        for (let i = 0; i < val.length; i++) {
            if (isNaN(+val[i])) {
                console.log('Error, please enter correct phone number');
                return
            }
            this.formatMethod(val);
        }
    }
    formatMethod(val){
        let newNumber = `(${val.slice(0, 3)}) ${val.slice(3, 5)}-${val.slice(5, 7)}-${val.slice(7, 11)}`;
        console.log(newNumber);
        return newNumber;
    }
}
//Добавление пользователей в объект
class AddUserClass extends Phonebook {
    constructor(){
        super()
    }
    addUser(val1, val2, val3, val4){
        dataBase.push({id: val1, name: val2, lastName: val3, phone: val4});
        console.log("3) db after add User", dataBase);
    }
}
//Удаление пользователя по имени, фамилии
class DeleteUserClass extends Phonebook {
    constructor(){
        super()
    }
    deleteUser(val1, val2){
        let deleteDb = [];
    dataBase.forEach((elem, index) => {
        if (elem.name !== val1 && elem.lastName !== val2) {
            deleteDb.push(elem);
        }
    });
    dataBase = deleteDb;
    console.log("4) db after delete User", dataBase);
    }
}
//Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
class SearchUserClass extends Phonebook {
    constructor(){
        super()
    }
    searchUser(val1){
        let searchDb = [];
        dataBase.forEach((elem, index) => {
            if (elem.name == val1) {
                searchDb.push(elem);
            }
        });
        console.log("5) search User", searchDb);
    }
}
//Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
class EditUserClass extends Phonebook {
    constructor(){
        super()
    }
    editUser(val1, val2, val3, val4){
        dataBase.forEach((elem, index) => {
            if (elem.name == val1 && elem.lastName == val2) {
                console.log("6) elem before edit User", elem);
                elem[val3] = val4;
                console.log("6) elem after edit User", elem);
            }
        });
        console.log("6) db after edit User", dataBase);
    }
}
//Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
class SortUserClass extends Phonebook {
    constructor(){
        super()
    }
    sortUser(val){
       dataBase.sort((a, b) => {
            if (a[val] > b[val]) {
                return 1
            }
            if (a[val] < b[val]) {
                return -1
            }
            // a должно быть равным b
            return 0
        });
        console.log("7) db after sort User", dataBase)
    }
}
//Фильтр по указанному свойству
class FilterUserClass extends Phonebook {
    constructor(){
        super()
    }
    filterUser(val){
       let filterDb = [];
        dataBase.forEach((elem, index) => {
            if ( val in elem ){
                filterDb.push(elem);
            }
        });
        console.log("4) db after filter User", filterDb);
    }
}


let phonebook1 = new Phonebook().numberMethod("0993378130");
let phonebook2 = new AddUserClass().addUser(5, 'Marina', 'Tomilina', '0953253554');
let phonebook3 = new DeleteUserClass().deleteUser('Petr', 'Jiharev');
let phonebook4 = new SearchUserClass().searchUser('Vasya');
let phonebook5 = new EditUserClass().editUser('Vasya', 'Ivanov', 'name', 'Nikita',);
let phonebook6 = new SortUserClass().sortUser('phone');
let phonebook7 = new FilterUserClass().filterUser('phone');
