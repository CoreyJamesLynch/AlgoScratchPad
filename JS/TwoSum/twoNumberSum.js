/*
DESCRIPTION
-> Func twoNumSum (non-empty array of distinct ints, target sum)
-> if(array contains two nums whose sum == target) return arr of those sums
-> else return []

CONSTRAINTS
-> There will be 1 or 0 pairs in the arr whose sum == target
-> Only distinct ints can be summed

PSEUDO
  -> targetNum = y; targetSum = targetSum; ArrInt = x;
  -> x + y = targetSum -> targetSum - x = y
  -> Loop through array 
    -> if y is in object return [x, y] 
      -> else add x to object
  -> return []
*/
// MY SOLUTION
// const twoNumberSum = (array, targetSum) => {
//   const numCollection = {};
//   for (let idx = 0; idx < array.length; idx += 1) {
//     const target = Object.keys(numCollection).find(
//       (key) => key === (targetSum - array[idx]).toString()
//     );
//     if (target) return [parseInt(target), array[idx]];
//     else numCollection[array[idx]] = true;
//   }
//   return [];
// }; // 7.2 ms average
// Time: O(n) linear, one time through array | Space: O(n), creating object

// THEIR SOLUTION 1
// function twoNumberSum(array, targetSum) {
//   for (let i = 0; i < array.length - 1; i++) {
//     const firstNum = array[i];
//     for (let j = 0; j < array.length; j++) {
//       const secondNum = array[j];
//       if (firstNum + secondNum === targetSum) {
//         return [firstNum, secondNum];
//       }
//     }
//   }
//   return [];
// } // 8 ms average
// Time: O(n^2) exponential, array.length times through array
// Space: O(1) constant, nothing is being created relative to anything else

// THEIR SOLUTION 2
// function twoNumberSum(array, targetSum) {
//   const nums = {};
//   for (const num of array) {
//     const potentialMatch = targetSum - num;
//     if(potentialMatch in nums){
//       return [potentialMatch, num];
//     } else {
//       nums[num] = true;
//     }
//   }
//   return [];
// } // 7.6 ms average
// Time: O(n) linear, one time through array
// Space: O(n) linear, one object created relative to array

// THEIR SOLUTION 3
// function twoNumberSum(array, targetSum) {
//   array.sort((a, b) => a - b);
//   let left = 0;
//   let right = array.length - 1;
//   while (left < right) {
//     const currentSum = array[left] + array[right];
//     if (currentSum === targetSum) {
//       return [array[left], array[right]];
//     } else if (currentSum < targetSum) {
//       left++;
//     } else if (currentSum > targetSum) {
//       right--;
//     }
//   }
//   return [];
// } // 7.8 ms average
// Time: O(n log(n)) Logarithmic, sort mutates array in place then we go once through array.
// Space: O(1) Constant, nothing is being created relative to array.

// REFACTOR
const twoNumberSum = (array, targetSum) => {
  const numCollection = {};
  for (let idx = 0; idx < array.length; idx += 1) {
    const target = Object.keys(numCollection).find(
      (key) => key === (targetSum - array[idx]).toString(),
    );
    if (target) return [parseInt(target), array[idx]];
    else numCollection[array[idx]] = true;
  }
  return [];
}; // 7.2 ms average
// Time: O(n) linear, one time through array | Space: O(n), creating object

// TESTS
const start = new Date();
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
const end = new Date();
console.log(`Execution time: ${end - start} ms`);
// -> [-1, 11]

// console.log(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164));
// -> []

// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15));
// -> []

// console.log(twoNumberSum([14], 15));
// -> []

// console.log(twoNumberSum([15], 15));
// -> []
