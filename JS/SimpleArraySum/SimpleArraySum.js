// DESCRIPTION
//Given an arr of ints, find the sum of eles.

// EXAMPLE
// ar = [1, 2, 3], 1 + 2 + 3 = 6

// OBJECTIVES
// Create a func called simpleArraySum
// Pass simpleArraySum arr
// Return sum of eles in arr

// CONSTRAINTS
// arr of ints between 0 and 1000 in val and quant

// SOLUTION
const simpleArraySum = (arr) => {
  let counter = null;
  for (let idx = 0; idx < arr.length; idx++) {
    counter += arr[idx];
  }
  return counter;
};

// TESTS
console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));
// -> 31
