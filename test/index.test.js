const chai = require('chai');
const path = require('path');

chai.should();

let WalterCalculator = require(path.join(__dirname, '..', 'src/index'));

describe('Walter Calculator', function() {
  describe('#Return Value', function() {
    let calculator;

    beforeEach(function() {
      calculator = new WalterCalculator('14');
    });

    it('return an array', function () {
      Array.isArray(calculator).should.be.true;
    });

    it('have a left over', function () {
      calculator[calculator.length - 1].leftOver.should.equal(0.5);
    });
  });
});
