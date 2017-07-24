`use strict`;
const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
	console.log(request.url);
	console.log(request.method);
	if(request.url == '/src/node.js'){
		let jsAlert = fs.readFileSync('../alert.js')
		response.end(jsAlert);
	}
	const indexHtml = fs.readFileSync('../index.html');
	response.end(indexHtml);
}).listen(3000, 'localhost', err => {
	if(err)console.log('error');
	console.log('server is running at http://localhost:3000');
});