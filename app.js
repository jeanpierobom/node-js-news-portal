/* eslint no-console: 0 */
const app = require('./config/server');

const rotaHome = require('./app/routes/home')(app);

const rotaNoticias = require('./app/routes/noticias')(app);

const rotaFormNoticias = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, () => {
  console.log('Servidor rodando com Express');
});
