/* eslint no-console: 0 */
const app = require('./config/server');

app.listen(3000, () => {
  console.log('Servidor rodando com Express');
});
