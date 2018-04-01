module.exports.noticias = function(application, req, res) {
  const connection = application.config.db();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.getNoticias(function(error, result) {
    res.render('noticias/noticias', { noticias: result });
  });
}

module.exports.noticia = function(application, req, res) {
  const connection = application.config.db();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  var id_noticia = req.query.id_noticia;
  noticiasModel.getNoticia(id_noticia, function(error, result) {
    res.render('noticias/noticia', { noticia: result });
  });
}