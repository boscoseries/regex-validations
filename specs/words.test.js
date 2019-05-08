var String = require('../regex');

describe('convert words in a string into an array', function() {
  var string = 'this is a long line of words';
  var nonString = 12345;

  test('It should return an typeof of object', function() {
    expect(typeof string.word()).toBe('object');
  });

  test('It should return an array of the words from the input string', function() {
    expect(string.word()).toEqual(
      expect.arrayContaining(['this', 'is', 'a', 'long'])
    );
  });

  test('It should throw if type of input is not a string', function() {
    expect(function() {
      return nonString.word();
    }).toThrow();
  });
});
