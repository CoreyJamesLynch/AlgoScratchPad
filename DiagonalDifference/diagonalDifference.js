/* SUMMARY
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 */

/* EXAMPLE
[[1, 4, 9], [2, 5, 8], [3, 6, 9]]
1 + 5 + 9 = 15
3 + 5 + 9 = 17
// -> 2
 */

/* SUMMARY
-> diagonalDifference takes in an matrix
-> matrix is an arr of arrs
-> diagonalDifference returns the absolute difference of each progressive idx of each arr contained in matrix from each direction.

/* CONSTRAINTS
Each int contained in the arrays in matrix will be no less than -100 or exceed 100.
*/

/* NOTES
Return must be a positive number.
A square has equal length sides so the amount of arrays in matrix will always equal the number of ints in each of those arrays. (This means it can be done in one loop).
*/

// SOLUTION
const diagonalDifference = (matrix) => {
  let rightCounter = 0;
  let leftCounter = 0;
  for (let idx = 0; idx < matrix.length; idx++) {
    rightCounter += array[idx];
  }
};

// TESTS
console.log(
  diagonalDifference([
    [1, 4, 9],
    [2, 5, 8],
    [3, 6, 9],
  ])
);
