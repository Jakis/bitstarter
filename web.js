var http = require('http'),
    fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());
var content;
var port = 5000;

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();
        console.log("Listening on " + port);  
    }).listen(port);
});
/*
fs.readFile('./index.html', function (err, indexdata) {
  if (err) throw err;
  content = indexdata;
});
*/
//app.get('/', function(request, response) {
//  response.send('Hello World2!');
//callback(content);
//});


/*
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
*/