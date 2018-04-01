module.exports.index = function index(application, req, res) {
  const connection = application.config.db();
  const noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.get5UltimasNoticias((error, result) => {
    res.render('home/index', { noticias: result });
  });
};
