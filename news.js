console.log('Criando um site de notícias com NodeJS');
var http = require('http');

var server = http.createServer( function(req, res) {
  
  var categoria = req.url;
  console.log(`categoria ${categoria}`);
  if (categoria === '/tecnologia') {
    res.end('<html><body>Notícias de tecnologia</body></html>');
  } else {
    res.end('<html><body>Portal de notícias</body></html>');
  }

});

server.listen(3000);