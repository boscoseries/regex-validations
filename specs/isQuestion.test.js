var String = require('../regex');

describe("Check if a line is a question", function() {

  var question = 'this is a question?';
  var nonQuestion = 'this is not a question';
  var nonStringInput = 12345;

  test("It should return a typeof of 'boolean'", function() {
    expect(typeof question.isQuestion()).toBe('boolean');
  });
  test("It should return true if the line ends in a '?'", function() {
    expect(question.isQuestion()).toBeTruthy();
  });
  test("It should return false if the line does not ends in a '?'", function() {
    expect(nonQuestion.isQuestion()).toBeFalsy();
  });

});