const router = require('express').Router();
const api = require('./api');
const application = require('./application');


router
  .use('/api', api)
  .use('/', application);
module.exports = router;
