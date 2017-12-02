var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;
  fs.readFile(__dirname + path, function(err, data){
    if (err) {
      res.writeHead(404, {'Content-Type' : 'text/html'});
      res.write('Not Found');
      res.end();
    } else {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.write(data);
      res.end();
    }
  });
}).listen(2712);