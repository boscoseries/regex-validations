var String = require('../regex');

describe('convert a number string to it currency equivalent', function() {
  var numberString = '10123496.134';
  var numberString2 = '1689453';
  var mixedString = '57rJK23496.1';
  var nonString = 12345.656;

  test('It should return a typeof of string', function() {
    expect(typeof numberString.toCurrency()).toBe('string');
  });
  test('It should return a currency representation of the number string', function() {
    expect(numberString.toCurrency()).toEqual(
      expect.stringContaining('10,123,496.134')
    );
  });
  test('It should return a currency representation of the number string', function() {
    expect(numberString2.toCurrency()).toEqual(
      expect.stringContaining('1,689,453')
    );
  });
  test('It should throw if type of input is not a string', function() {
    expect(function() {
      return nonString.toCurrency();
    }).toThrowError('not a function');
  });
  test('It should throw if input contains non-numbers', function() {
    expect(function() {
      return mixedString.toCurrency();
    }).toThrow();
  });
});
