/*
Install package using : npm install upper-case
*/

/*
Usage :
Node demo_uppercase.js

Browse 
http://localhost:8080
*/

var http = require('http');
var uc = require('upper-case'); //Include the "upper-case" package the same way you include any other module:

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc("Hello World!")); //convert the output "Hello World!" into upper-case letters:
    res.end();
}).listen(8080);

//console.log(uc("Hello World"));