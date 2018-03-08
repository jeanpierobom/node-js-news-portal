/* eslint no-console: 0 */
console.log('Criando um site de notícias com NodeJS');

const http = require('http');

const server = http.createServer((req, res) => {
  const categoria = req.url;
  console.log(`categoria ${categoria}`);
  if (categoria === '/tecnologia') {
    res.end('<html><body>Notícias de tecnologia</body></html>');
  } else {
    res.end('<html><body>Portal de notícias</body></html>');
  }
});

server.listen(3000);
