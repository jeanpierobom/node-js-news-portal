/* eslint camelcase: 0 */
module.exports.noticias = function noticias(application, req, res) {
  const connection = application.config.db();
  const noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.getNoticias((error, result) => {
    res.render('noticias/noticias', { noticias: result });
  });
};

module.exports.noticia = function noticia(application, req, res) {
  const connection = application.config.db();
  const noticiasModel = new application.app.models.NoticiasDAO(connection);

  const { id_noticia } = req.query;
  noticiasModel.getNoticia(id_noticia, (error, result) => {
    res.render('noticias/noticia', { noticia: result });
  });
};
