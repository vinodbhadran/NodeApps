
/*
1). The basic functionality of the "require" function is that it reads a JavaScript file, executes the file, 
and then proceeds to return an object. Using this object, one can then use the various functionalities 
available in the module called by the require function. 
So in this case, since we want to use the functionality of "http"" and we are using the require(http) command.

2). In this 2nd line of code, creating a server application which is based on a simple function. 
This function is called, whenever a request is made to the server application.

3). When a request is received, the function return a "Hello World" response to the client. 
The "writeHead"" function is used to send header data to the client and while the "end"" function will close 
the connection to the client.

4). Then using the "server.listen"" function to make the server application listen to client requests on port no 8080
(can specify any available port over here).
*/

/*
Usage :
open cmd, 
navigate to location, 
run Node hello_world.js,
open browser http://localhost:8080
*/

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080