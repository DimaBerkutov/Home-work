/**
 * Created by Dima on 20.06.2017.
 */

function Phonebook() {
    this.dataBase = [
        {id: 1, name: 'Vasya', lastName: 'Ivanov', phone: '0974532641'},
        {id: 2, name: 'Petr', lastName: 'Jiharev', phone: '0993378130'},
        {id: 3, name: 'Stas', lastName: 'Berejnoy', phone: '0993378130'},
        {id: 4, name: 'Vasya', lastName: 'Rudenko'}
        // {id: 4, name: 'Vasya', lastName: 'Rudenko', phone: '0974525646'}
    ]
}

//Проверка, что телефонный номер содержит только числа
Phonebook.prototype.numberMethod = function (val) {
    for (let i = 0; i < val.length; i++) {
        if (isNaN(+val[i])) {
            console.log('Error, please enter correct phone number');
            return
        }
        this.formatMethod(val);
    }
};
//Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130
Phonebook.prototype.formatMethod = function (val) {
    let newNumber = `(${val.slice(0, 3)}) ${val.slice(3, 5)}-${val.slice(5, 7)}-${val.slice(7, 11)}`;
    console.log(newNumber);
    return newNumber;
};
//Добавление пользователей в объект
Phonebook.prototype.addUser = function (val1, val2, val3, val4) {
    this.dataBase.push({id: val1, name: val2, lastName: val3, phone: val4});
    console.log("3) db after add User", this.dataBase);
};
//Удаление пользователя по имени, фамилии
Phonebook.prototype.deleteUser = function (val1, val2) {
    let deleteDb = [];
    this.dataBase.forEach((elem, index) => {
        if (elem.name !== val1 && elem.lastName !== val2) {
            deleteDb.push(elem);
        }
    });
    this.dataBase = deleteDb;
    console.log("4) db after delete User", this.dataBase);
};
//Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
Phonebook.prototype.searchUser = function (val1) {
    let searchDb = [];
    this.dataBase.forEach((elem, index) => {
        if (elem.name == val1) {
            searchDb.push(elem);
        }
    });
    console.log("5) search User", searchDb);
};
//Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
Phonebook.prototype.editUser = function (val1, val2, val3, val4) {
    this.dataBase.forEach((elem, index) => {
        if (elem.name == val1 && elem.lastName == val2) {
            console.log("6) elem before edit User", elem);
            elem[val3] = val4;
            console.log("6) elem after edit User", elem);
        }
    });
    console.log("6) db after edit User", this.dataBase);
};
//Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
Phonebook.prototype.sortUser = function (val) {
    this.dataBase.sort((a, b) => {
        if (a[val] > b[val]) {
            return 1
        }
        if (a[val] < b[val]) {
            return -1
        }
        // a должно быть равным b
        return 0
    });
    console.log("7) db after sort User", this.dataBase)
};
//Фильтр по указанному свойству
Phonebook.prototype.filterUser = function (val) {
    let filterDb = [];
    this.dataBase.forEach((elem, index) => {
        if ( val in elem ){
            filterDb.push(elem);
        }
    });
    console.log("4) db after filter User", filterDb);
};

let phonebook = new Phonebook;
phonebook.numberMethod("0993378130");
phonebook.addUser(5, 'Marina', 'Tomilina', '0953253554');
phonebook.deleteUser('Petr', 'Jiharev');
phonebook.searchUser('Vasya');
phonebook.editUser('Vasya', 'Ivanov', 'name', 'Nikita',);
phonebook.sortUser('phone');
phonebook.filterUser('phone');
