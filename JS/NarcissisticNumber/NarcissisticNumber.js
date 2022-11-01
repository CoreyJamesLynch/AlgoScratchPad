// Example
// Input: 0
// Output: 0 is a narcissist number.
// Explanation 0 = 0

// Example
// Input: 371
// Output: 371 is a narcissist number.
// Explanation 3*3*3+7*7*7+1*1*1 = 371

// Example
// Input: 1634
// Output: 1634 is a narcissist number.
// Explanation 1*1*1*1+6*6*6*6+3*3*3*3+4*4*4*4 = 1634

// Example
// Input: 321
// Output: 321 is not a narcissist number.
// Explanation 3*3*3+2*2*2+1*1*1 = 44

// Example
// Input: 4321
// Output: 4321 is not a narcissist number.
// Explanation 4*4*4*4+3*3*3*3+2*2*2*2+1*1*1*1 = 354

const narcissistNumber = (int) => {
  let comparisonNum = 0;
  const digitArray = Array.from(String(int), Number);

  for (let idx = 0; idx < digitArray.length; idx += 1) {
    comparisonNum += Math.pow(digitArray[idx], digitArray.length);
  }

  if (comparisonNum === int) return `${int} is a narcissist number.`;
  else return `${int} is not a narcissist number.`;
};

//TESTS
const start = new Date(); // Add tests below this line

// console.log(narcissistNumber(0));
// -> 0 is a narcissist number.

// console.log(narcissistNumber(371));
// -> 371 is a narcissist number.

console.log(narcissistNumber(1634));
// -> 1634 is a narcissist number.

// console.log(narcissistNumber(321));
// -> 321 is not a narcissist number.

// console.log(narcissistNumber(4321));
// -> 4321 is not a narcissist number.

const end = new Date(); // Add tests above this line
console.log(`Execution time: ${end - start} ms`);
