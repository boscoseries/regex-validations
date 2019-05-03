var String = require('../regex');

describe("Check if a line is a question", function() {

  var question = 'this is a question?';
  var nonQuestion = 'this is not a question';

  test("It should return a typeof of 'boolean'", function() {
    expect(typeof question.isQuestion()).toBe('boolean');
  });
  test("It should return true if the line ends in a '?'", function() {
    expect(question.isQuestion()).toBetruthy();
  });
  test("It should return false if the line does not ends in a '?'", function() {
    expect(question.isQuestion()).toBeFalsy();
  });
  
  test("It should throw if type of input is not a string", function() {
    expect(function() { return nonQuestion.isQuestion()}).toThrow();
  });

});