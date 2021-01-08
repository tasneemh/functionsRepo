/*
Percent Encoding
Take a look at the following URL, specifically the last part:

This URL will perform a google search for the term "lighthouse labs". Notice that when the string "lighthouse labs" is part of a URL, the space is replaced with %20.

If we want to add a parameter to a url, there are certain characters that must be encoded in order to make the URL valid. There are many characters that must be encoded, including: , !, ", and #. For this exercise, we will only be focusing on replacing the space with %20.
*/

const urlEncode = function (text) {
  const result = text
    .split("")
    .map((char) => {
      if (char === " ") {
        char = "%20";
      }
      return char;
    })
    .join("");
  return result;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
