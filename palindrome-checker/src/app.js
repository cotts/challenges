const express = require('express');
const bodyParser = require('body-parser');
const router = require('./web');

const app = express();

const bootstrap = () => {
  app
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(express.static('./src/web/application/public'))
    .use(router);

  return app;
};

module.exports = bootstrap;
