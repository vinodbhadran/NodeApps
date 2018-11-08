//URL module is a built-in module for handling Query String

/*
Usage :
open cmd, 
navigate to location, 
run Node demo_queryString.js,
open browser http://localhost:8080/?year=2017&month=July
*/

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);