var express = require('express');
var http = require('http');

var app = express();
 
app.get('/', function(request, response) {
  response.send('Hello World!');
});
 
var port = process.env.PORT || 5000;
http.createServer(app).listen(port, function(){
    console.log('Express server listening on port ' + port);
});