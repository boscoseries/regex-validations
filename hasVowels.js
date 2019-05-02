String.prototype.hasVowels = function() {
  regEx = /[aeiou]/gi;
  return regEx.test(this);
}



module.exports = String;
