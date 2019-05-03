String.prototype.hasVowels = function () {
  regEx = /[aeiou]/gi;
  return regEx.test(this);
}

String.prototype.toUpper = function () {
  regEx = /[a-z]/gi;
  var string = "";

  for (index = 0; index < this.length; index++) {
    if (this.match(regEx)) {
      string += String.fromCharCode(this.charCodeAt(index) & 223);
    } else {
      string += this;
    }
  }
  return string;
}

String.prototype.toLower = function () {
  regEx = /[a-z]/gi;

  var string = "";
  for (index = 0; index < this.length; index++) {
    if (this.match(regEx)) {
      string += String.fromCharCode(this.charCodeAt(index) + 32);
    } else {
      string += this;
    }
  }
  return string;
}

String.prototype.ucFirst = function () {
  var regex = /\b([a-z])/g;
  for (str of this) {
   var newString = this.replace(regex, function ($1) {
      return $1.toUpper();
    })
  }
  return newString;
}




module.exports = String;
