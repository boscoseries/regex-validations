/* 
hasVowels method returns true if a vowel letter 
exist in the input string else it returns false
*/
String.prototype.hasVowels = function () {
  regex = /[aeiou]/gi;  // regex matches any vowel letter
  return regex.test(this);
};
/* 
toUpper method returns the input string in
all uppercases
*/
String.prototype.toUpper = function () {
  regex = /[a-z]/g;
  var upperCase = this.replace(regex, function ($1) {
    // convert the character to uppercase by subtracting 32 from its ASCII code
    return String.fromCharCode($1.charCodeAt(0) - 32 );
  });
  return upperCase;
};
/* 
toLower method returns the input string in
all lowercases
*/
String.prototype.toLower = function () {
  regEx = /[A-Z]/g;
  var lowerCase = this.replace(regEx, function ($1) {
    // convert the character to lowercase by adding 32 to its ASCII code
    return String.fromCharCode($1.charCodeAt(0) + 32);
  });
  return lowerCase;
};
/* 
ucFirst method converts the firts letter 
of each word to capital case. 
*/
String.prototype.ucFirst = function () {
  var regex = /\b[a-z]/g;
  for (string of this) {
    var newString = this.replace(regex, function ($1) {
      return $1.toUpper();
    });
  };
  return newString;
};
/* 
isQuestion method returns true if the line ends 
in a question mark else it returns false
*/
String.prototype.isQuestion = function () {
  var regex = /\b\s*\?$/g; // regex matches the question mark(?)
  return regex.test(this);
};
/* 
word method returns an array containing
each word in the input sentence
*/
String.prototype.word = function () {
  var regex = /\s/;
  return this.trim().split(regex);
};
/* 
wordCount method returns a count of
words in the input in number
*/
String.prototype.wordCount = function () {
  return this.word().length;
};
/* 
toCurrency method converts the input (numberString)
to currency format i.e. a comma after every 3 digits.
*/
String.prototype.toCurrency = function () {
  var arrayOfCurrency = [];
  var regex = /^(\d+)\.?(\d+)?$/; // regex matches digits before and after a dot (.)
  var numberString = this.match(regex);
  var wholeNumbers = numberString[1], decimalNumbers = numberString[2];

  for (let index = wholeNumbers.length - 1; index >= 0; index--) {
    var wholeNumber = wholeNumbers[index];
    if (!arrayOfCurrency.length || arrayOfCurrency.length % 3 != 0) {
      arrayOfCurrency.push(wholeNumber)
    } else {
      arrayOfCurrency.push(wholeNumber + ',');
    };
  };
  let currencyToString = arrayOfCurrency.reverse().join('')
  if (decimalNumbers) {
    return currencyToString.concat('.' + decimalNumbers);
  } else {
    return currencyToString;
  };
};
/* 
fromCurrency method converts the input in currency 
format back to number format i.e. without comma (,).
*/
String.prototype.fromCurrency = function () {
  var number;
  // regex matches every group of 3 digits and digits after the decimal point
  var regex = /^(\d{0,3},+?)(\d{3},?)+(\.\d+)?$/;
  var comma = /,/g
  if (this.match(regex)) {
    number = this.replace(comma, '');
    return Number(number);
  };
  throw new Error();
};
/* 
inverseCase method converts all uppercase letters
in the input string to lowercase and vice-versa
*/
String.prototype.inverseCase = function () {
  regexe = /[a-z]/gi;
  var result = this.replace(regex, function ($1) {
    if ($1.match(/[A-Z]/)) {
      return $1.toLower();
    } else {
      return $1.toUpper();
    };
  });
  return result;
};
/* 
alternatingCase method converts successive characters
after the first to upper and lower cases respectively
*/
String.prototype.alternatingCase = function () {
  var inputStrings = this.toUpper(); 
  var arrayOfStrings = this.split('');

  for (let index = 0; index < inputStrings.length; index++) {
    if (index % 2 == 0) {
       arrayOfStrings[index] = inputStrings[index].toLower();
    } else {
      arrayOfStrings[index] = inputStrings[index].toUpper();
    };
  };
  return arrayOfStrings.join('');
};
/* 
numberWords method converts the numbers in
the input to its word equivalent
*/
String.prototype.numberWords = function () {
  var numbersObject = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 0: 'zero' };

  var regex = /\d/g;
  var wordNumber = this.replace(regex, function ($1) {
    return numbersObject[$1] + ' ';
  });
  return wordNumber;
};
/* 
isDigit method returns true if the input
is 1 digit else it returns false
*/
String.prototype.isDigit = function () {
  regex = /^\d$/;
  return regex.test(this);
};


module.exports = String;
