const Worker = require('./check.worker');

const CheckerService = {

  checker: (req, res) => {
    const concatString = Worker.removeSpaces(req.params.string);
    const isPalindrome =
      (Worker.removeSpaces(concatString) === Worker.revertString(req.params.string));
    res.sendStatus(Worker.statusCode(isPalindrome));
  },
};

module.exports = CheckerService;
