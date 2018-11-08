/*
To include the File System module, use the require() method:
The fs.readFile() method is used to read files from a location
*/

/*
Usage :
Node 00_demo_readfile.js
Browse http://localhost:8080/
*/

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('./DemoFiles/demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);