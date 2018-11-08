/*
The fs.writeFile() method replaces the specified file and content if it exists.
If the file does not exist, a new file, containing the specified content, will be created:
*/

/*
Usage :
Node 01_demo_createfile_writeFile.js
*/

var fs = require('fs');

fs.writeFile('./DemoFiles/mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});