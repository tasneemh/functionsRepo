/*
Square Code
In Square Code, the spaces are removed from the english text and the characters are written into a square (or rectangle). For example, the sentence "If man was meant to stay on the ground god would have given us roots" is 54 characters long, once the spaces are removed, so it is written into a rectangle with 7 rows and 8 columns.

    ifmanwas
    meanttos
    tayonthe
    groundgo
    dwouldha
    vegivenu
    sroots
The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))), we get 8. If we use that for the number of characters on each line (the number of columns), then our text will be close to a square shape.

The message is then coded by reading down the columns going left to right. For example, the message above is coded as:
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

And that's the output of the algorithm. We can then reverse the process to decrypt the text and read the original message.
*/

let message =
  "if man was meant to stay on the ground god would have given us roots";
const squareCode = function (message) {
  let string = "";
  let stringArr = [];
  //remove spaces from the message
  message = message.split(" ").join("");
  const result = resultingString(squareArray(message));
  return result;
};
/*
  create an array as below
  ifmanwas
  meanttos
  tayonthe
  groundgo
  dwouldha
  vegivenu
  sroots
*/
const squareArray = function (message) {
  let string = "";
  let stringArr = [];
  for (let i = 0; i < message.length; i++) {
    if (string.length === Math.ceil(Math.sqrt(message.length))) {
      stringArr.push(string);
      string = "";
    }
    string += message[i];
  }
  stringArr.push(string);
  return stringArr;
};
/*
create string line below:
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau 
*/
const resultingString = function (stringArr) {
  let result = "";
  for (let i = 0; i < stringArr[0].length; i++) {
    for (let j = 0; j < stringArr.length; j++) {
      if (stringArr[j].length > i) {
        result += stringArr[j][i];
      }
    }
    result += " ";
  }
  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
