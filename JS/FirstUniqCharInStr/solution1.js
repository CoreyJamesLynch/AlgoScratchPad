
const firstUniqChar = (string) => {
  return string;
};

// TESTS
// id: [input, expectedOutput]
const tests = {
  1: ['leetcode', 0],
  2: ['loveleetcode', 2],
  3: ['aabb', -1],
};

const startTest = () => {
  const start = new Date();

  testFirstUniqChar(tests);

  const end = new Date();
  console.log(`Execution time ${end - start} ms`);
};

const testFirstUniqChar = (tests) => {
  for (test in tests) {
    let testId = test;
    let input = tests[test][0];
    let expectedOutput = tests[test][1];

    console.log(runTest(testId, input, expectedOutput));
  }
};

const runTest = (testId, input, expectedOutput) => {
  let actualOutput = firstUniqChar(input);
  let errorMsg = `Test ${testId} Failed. Expected ${actualOutput} to be ${expectedOutput}`;

  if (actualOutput !== expectedOutput) return errorMsg;
  return `Test ${testId} passed!`;
};

startTest();

