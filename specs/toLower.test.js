var String = require('../regex');

describe("convert a string to lowercase", function() {

  var upperCaseString = 'ALL UPPERCASE LETTERS';
  var nonString = 12345;

  test("It should return a typeof of String", function() {
    expect(typeof upperCaseString.toLower()).toBe('string');
  });
  test("It should return a string with all lowercase letters ", function() {
    expect(upperCaseString.toLower()).toEqual(expect.stringMatching(/[a-z]/));
  });
  test("It should throw if type of input is not a string", function() {
    expect(function() { return nonString.toLower()}).toThrow();
  });

});