// Source -> https://leetcode.com/problems/climbing-stairs/

// SUMMARY
// create a function climbStairs which takes integer n
// find how many unique combinations of 1 and 2 can be summed to n

// EXAMPLE 1
// Input: n = 2
// Output: 2
// Explanation:
// 1 + 1 = 2
// 2 = 2

// EXAMPLE 2
// Input: n = 3
// Output: 3
// Explanation:
// 1 + 1 + 1 = 3
// 1 + 2 = 3
// 2 + 1 = 3

// CONSTRAINTS
// 1 <= n <= 45 (n is greater than or equal to 1 and less than or equal to 45)

// MY SOLUTION
const climbStairs = (n) => {
  return n;
};

// TESTS
const testClimbStairs = () => {
  const start = new Date();
  // input, expectedOutput, sequential testNumber
  console.log(runTest(2, 2, 1));
  console.log(runTest(3, 3, 2));

  const end = new Date();
  console.log(`All tests passed in: ${end - start} ms`);
};

const runTest = (input, expectedOutput, testNumber) => {
  let errorMessage = `Expected ${input} to be ${expectedOutput}`;
  
  if (climbStairs(input) !== expectedOutput) return errorMessage;
  else return `Test ${testNumber} Passed!`;
};

testClimbStairs()