var String = require('../regex');

describe("convert a string to uppercase", function() {

  var string = 'This is a string';
  var nonString = 12345;

  test("It should return a typeof of String", function() {
    expect(typeof string.toUpper()).toBe('string');
  });
  test("It should return a string with all uppercase letters ", function() {
    expect(string.toUpper()).toContain('THIS IS A STRING');
  });
  test("It should throw if type of input is not a string", function() {
    expect(function() { return nonString.toUpper()}).toThrow();
  });

});