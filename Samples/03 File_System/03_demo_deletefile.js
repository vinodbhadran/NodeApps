/*
The fs.unlink() method deletes the specified file:
*/

/*
Usage :
Node 03_demo_deletefile.js
*/

var fs = require('fs');

fs.unlink('./DemoFiles/mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});