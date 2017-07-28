`use strict`;
/* Алгоритмы
TASK 0
Проверьте 2 строки и определите изоморфные ли они.
Две строки являются изоморфными если все их символы 
s, могут быть заменены t.
Все символы одной строки могут быть заменены такими же символами другой строки, независимо от 
порядка символов.
Given two strings, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character but a character may map to itself."
arguments ["egg", "add"] => expected true
arguments ["foo", "bar"] => expected false
arguments ["paper", "title"] => expected true
arguments ["ca", "ab"] => expected true
arguments ["aa", "bb"] => expected true
arguments ["aedor", "eiruw"] => expected true
*/




/*
Добавить возможность из формы, ДОБАВЛЯТЬ Пользователя на сервер/*
TASK 1
Изучите API http://easycode-js.herokuapp.com/
Зарегистрируйте 10 пользователей с разными именами и email 
И ТЕЛЕФОНАМИ! адресами.
fullName - должно содержать имя и фамилию 'John Smith'
Используйте XMLHttpRequest => POST

*/
const url = 'http://easycode-js.herokuapp.com/';
const button = document.querySelector('button');
const button2 = document.querySelector('.btn2');
const app = document.querySelector('.app');

const serverRequestGET = () => {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener('readystatechange', () => {

    console.log(xhr.responseText);
    if (xhr.readyState === 4) {
      app.innerHTML = '<hr />' + xhr.responseText;
    }
  });

  xhr.open('GET', url + 'DimaBerkutov/users', true);
  xhr.send();
};

button.addEventListener('click', () => {
  serverRequestGET();
});

const newUser = {
    fullName: 'Dima',
    email: 'faffaf@ukr.net'
};
button2.addEventListener('click', () => {
  let xhrPOST = new XMLHttpRequest();

  xhrPOST.addEventListener('readystatechange', () => {
    if (xhrPOST.readyState === 4) {
      console.log('response: ', JSON.parse(xhrPOST.response));
      console.log('responseText: ', xhrPOST.responseText);
    }
  });

  xhrPOST.open('POST', url + 'DimaBerkutov/users', true);
  xhrPOST.setRequestHeader('Content-Type', 'application/json');

  xhrPOST.send(JSON.stringify(newUser));
});

myForm.addEventListener('submit', e => {
  e.preventDefault();
  const { name, email } = myForm.elements;

  if (!name.value) {
    alert('ЗАПОЛНИТЕ ИМЯ! ');
  }else if (!email.value) {
    alert('ЗАПОЛНИТЕ EMAIL! ');
  }else{
    newUser.fullName = name.value;
    newUser.email = email.value;
      console.log(newUser);
  }
});