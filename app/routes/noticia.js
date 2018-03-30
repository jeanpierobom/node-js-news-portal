module.exports = function(application) {
  application.get('/noticia', (req, res) => {
    const connection = application.config.db();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia(function(error, result) {
      res.render('noticias/noticia', { noticia: result });
    });
  });
}