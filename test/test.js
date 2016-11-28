var chai = require('chai');
var expect = chai.expect;
var getPrime = require('../app/library.js');

describe("Get Prime tests ", function() {

  it("should return [1, 2, 3, 5, 7] for prime number from 0 to 10", function() {
    expect(getPrime(10)).to.be.eql([1, 2, 3, 5, 7]);
  });
  it("should return [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for prime number from 0 to 10", function() {
    expect(getPrime(30)).to.be.eql([1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });
})