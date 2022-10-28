/*
input refers to the inputted text to be encoded or decoded.
encode refers to whether you should encode or decode the message. By default it is set to true.
*/

const polybiusModule = (function () {
  /*
  You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.
  1. When encoding, your output should still be a string.
  2. When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
  3. Spaces should be maintained throughout.
  4. Capital letters can be ignored.
  5. The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.
  */

  function polybius(input, encode = true) {
    // change input to array, initialize result array
    let resultArray = [];
    let result = [];
    const inputArray = (input.toLowerCase()).split('');
    const inputArrayDecode = input.split(" ");
    const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const regexpTwoDigits = /(..?)/g;
    //populate polybius square
    //let polybiusSquare = [5][5];
    const polybiusSquare = [
      ['a', 'b', 'c', 'd', 'e'],
      ['f', 'g', 'h', 'ij', 'k'],
      ['l', 'm', 'n', 'o', 'p'],
      ['q', 'r', 's', 't', 'u'],
      ['v', 'w', 'x', 'y', 'z'],
    ];
    const decrypt = {
      '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e',
      '12': 'f', '22': 'g', '32': 'h', '42': '(i/j)', '52': 'k',
      '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p',
      '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u',
      '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z',
    };
    
    if (encode === false) {//decode
      if (!((inputArrayDecode.join("")).length%2 === 0)) return false ;
      inputArrayDecode.forEach((word)=> {
        let decodePairs = word.match(regexpTwoDigits);
        decodePairs.forEach((pair)=> {
          resultArray.push(decrypt[pair]);
        });//forEach pair

        resultArray.push(" ");
      });//forEach word
      let lastSpace = resultArray.lastIndexOf(" ");
      resultArray.pop();
      result = resultArray.join("");
    }//if decoding

    else {//encode
      inputArray.forEach((character)=> {
        if (!alphabetArray.includes(character)) resultArray.push(character);//preserves spaces from input to coded message
        if (character === 'i' || character === 'j') resultArray.push('42');//decided i and j to be encoded to 42

        polybiusSquare.forEach((row, indexRow)=> {//row0=['a', 'b', 'c', 'd', 'e'], row1=['f', 'g', 'h', 'ij', 'k'],
          if (row.includes(character)) {
            let i = 1 + indexRow;
            let j = 1 + row.indexOf(character);
            resultArray.push(`${j}${i}`);
          }

        });//forEach row in polybius square

      });//forEach character in inputArray
      result = resultArray.join("");
    }//if encoding
    
    return result;
  }//end of polybius function

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
