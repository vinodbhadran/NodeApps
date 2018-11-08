/*
There is a very good module for working with file uploads, called "Formidable".
The Formidable module can be downloaded and installed using NPM:

npm install formidable
npm install fs-extra
*/

/*
Usage :
Node demo_uploadfiles.js

Browse 
http://localhost:8080
*/

var formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    fs   = require('fs-extra'),
    path = require('path');
 
http.createServer(function(req, res) {
  /* Process the form uploads */
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
 
    form.on('progress', function(bytesReceived, bytesExpected) {
        var percent_complete = (bytesReceived / bytesExpected) * 100;
        console.log(percent_complete.toFixed(2));
    });
 
    form.on('error', function(err) {
        console.error(err);
    });
 
    form.on('end', function(fields, files) {
        var temp_path = this.openedFiles[0].path; //Temporary location of our uploaded file
        var file_name = new Date().getTime()+"-"+this.openedFiles[0].name; //The file name of the uploaded file
        var new_location = "./UploadedFiles/"; //Location where we want to copy the uploaded file
 
        fs.copy(temp_path, new_location + file_name, function(err) {  
            if (err) {
                console.error(err);
                fs.unlink(temp_path, function (err) {
                  if (err) {
                      console.error(err);
                      console.log("TROUBLE deletion temp !");
                  } else {
                      console.log("success deletion temp !");
                  }
              });
            } else {
              console.log('created');
            }
        });
    });
    return;
  }
  //HTML form, with an upload field
  fs.readFile("./Views/Index.html", function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);