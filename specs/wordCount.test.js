var String = require('../regex');

describe("Check if a line is a question", function() {

  var string = 'this is a long line of words';

  test("It should return a count of the words in the array", function() {
    expect(string.wordCount()).toEqual(7);
  });

});