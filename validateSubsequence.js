/* 
DESCRIPTION
-> Given two arrs of ints, determine if the second array is a subset of the first
-> A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array
-> A single number in an array and the array itself are both valid subsequences of the array
  -> [1] is subsequence of [1]; [] is subsequence of [1];

CONSTRAINTS
-> No empty arrays will be given


PSEUDO



*/

// MY SOLUTION
const isValidSubsequence = (firstArray, secondArray) => {
  return [firstArray, secondArray];
};

// TESTS
const start = new Date(); // Add tests below this line

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
// -> true

const end = new Date(); // Add tests above this line
console.log(`Execution time: ${end - start} ms`);
