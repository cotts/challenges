const CheckService = require('./check.service');

const CheckController = {

  checkPalindrome: CheckService.checker,

};

module.exports = CheckController;
