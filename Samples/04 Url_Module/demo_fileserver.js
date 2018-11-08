/*
Combine FileSystem, URL and HTTP module
*/

/*
Usage :
Node demo_fileserver.js

Browse 
1) http://localhost:8080/summer.html
2) http://localhost:8080/winter.html
3) http://localhost:8080/test
*/

var http = require('http'); //http module
var url = require('url'); //url module
var fs = require('fs'); //fileSystem module

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "./Views" + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);