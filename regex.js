'use strict';

/* 
hasVowels method returns true if a vowel letter 
exist in the input string else it returns false
*/
String.prototype.hasVowels = function() {
  var regex = /[aeiou]/gi; // regex matches any vowel letter
  return regex.test(this);
};

/* 
toUpper method returns the input string in
all uppercases
*/
String.prototype.toUpper = function() {
  var regex = /[a-z]/g; // regex matches any lowercase letter
  var upperCase = this.replace(regex, function(match) {
    // convert the character to uppercase by subtracting 32 from its ASCII code
    return String.fromCharCode(match.charCodeAt(0) - 32);
  });
  return upperCase;
};

/* 
toLower method returns the input string in
all lowercases
*/
String.prototype.toLower = function() {
  var regex = /[A-Z]/g; // regex matches any uppercase letter
  var lowerCase = this.replace(regex, function(match) {
    // convert the character to lowercase by adding 32 to its ASCII code
    return String.fromCharCode(match.charCodeAt(0) + 32);
  });
  return lowerCase;
};

/* 
ucFirst method converts the firts letter 
of each word to capital case. 
*/
String.prototype.ucFirst = function() {
  // regex matches any lowecase letter in the first position
  var regex = /\b[a-z]/g;
  for (var string of this) {
    var newString = this.replace(regex, function(match) {
      return match.toUpper();
    });
  }
  return newString;
};

/* 
isQuestion method returns true if the line ends 
in a question mark else it returns false
*/
String.prototype.isQuestion = function() {
  // regex matches a question mark(?) only at the end of a string line
  var regex = /\b\s*\?$/g;
  return regex.test(this);
};

/* 
word method returns an array containing
each word in the input sentence
*/
String.prototype.word = function() {
  var regex = /\s/; // regex matches a space
  // trim() method removes whitespace from both sides of the input.
  return this.trim().split(regex);
};

/* 
wordCount method returns a count of
words in the input in number
*/
String.prototype.wordCount = function() {
  return this.word().length;
};

/* 
toCurrency method converts the input (numberString)
to currency format i.e. a comma after every 3 digits.
*/
String.prototype.toCurrency = function() {
  var arrayOfCurrencies = [];
  var regex = /^(\d+)\.?(\d+)?$/; // regex matches digits before and after a dot (.)
  var numberString = this.match(regex);
  var wholeNumbers = numberString[1],
    decimalNumbers = numberString[2];
  // iterate backwards with a reverse for-loop
  for (let index = wholeNumbers.length - 1; index >= 0; index--) {
    var wholeNumber = wholeNumbers[index];
    // conditional for when arrayOfCurrencies has length indivisible by 3 (1,2,4,5,7...) or is falsy(0)
    if (!arrayOfCurrencies.length || arrayOfCurrencies.length % 3 != 0) {
      arrayOfCurrencies.push(wholeNumber);
    } else {
      arrayOfCurrencies.push(wholeNumber + ',');
    }
  }
  let currencyToString = arrayOfCurrencies.reverse().join('');
  return decimalNumbers
    ? currencyToString.concat('.' + decimalNumbers)
    : currencyToString;
};

/* 
fromCurrency method converts the input in currency 
format back to number format i.e. without comma (,).
*/
String.prototype.fromCurrency = function() {
  var number;
  // regex matches every group of 3 digits and digits after the decimal point
  var regex = /^(\d{0,3},+?)(\d{3},?)+(\.\d+)?$/;
  var comma = /,/g;
  if (this.match(regex)) {
    number = this.replace(comma, '');
    return Number(number);
  }
  throw new Error();
};

/* 
inverseCase method converts all uppercase letters
in the input string to lowercase and vice-versa
*/
String.prototype.inverseCase = function() {
  var regex = /[a-z]/gi; // regex lowercase letters
  var result = this.replace(regex, function(match) {
    if (match.match(/[A-Z]/)) {
      return match.toLower();
    } else {
      return match.toUpper();
    }
  });
  return result;
};

/* 
alternatingCase method converts successive characters
after the first to upper and lower cases respectively
*/
String.prototype.alternatingCase = function() {
  var inputStrings = this.toUpper();
  var arrayOfStrings = this.split(/\s/);

  for (let index = 0; index < inputStrings.length; index++) {
    if (index % 2 == 0) {
      arrayOfStrings[index] = inputStrings[index].toLower();
    } else {
      arrayOfStrings[index] = inputStrings[index].toUpper();
    }
  }
  return arrayOfStrings.join('');
};

/* 
numberWords method converts the numbers in
the input to its word equivalent
*/
String.prototype.numberWords = function() {
  var numbersObject = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero'
  };

  var regex = /\d/g; // regex matches any digit from 0-9
  var wordNumber = this.replace(regex, function(match) {
    return numbersObject[match] + ' ';
  });
  return wordNumber;
};

/* 
isDigit method returns true if the input
is 1 digit else it returns false
*/
String.prototype.isDigit = function() {
  // regex matches any digit at position 1 in the string line
  var regex = /^\d$/;
  return regex.test(this);
};


module.exports = String;
