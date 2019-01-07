var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('createFile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8088);
console.log('Saved...........!');

fs.appendFile('mynewfile2.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});