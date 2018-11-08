/*
The fs.appendFile() method appends the specified content at the end of the specified file:
*/

/*
Usage :
Node 02_demo_updatefile_appendFile.js
*/

var fs = require('fs');

fs.appendFile('./DemoFiles/mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});