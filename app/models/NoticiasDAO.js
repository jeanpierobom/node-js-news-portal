/* eslint no-underscore-dangle: 0 */
function NoticiasDAO(connection) {
  this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function getNoticias(callback) {
  this._connection.query('select * from noticias order by data_criacao desc', callback);
};

NoticiasDAO.prototype.get5UltimasNoticias = function get5UltimasNoticias(callback) {
  this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
};

NoticiasDAO.prototype.getNoticia = function getNoticia(idNoticia, callback) {
  this._connection.query(`select * from noticias where id_noticia = ${idNoticia}`, callback);
};

NoticiasDAO.prototype.salvarNoticia = function salvarNoticia(noticia, callback) {
  this._connection.query('insert into noticias set ? ', noticia, callback);
};

module.exports = function createDao() {
  return NoticiasDAO;
};
