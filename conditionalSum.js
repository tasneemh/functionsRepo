/*
Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.
*/
const conditionalSum = function (values, condition) {
  if (condition === "even") {
    return values
      .filter((num) => num % 2 === 0)
      .reduce((sum, element) => sum + element, 0);
  } else {
    return values
      .filter((num) => num % 2 !== 0)
      .reduce((sum, element) => sum + element, 0);
  }
};
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
