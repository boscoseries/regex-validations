var String = require('../regex');

describe('inverse case of a string', function() {
  var numberString = '307';
  var nonString = 12345;

  test('It should return a typeof of string', function() {
    expect(typeof numberString.numberWords()).toBe('string');
  });
  test('It should return a string of numbers in words', function() {
    expect(numberString.numberWords()).toEqual(
      expect.stringContaining('three zero seven')
    );
  });
  test('It should throw if type of input is not a string', function() {
    expect(function() {
      return nonString.inverseCase();
    }).toThrowError('not a function');
  });
});
