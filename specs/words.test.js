var String = require('../regex');

describe("Check if a line is a question", function() {

  var string = 'this is a long line of words';

  test("It should return an typeof of 'object'", function() {
    expect(typeof string.word()).toBe('object');
  });
  test("It should return an array of the words from the input string", function() {
    expect(string.word()).toEqual(expect.arrayContaining(['this', 'is', 'a', 'long']));
  });
  test("It should return false if the line does not ends in a '?'", function() {
    expect(string.word()).toHaveLength(7);
  });

});