/* 
DESCRIPTION
-> Given two arrs of ints, determine if the second array is a subset of the first
-> A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array
-> A single number in an array and the array itself are both valid subsequences of the array
  -> [1] is subsequence of [1]; [] is subsequence of [1];

CONSTRAINTS
-> No empty arrays will be given


PSEUDO
-> firstArrayIdx = 0; secondArrayIdx = 0;
-> loop until firstArray has been iterated through or true
  -> loop tests if array indices hold same value
    -> if true increment second array index
    -> if false increment first array index
-> if loop end without true return false
*/

// MY SOLUTION
// Space: O(1) constant, nothing is being created related to size of input.
// Time: O(n) linear, one time through inputs.
const isValidSubsequence = (firstArray, secondArray) => {
  if (firstArray.length < secondArray.length) {
    return false;
  }
  let firstArrayIdx = 0;
  let secondArrayIdx = 0;
  while (
    secondArrayIdx < secondArray.length &&
    firstArrayIdx < firstArray.length
  ) {
    if (firstArray[firstArrayIdx] !== secondArray[secondArrayIdx]) {
      firstArrayIdx += 1;
    } else {
      secondArrayIdx += 1;
      firstArrayIdx += 1;
    }
  }
  if (secondArrayIdx >= secondArray.length) return true;
  return false;
}; // 7ms average

// THEIR SOLUTION 1
// Space: O(1) constant, nothing is being created related to the size of input.
// Time: O(n) linear, one time through input.
function isValidSubSequence(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
} // 6.2ms average

// THEIR SOLUTION 2
// Space: O(1) constant, nothing is being created related to the size of input.
// Time: O(n) linear, one time through input.
function isValidSubSequence(array, sequence) {
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) seqIdx++;
  }
  return seqIdx === sequence.length;
} // 6.8ms average

// TESTS
const start = new Date(); // Add tests below this line

// console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
// -> true

console.log(
  isValidSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10],
    [5, 1, 22, 22, 6, -1, 8, 10],
  ),
);
// -> false

// console.log(
//   isValidSubsequence(
//     [5, 1, 22, 25, 6, -1, 8, 10],
//     [5, 1, 22, 25, 6, -1, 8, 10],
//   ),
// );
// -> true

// console.log(isValidSubsequence([5, 1, 22], [5, 1, 22]));
// -> true

const end = new Date(); // Add tests above this line
console.log(`Execution time: ${end - start} ms`);
