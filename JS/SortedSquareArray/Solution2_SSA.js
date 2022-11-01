
function sortedSquaredArray(array) {
  const newArr = [];
  for (let idx = 0; idx < array.length; idx += 1) {
    newArr.push(Math.pow(array[idx], 2));
  }
  if (array[0] < 1) newArr.sort((a, b) => a - b);
  return newArr;
} 

// TESTS
const tests = {
  1: [[1, 2, 3, 5, 6, 8, 9],[1, 4, 9, 25, 36, 64, 81]],
  2: [[1], [1]],
  3: [[1, 4],[1, 16]],
  4: [[1, 2, 3, 4, 5], [1, 4, 9, 16, 25]],
  5: [[0], [0]],
  6: [[100], [100]],
  7: [[-1], [1]],
  8: [[-1, -4], [1, 4]],
  9: [[-5, -4, -3, -2, -1], [1, 4, 9, 16, 25]],
  10: [[-10], [100]],
  11: [[-10, -5, 0, 5, 10], [0, 25, 25, 100, 100]],
  12: [[-7, -3, 1, 9, 22, 30], [1, 9, 49, 81, 484, 900]],
  13: [[-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20], [0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500]],
  14: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
  15: [[-1, -1, 2, 3, 3, 3, 4], [1, 1, 4, 9, 9, 9, 16]],
  16: [[-3, -2, -1], [1, 4, 9]]
};

function testSortedSquaredArray(tests) {
  const start = new Date(); // Add tests below this line

  for(test in tests){
    console.log(runTest(tests[test][0], tests[test][1], test))
  }

  const end = new Date(); // Add tests above this line
  console.log(`Execution time: ${end - start} ms`);
}

function runTest(input, expectedOutput, testId) {
  let actualOutput = sortedSquaredArray(input);

  let errorMessage = `Test ${testId} Failed. Expected ${actualOutput} to be ${expectedOutput}`;

  if (actualOutput.toString() !== expectedOutput.toString()){
    return errorMessage;
  }
  return `Test ${testId} Passed!`;
}

testSortedSquaredArray(tests);

