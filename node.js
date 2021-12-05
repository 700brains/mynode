var http = require('http');
var uc = require('upper-case');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("The date and time are currently: " + dt.myDateTime()));
  res.end();
}).listen(8080);