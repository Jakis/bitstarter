var express = require('express');

var app = express.createServer(express.logger());

var indexdata

fs.readFile('/etc/passwd', function (err, indexdata) {
  if (err) throw err;
  console.log(indexdata);
});

app.get('/', function(request, response) {
//  response.send('Hello World2!');
response.send(indexdata);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
