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
  for (string of this) {
   var newString = this.replace(regex, function ($1) {
      return $1.toUpper();
    })
  }
  return newString;
}

String.prototype.isQuestion = function () {
  var regex = /\b\s*\?$/g;
  if (regex.test(this)) {
    return true;
  } else {
    return false;
  }
};

String.prototype.word = function () {
  var regex = /\s/;
  return this.split(regex);
}

String.prototype.wordCount = function () {
  return this.word().length;
}

String.prototype.inverseCase = function() {
  var result = this.split(/\s/);

  for (let index=0; index<this.length; index++) {
    if (this[index].match(/[a-z]/g)) {
      result[index] = this[index].toUpper()
    } else {
      result[index] = this[index].toLower()
    }
  }
  return result.join('');
}



module.exports = String;
