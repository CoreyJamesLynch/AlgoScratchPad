const palindrome = (string) => {
  let startPointer = 0;
  let endPointer = string.length - 1;
  while(startPointer <= endPointer) {
    if(string[startPointer] === string[endPointer]){
      startPointer += 1
      endPointer -= 1
    } else return false
  }
  return true;
};

// TESTS
// testId: [input, expectedOutput]
const tests = {
  1: ['a', true],
  2: ['aa', true],
  3: ['ab', false],
  4: ['aba', true],
  5: ['abc', false],
  6: ['redder', true],
  7: ['renter', false],
  8: ['racecar', true],
  9: ['banana', false],
};

const startTest = () => {
  const start = new Date();

  testPalindrome(tests);

  const end = new Date();
  console.log(`Execution time ${end - start} ms`);
};

const testPalindrome = (tests) => {
  for (test in tests) {
    let testId = test;
    let input = tests[test][0];
    let expectedOutput = tests[test][1];

    console.log(runTest(testId, input, expectedOutput));
  }
};

const runTest = (testId, input, expectedOutput) => {
  let actualOutput = palindrome(input);
  let errorMsg = `Test ${testId} Failed. Expected ${actualOutput} to be ${expectedOutput}`;

  if (actualOutput !== expectedOutput) return errorMsg;
  return `Test ${testId} passed!`;
};

startTest();
