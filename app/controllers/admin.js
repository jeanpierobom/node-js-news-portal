/* eslint camelcase: 0 */
module.exports.formulario_inclusao_noticia = function form(application, req, res) {
  res.render('admin/form_add_noticia', { validacao: {}, noticia: {} });
};

module.exports.noticias_salvar = function noticias_salvar(application, req, res) {
  const noticia = req.body;

  req.assert('titulo', 'Título é obrigatório').notEmpty();
  req.assert('resumo', 'Resumo é obrigatório').notEmpty();
  req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
  req.assert('autor', 'Autor é obrigatório').notEmpty();
  req.assert('data_noticia', 'Data dos Fatos é obrigatória').notEmpty();
  req.assert('noticia', 'Notícia é obrigatória').notEmpty();

  const erros = req.validationErrors();
  if (erros) {
    res.render('admin/form_add_noticia', { validacao: erros, noticia });
    return;
  }

  const connection = application.config.db();
  const noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.salvarNoticia(noticia, () => {
    res.redirect('/noticias');
  });
};
