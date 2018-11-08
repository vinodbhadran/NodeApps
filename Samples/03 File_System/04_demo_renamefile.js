/*
The fs.rename() method renames the specified file:
*/

/*
Usage :
Node 04_demo_renamefile.js
*/

var fs = require('fs');

fs.rename('./DemoFiles/mynewfile1.txt', './DemoFiles/myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});