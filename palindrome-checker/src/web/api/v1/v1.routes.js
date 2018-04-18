const router = require('express').Router();

const check = require('./check');

router.use(check);

module.exports = router;
