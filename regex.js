String.prototype.hasVowels = function () {
  regEx = /[aeiou]/gi;
  return regEx.test(this);
}

String.prototype.toUpper = function () {
  regEx = /[a-z]/gi;
     var string = "";

    for (index = 0; index < this.length; index++) {
      if ( this.match(regEx) ) {
      string += String.fromCharCode(this.charCodeAt(index) & 223);
      } else {
      string += this;
      }
    }
    return string;
  }

  

//console.log('uche is good'.toUpper())



module.exports = String;
