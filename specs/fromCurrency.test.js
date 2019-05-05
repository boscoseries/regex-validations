var String = require('../regex');

describe("convert a currency string to it number equivalent", function() {

  var numberString = '10,123,496.134';
  var numberString2 = '1,689,453';
  var mixedString = '5,7rJ,K23,496.1';
  var nonString = '12345.656';

  test("It should return a typeof of 'number'", function() {
    expect(typeof numberString.fromCurrency()).toBe('number');
  });
  test("It should return a number representation of the currency string", function() {
    expect(numberString.fromCurrency()).toEqual(10123496.134);
  });
  test("It should return a number representation of the currency string", function() {
    expect(numberString2.fromCurrency()).toEqual(1689453);
  });
  test("It should throw if type of input is not a currency string", function() {
    expect(function() { return nonString.fromCurrency()}).toThrow();
  });
  test("It should throw if input contains non-numbers", function() {
    expect(function() { return mixedString.fromCurrency()}).toThrow();
  });

});