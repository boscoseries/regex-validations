var String = require('../regex');

describe("Check if a line is a question", function() {

  var string = 'this is a long line of words';
  var nonString = 12345;

  test("It should return a count of the words in the array", function() {
    expect(string.wordCount()).toEqual(7);
  });

  test("It should throw if type of input is not a string", function() {
    expect(function() { return nonString.wordCount()}).toThrow();
  });

});