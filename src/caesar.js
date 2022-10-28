// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    /*
    1. input refers to the inputted text to be encoded or decoded.
    2. shift refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e., A becomes D) whereas a negative number means 
    shifting to the left (i.e., M becomes K).
    3. encode refers to whether you should encode or decode the message. By default it is set to true.

    Keep these rules in mind:
    a. If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
    b. Spaces should be maintained throughout, as should other nonalphabetic symbols.
    c. Capital letters can be ignored.
    d. If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet 
    (e.g., z becomes c).

    Examples:
    caesar("thinkful", 3); //> 'wklqnixo'
    caesar("thinkful", -3); //> 'qefkhcri'
    caesar("wklqnixo", 3, false); //> 'thinkful'

    caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
    caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

    caesar("thinkful"); //> false
    caesar("thinkful", 99); //> false
    caesar("thinkful", -26); //> false
    */

    //variables that we are keeping track of
    const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let resultArray = [];
    const inputArray = (input.toLowerCase()).split("");
    //everything should be turned into lower case. 
    //if encode is false, we want to decode the input.
    //To decode we must apply the negative of the shift(i.e. if shift= 3 for endcoding, we must apply shift= -3 for decoding)
    //in order to wrap around you must take the input character and determine if index+shift is greater that 26. If it is you want to subract 26 from the index,
    //if index+shift is less than 26 you want to cipher as normal
    //if input character is included in the alphabet, then it should apply the caeser shift. If input character is not included in alphabet, i.e. it is a space or
    //other symbol it should be mapped the way it is. 
    //most likely going to use the map function here. Every character in the input shuld directly map to another character.
    if (!shift || shift < -25 || shift > 25) return false;

    if (encode === false) { //we want to decode
      shift = -shift;
      const code = inputArray.map((character)=> {
        if (!alphabetArray.includes(character)) return character;
        const inputIndex = alphabetArray.indexOf(character);
        let codeIndex = inputIndex+shift;
        if (codeIndex > 25) {
          codeIndex -= 26;
        }
        if (codeIndex < 0) {
          codeIndex += 26;
        }
        return alphabetArray[codeIndex];
      });
      resultArray = code;
    }
    else {//we want to encode
      const code = inputArray.map((character)=> {
        if (!alphabetArray.includes(character)) return character;
        const inputIndex = alphabetArray.indexOf(character);
        let codeIndex = inputIndex+shift;
        if (codeIndex > 25) {
          codeIndex -= 26;
        }
        if (codeIndex < 0) {
          codeIndex += 26;
        }
        return alphabetArray[codeIndex];
      });
      resultArray = code;
    }
    let result = resultArray.join("");
    return result;
  }//end of caeser function

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
