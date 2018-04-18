/* eslint-env node, mocha */
/* eslint no-unused-expressions: "off" */

const { expect } = require('chai');
const CheckWorker = require('./check.worker');

describe('Check words worker', () => {
  context('Smoke Test', () => {
    it('should exist the CheckWorker', () => {
      expect(CheckWorker).to.exist;
    });
    it('shoud exists the revertString method inside CheckWorker', () => {
      expect(CheckWorker.revertString).to.exist;
    });
    it('shoud exists the removeSpaces method inside CheckWorker', () => {
      expect(CheckWorker.removeSpaces).to.exist;
    });
    it('shoud exists the statusCode method inside CheckWorker', () => {
      expect(CheckWorker.statusCode).to.exist;
    });
  });

  context('Checkwork methods', () => {
    const stringA = 'ABA';
    const stringB = 'MACACO';
    const stringC = 'A MAN A PLAN A CANAL PANAMA';

    it('shoud return "aba" if insert word ABA', () => {
      const result = CheckWorker.revertString(stringA);
      expect(result).to.be.eql('aba');
    });

    it('should return "ocacam" if insert the word MACACO', () => {
      const result = CheckWorker.revertString(stringB);
      expect(result).to.be.eql('ocacam');
    });

    it('should return "amanaplanacanalpanama" if insert the phrase "A MAN A PLAN A CANAL PANAMA"', () => {
      const result = CheckWorker.revertString(stringC);
      expect(result).to.be.eql('amanaplanacanalpanama');
    });

    it('shoud return 200 if insert true when the string/phrase is palindrome', () => {
      const result = CheckWorker.statusCode(true);
      expect(result).to.be.eql(200);
    });

    it('shoud return 400 if insert false when the string/phrase is palindrome', () => {
      const result = CheckWorker.statusCode(false);
      expect(result).to.be.eql(400);
    });
  });
});
