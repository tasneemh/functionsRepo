//Sum of largest 2 numbers in an array
const sumLargestNumbers = function (data) {
  const sortedData = data.sort((a, b) => a - b);
  return sortedData[sortedData.length - 1] + sortedData[sortedData.length - 2];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
