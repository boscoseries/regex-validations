var hasVowels = require('../hasVowels');

describe("check for vowel letter", function() {

test("'y,i,o,e,g,h' contains a vowel letter and should return 'true'", function() {
  expect(typeof hasVowels('y,i,o,e,g,h')).toBe('Boolean');
});
test("'y,i,o,e,g,h' contains a vowel letter and should return 'true'", function() {
  expect(hasVowels('y,i,o,e,g,h')).toBeTruthy();
})


})