# REGEX VALIDATIONS 

### Description
This project uses Prototype Oriented Programming, methods and procedures to extend the String class in Javascript. Instance attributes are added to the String class to support more string manipulation and features.
This project relies heavily on regular expressions to create these methods

### String Prototypes Methods Defined in this Project:
- *String.prototype.hasVowels* : This method returns true if the input string has a vowel letter.
- *String.prototype.toUpper* : This method returns an all uppercase string. More like the javascript toUpperCase method.
- *String.prototype.toLower* : This method returns an all lowercase string. More like the javascript toLowerCase method.
- *String.prototype.ucFirst* : This method capitalizes all the words in a string.
- *String.prototype.isQuestion* : This method returns true if the input statement is a question (i.e. ends with a question mark).
- *String.prototype.words* : This method returns a list of the words in the string, as an Array.
- *String.prototype.wordCount* : This method returns the number of words in the string.
- *String.prototype.toCurrency* : This method returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11..
- *String.prototype.fromCurrency* : This method returns a number representation of the Currency String e.g 11,111.11 should return 11111.11
- *String.prototype.inverseCase* : This method returns each letter in the string as an inverse of its current case e.g Mr. Ben should return mR. bEN.
- *String.prototype.alternatingCase* : This method returns the letters in alternating cases. It must start with a lower case e.g Onomatopoeia should return oNoMaToPoEiA.
- *String.prototype.numberWords* : This method returns the numbers in words e.g 325 should return three two five.
- *String.prototype.isDigits* : This method returns true if the string is a digit(one number) e.g 3 should return true and 34 should return false

### Setup 

#### On terminal,  
-----
##### Clone the repository 
* `git clone https://github.com/boscoseries/pop-in-javascript.git`
-----
##### Install dependencies
- `npm install`
-----
##### Run Project
- `'string'.methodName() - to call any of the methods.`
- `node regex.js - to run the script.`
-----
##### Run Test
- `npm test`  

### Stack
Javascript  
Jest  

### Author
Johnbosco Okoror