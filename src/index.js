const express = require('express');
const Loaders = require('./app/Loaders');

Loaders.start();

const app = express();

const routes = require('./routes');

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('Estou Funcionando');
});
