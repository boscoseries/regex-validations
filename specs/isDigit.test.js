var String = require('../regex');

describe('Check if input is a digit', function() {
  var singleDigit = '7';
  var doubleDigit = '100';
  var nonStringInput = 12345;

  test('It should return a typeof of boolean', function() {
    expect(typeof singleDigit.isDigit()).toBe('boolean');
  });
  test('It should return true if input is a single digit', function() {
    expect(singleDigit.isDigit()).toBeTruthy();
  });
  test('It should return false if input is not a single input', function() {
    expect(doubleDigit.isDigit()).toBeFalsy();
  });
  test('It should throw if type of input is not a string', function() {
    expect(function() {
      return nonStringInput.isDigit();
    }).toThrowError('not a function');
  });
});
