String.prototype.hasVowels = function () {
  regEx = /[aeiou]/gi;
  return regEx.test(this);
}

String.prototype.toUpper = function () {
  regEx = /[a-z]/g;
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
  regEx = /[A-Z]/g;

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
  return regex.test(this)
};

String.prototype.word = function () {
  var regex = /\s/;
  return this.split(regex);
}

String.prototype.wordCount = function () {
  return this.word().length;
}

String.prototype.toCurrency = function () {
  var arrayOfCurrency = [];
  var regex = /^(\d+)\.?(\d+)?$/;
  var number = this.match(regex);
  var wholeNumbers = number[1], decimalNumbers = number[2];

  for (let index = wholeNumbers.length - 1; index >= 0; index--) {
    var wholeNumber = wholeNumbers[index];
    if (!arrayOfCurrency.length || arrayOfCurrency.length % 3 != 0) {
      arrayOfCurrency.push(wholeNumber)
    } else {
      arrayOfCurrency.push(wholeNumber + ',');
    }
  }
  let currencyToString = arrayOfCurrency.reverse().join('')
  if (decimalNumbers) {
    return currencyToString.concat('.' + decimalNumbers);
  } else {
    return currencyToString
  }
}

String.prototype.inverseCase = function () {
  var result = this.split(/\s/);

  for (let index = 0; index < this.length; index++) {
    if (this[index].match(/[a-z]/g)) {
      result[index] = this[index].toUpper()
    } else {
      result[index] = this[index].toLower()
    }
  }
  return result.join('');
}

String.prototype.alternatingCase = function () {
  var result = this.split('');

  if (result[0].match(/[a-z]/)) throw new Error('input should begin with an uppercase letter');

  for (let index = 0; index < this.length; index++) {
    if (index % 2 == 0) {
      result[index] = this[index].toLower();
    } else {
      result[index] = this[index].toUpper();
    }
  }
  return result.join('');
}

String.prototype.numberWords = function () {
  var numbersObject = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 0: 'zero' };
  var result = [];
  var regex = /\d/

  for (let index = 0; index < this.length; index++) {
    var wordNumber = this[index].replace(regex, function ($1) {
      return numbersObject[$1]
    })
    result.push(wordNumber);
  }
  return result.join(' ');
}


String.prototype.isDigit = function () {
  regex = /^\d$/;
  return regex.test(this);
}

module.exports = String;
