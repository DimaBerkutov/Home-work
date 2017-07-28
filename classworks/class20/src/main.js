const url = 'https://easycode-js.herokuapp.com/';
let xhr = new XMLHttpRequest();
let getObj = {};
let button = document.getElementById('btn');
let div = document.querySelector('div');
button.addEventListener('readystatechange', () => {
    if(xhr.responseState == 4 && xhr.DONE == 4){
        return xhr.responseText
    }
        console.log('JSON', xhr.responseText);
        getObj = JSON.stringify(xhr.responseText);
});
// Текст запроса апрос
xhr.open('GET', url + 'test', true);
// Отправка запроса
xhr.send();
button.addEventListener('click', () => {
    div.insertAdjacentHTML('afterend', xhr.responseText);
    console.log('obj', getObj);
});


let button2 = document.getElementById('btn2'),
    newUser = {
        fullName: '_________Dima',
        email: 'fdasf@dsfds.com'
    }
button2.addEventListener('click', () => {
    let xsrPost = new XMLHttpRequest();
    xsrPost.addEventListener('readystatechange', () => {
        if(xsrPost.responseState == 4 && xsrPost.DONE == 4){
            console.log('JSON', xsrPost.responseText);
            console.log(JSON.parse(xsrPost.response));
            console.log(JSON.parse(xsrPost.responseText));
        }
    });
    xsrPost.open('POST', url + 'dima/users', true);
    xsrPost.setRequestHeader('Content-Type', 'application/json');
    xsrPost.send(JSON.stringify(newUser));
});



let form = document.getElementById('inputs');
    console.log(form);
let fullName = form.fullName;
let email = form.email;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!form.fullName && !form.email){
        alert('dfsfs');
    console.log(fullName, email);
    }
});