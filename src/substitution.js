/*
input refers to the inputted text to be encoded or decoded.
alphabet refers to substitution alphabet.
encode refers to whether you should encode or decode the message. By default it is set to true.
*/

const substitutionModule = (function () {
  /*
  1. The input could include spaces and letters as well as special characters such as #, $, *, etc.
  2. Spaces should be maintained throughout.
  3. Capital letters can be ignored.
  4. The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
  5. All the characters in the alphabet parameter must be unique. Otherwise, it should return false.
  */

  function substitution(input, alphabet = "", encode = true) {
    const normalAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const alphabetArr = alphabet.split("");
    const inputArr = (input.toLowerCase()).split("");
    if (alphabet === "" || alphabet.length !== 26) return false;
    let duplicateSet = [...new Set(alphabetArr)];
    if(duplicateSet.length !== alphabetArr.length) return false;

    if (encode === false) {//decode
      let encodeMap = inputArr.map((character) => {
        if (character === ' ') return ' ';
        else {
          return normalAlphabet[alphabetArr.indexOf(character)];
        }
      });
      return encodeMap.join('');
    }

    else {//encode
      let encodeMap = inputArr.map((character) => {
        if (character === ' ') return ' ';
        else {
          return alphabetArr[normalAlphabet.indexOf(character)];
        }
      });
      return encodeMap.join('');
    }
  
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
