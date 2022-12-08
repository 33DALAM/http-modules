console .log ("safe city office")



var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('heloo world!');
}).listen(6060); 