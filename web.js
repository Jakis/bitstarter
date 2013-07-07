fs = require('fs'); 

var express = require('express');

var app = express.createServer(express.logger());

var content;

function readContent(callback) {
    fs.readFile("./index.html", function (err, content) {
        if (err) return callback(err)
        callback(content)
    })
}

readContent(function (content) {
    console.log(content)
})

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

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
