var chai = require('chai');
var expect = chai.expect;
var getPrimes = require('../app/library.js');

describe("Get Prime tests ", function() {

  it("should return [2, 3, 5, 7] for prime number from 0 to n", function() {
    expect(getPrimes(10)).to.be.eql([2, 3, 5, 7]);
  });
  it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for prime number from 0 to n", function() {
    expect(getPrimes(30)).to.be.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });
})