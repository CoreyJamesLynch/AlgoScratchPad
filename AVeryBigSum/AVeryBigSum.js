/* SUMMARY
Return the sum of large ints in an ar.
*/

/* OBJECTIVES
-> aVeryBigSum should take in largeNumbers
-> largeNumbers should be an arr of ints
-> aVeryBigSum should return the sum of the ints in largeNumbers
 */

/* CONSTRAINTS
-> largeNumbers will have no more than 10 or no less than 1 ints
-> each int in largeNumbers will be no less than 0 or more than 10000000000
 */

// SOLUTIONS
const aVeryBigSum = (largeNumbers) => {
  let counter = 0;
  for (let idx = 0; idx < largeNumbers.length; idx++) {
    counter += largeNumbers[idx];
  }
  return counter;
};

// TESTS
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
// -> 5000000015
