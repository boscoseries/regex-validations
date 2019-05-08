var String = require('../regex');

describe('check for vowel letter in a string', function() {
  var string = 'This is a string';
  var vowelString = 'We are going to school today';
  var nonVowelstring = 'html csc pstng';
  var nonString = 12345;

  test('It should return a Boolean', function() {
    expect(typeof string.hasVowels()).toBe('boolean');
  });
  test('It should return true if input string contains a vowel', function() {
    expect(vowelString.hasVowels()).toBeTruthy();
  });
  test('It should return false if input string does not contain a vowel', function() {
    expect(nonVowelstring.hasVowels()).toBeFalsy();
  });
  test('It should throw if type of input is not a string', function() {
    expect(function() {
      return nonString.hasVowels();
    }).toThrowError('not a function');
  });
});
