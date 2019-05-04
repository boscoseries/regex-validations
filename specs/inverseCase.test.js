var String = require('../regex');

describe("inverse case of a string", function() {

  var string = 'This is a string';
  var secondString = 'We aRe goINg tO school toDAy';
  var thirdString = 'html cSc pst-ng';
  var nonString = 12345;

  test("It should return a typeof of 'string'", function() {
    expect(typeof string.inverseCase()).toBe('string');
  });
  test("It should return a string containing its inverse cases", function() {
    expect(secondString.inverseCase()).toEqual(expect.stringContaining('wE ArE GOinG To SCHOOL'));
  });
  test("It should return a string containing its inverse case", function() {
    expect(thirdString.inverseCase()).toEqual(expect.stringContaining('HTML CsC PST-NG'));
  });
  test("It should throw if type of input is not a string", function() {
    expect(function() { return nonString.inverseCase()}).toThrowError('not a function');
  });

});