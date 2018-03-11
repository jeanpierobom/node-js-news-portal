const connection = require('../../config/db')();

module.exports = function(app) {
  app.get('/noticias', (req, res) => {
    connection.query('select * from noticias', function(error, result) {
      res.render('noticias/noticias', { noticias: result });
    });
  });
}