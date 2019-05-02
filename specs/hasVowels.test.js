var String = require('../hasVowels');

describe("check for vowel letter in a string", function() {

  var string = 'We are going to school today';

  test("string.hasVowels() should return a Boolean", function() {
    expect(typeof string.hasVowels()).toBe('boolean');
  });
  test("string.hasVowels() should return 'true'", function() {
    expect(string.hasVowels()).toBeTruthy();
  });

});