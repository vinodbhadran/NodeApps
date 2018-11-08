/*
The fs.writeFile() method replaces the specified file and content:
*/

/*
Usage :
Node 02_demo_updatefile_writeFile.js
*/

var fs = require('fs');

fs.writeFile('./DemoFiles/mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});