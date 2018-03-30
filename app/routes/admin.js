module.exports = function(application) {
  application.get('/formulario_inclusao_noticia', (req, res) => {
    res.render('admin/form_add_noticia', { validacao: {}, noticia: {} });
  });

  application.post('/noticias/salvar', (req, res) => {
    const noticia = req.body;

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data dos Fatos é obrigatória').notEmpty();
    //req.assert('data_noticia', 'Data dos Fatos é obrigatória').isDate({ format: 'YYYY-MM-DD' });
    req.assert('noticia', 'Notícia é obrigatória').notEmpty();

    let erros = req.validationErrors();
    if (erros) {
      res.render('admin/form_add_noticia', { validacao: erros, noticia });
      return;
    }

    const connection = application.config.db();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result) {
      res.redirect('/noticias');
    });
  });
  
}
