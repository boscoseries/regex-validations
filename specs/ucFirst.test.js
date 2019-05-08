var String = require('../regex');

describe("capitalize a string", function() {

  var string = 'this is a capitalized string';
  var nonString = 12345;

  test("It should return a typeof of String", function() {
    expect(typeof string.ucFirst()).toBe('string');
  });
  test("It should return a string with all first letters uppercase", function() {
    expect(string.ucFirst()).toEqual(expect.stringContaining('This Is A Capitalized String'));
  });
  test("It should throw if type of input is not a string", function() {
    expect(function() { return nonString.ucFirst()}).toThrow();
  });

});