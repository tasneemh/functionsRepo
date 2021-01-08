/*
Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.
 */
const data = "lighthouse labs";
const numberOfVowels = function (data) {
  let count = 0;
  const result = data.split("").reduce((count, char) => {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
    return count;
  }, 0);
  return result;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
