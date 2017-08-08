/**
 * Created by user on 24.07.2017.
 */
`use strict`;
/* TASK 0.5
  ГОТОВО: Добавить кота в ваш КОД в Node.js !!
  КОТА ОСТАВИТЬ
  Добавить проверку на существование файла
  
*/
const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
	// console.log(request);
	console.log(request.url);
	console.log(request.method);
	// логи
    // const { url } = request;
    // // console.log(url);
    // let fileDir = `.${url}`;
    // if (url.includes('favicon')) return;
    // if (url === '/') {
     //  fileDir = './index.html';
	// }
	// console.log( fs.existsSync(path) );

	// fs.readFile(__filename, function(err, data) {  
	// 	if (err) {  
	// 		console.error(err);  
	// 	} else {  
	// 		console.log(data);  
	// 	}
	// });  
	if(request.url == '/src/main.js'){
	console.log(request.url);
		let jsAlert = fs.readFileSync('E:/home_work/home_work19/src/main.js');
		response.end(jsAlert);
	}
	const indexHtml = fs.readFileSync('E:/home_work/home_work19/src/index.html', 'utf8');
	response.end(indexHtml);
	
}).listen(3000, 'localhost', err => {
    if(err) throw err;
    console.log('Server is running on http://localhost:3000')
});
