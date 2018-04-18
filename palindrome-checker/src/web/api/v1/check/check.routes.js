const router = require('express').Router();
const CheckController = require('./check.controller');

router.get('/check/:string', CheckController.checkPalindrome);

module.exports = router;
