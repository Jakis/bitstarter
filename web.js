fs = require('fs'); 
var express = require('express');
var app = express.createServer(express.logger());
var indexdata;
var content;


fs.readFile('./index2.html', 'utf-8', function (err, indexdata) {
//fs.readFile('./index.html', 'utf-8', function (err, indexdata) {
  if (err) throw err;
  content = indexdata;
});

app.get('/', function(request, response) {
response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
