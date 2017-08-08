`use strict`;
const http = require('http');
const fs = require('fs');
http.createServer((request, response) => {
    
}).listen(3000, 'localhost', err => {
    if(err)console.log('err');
    console.log('server is running on localhost:3000');
});