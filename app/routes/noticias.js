module.exports = function(application) {
  application.get('/noticias', (req, res) => {
    const connection = application.config.db();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result) {
      res.render('noticias/noticias', { noticias: result });
    });
  });
}
