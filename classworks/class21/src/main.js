const url = 'https://easycode-js.herokuapp.com/xxx/users';
let userId = [1, 2, 3];
// let main = document.body.querySelector('main');
// let xhr = new XMLHttpRequest();
// let getObj = [];
// let request = (id) => {
//     xhr.addEventListener('readystatechange', () => {
//         if(xhr.readyState == 4){
//             main.innerHTML = xhr.responseText;
//             getObj.push(JSON.parse(xhr.responseText).id);
//             console.log('JSON', JSON.parse(xhr.responseText).name);
//             console.log('JSON', getObj);
//         }
//     });
//     xhr.open('GET', url + id, true);
//     xhr.send();
// }
// userId.forEach(elem => {
//     request(elem);
// });

// userId.map(usersId => {
//     fetch(url).then(data => data.json());
// });

// fetch(url).then(data => (data.json())).then(data => console.log(data));

// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         fullName: '_________Dma',
//         email: '_______dima@dima.com'
//     })
// }).catch(e => {
//     console.log(e);
// });
//     console.log('sucess');
let locStorage = window.localStorage.setItem('name', 'Dima');
console.log(localStorage.getItem('name'));
console.log(localStorage.clear());