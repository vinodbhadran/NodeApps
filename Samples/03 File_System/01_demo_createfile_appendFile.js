/*
The fs.appendFile() method appends specified content to a file.
If the file does not exist, the file will be created:
*/

/*
Usage :
Node 01_demo_createfile_appendFile.js
*/

var fs = require('fs');

fs.appendFile('./DemoFiles/mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});