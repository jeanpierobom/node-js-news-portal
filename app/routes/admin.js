module.exports = function(application) {
  application.get('/formulario_inclusao_noticia', (req, res) => {
    res.render('admin/form_add_noticia');
  });

  application.post('/noticias/salvar', (req, res) => {
    const noticia = req.body;

    const connection = application.config.db();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result) {
      res.redirect('/noticias');
    });
  });
  
}
