/*
Node.js has a built-in module called HTTP, 
which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
*/

/*
Usage :
open cmd, 
navigate to location, 
run Node demo_module.js,
open browser http://localhost:8080
*/

var http = require('http');

var dt = require('./myfirstmodule'); // './' to locate the module

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);