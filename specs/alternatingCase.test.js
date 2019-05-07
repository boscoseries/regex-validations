var String = require('../regex');

describe("alternating case of a string", function() {

  var string = 'onomatopoeia';
  var secondString = 'Juxtapose';
  var invalidString = 'lowercase';
  var nonString = 2345;

  test("It should return a typeof of 'string'", function() {
    expect(typeof string.alternatingCase()).toBe('string');
  });
  test("It should return a string containing alternating cases", function() {
    expect(string.alternatingCase()).toEqual(expect.stringContaining('oNoMaToPoEiA'));
  });
  test("It should return a string containing alternating cases", function() {
    expect(secondString.alternatingCase()).toEqual(expect.stringContaining('jUxTaPoSe'));
  });
  test("It should throw if type of input is not a string", function() {
    expect(function() { return nonString.alternatingCase()}).toThrow('not a function');
  });

});