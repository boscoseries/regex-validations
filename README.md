# REGEX VALIDATIONS 

### Description
This project uses Prototype Oriented Programming, methods and procedures to extend the String class in Javascript. Instance attributes are added to the String class to support more string manipulation and features.
This project relies heavily on regular expressions to create these methods

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

### String Prototypes Methods Defined in this Project:
- *<b>String.prototype.hasVowels</b>* : This method returns true if the input string has a vowel letter.
- *<b>String.prototype.toUpper</b>* : This method returns an all uppercase string. More like the javascript toUpperCase method.
- *<b>String.prototype.toLower</b>* : This method returns an all lowercase string. More like the javascript toLowerCase method.
- *<b>String.prototype.ucFirst</b>* : This method capitalizes all the words in a string.
- *<b>String.prototype.isQuestion</b>* : This method returns true if the input statement is a question (i.e. ends with a question mark).
- *<b>String.prototype.words</b>* : This method returns a list of the words in the string, as an Array.
- *<b>String.prototype.wordCount</b>* : This method returns the number of words in the string.
- *<b>String.prototype.toCurrency</b>* : This method returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11..
- *<b>String.prototype.fromCurrency</b>* : This method returns a number representation of the Currency String e.g 11,111.11 should return 11111.11
- *<b>String.prototype.inverseCase</b>* : This method returns each letter in the string as an inverse of its current case e.g Mr. Ben should return mR. bEN.
- *<b>String.prototype.alternatingCase</b>* : This method returns the letters in alternating cases. It must start with a lower case e.g Onomatopoeia should return oNoMaToPoEiA.
- *<b>String.prototype.numberWords</b>* : This method returns the numbers in words e.g 325 should return three two five.
- *<b>String.prototype.isDigits</b>* : This method returns true if the string is a digit(one number) e.g 3 should return true and 34 should return false

### Stack
Javascript  
Jest  

### Author
Johnbosco Okoror