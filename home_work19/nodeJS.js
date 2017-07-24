/**
 * Created by user on 24.07.2017.
 */
`use strict`;
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
	if(request.url == '/src/main.js'){
	console.log(request.url);
		let jsAlert = fs.readFileSync('./main.js');
		response.end(jsAlert);
	}
	const indexHtml = fs.readFileSync('C:/OpenServer/domains/work/home_work19/index.html', 'utf8');
	response.end(indexHtml);
}).listen(3000, 'localhost', err => {
    if(err) throw err;
    console.log('Server is running on http://localhost:3000')
});