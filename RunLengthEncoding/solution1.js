const runLengthEncoder = (string) => {
  return string;
};

const tests = {
  1: [
    'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW',
    '12W1B12W3B24W1B14W',
  ],
  2: ['wwwwaaadexxxxxx', 'w4a3d1e1x6'],
  3: ['wwwwaaadexxxxxxywww', 'w4a3d1e1x6y1w3'],
  4: ['geeksforgeeks', 'g1e2k1s1f1o1r1g1e2k1s1'],
  5: ['aaaaaAAAAAzzzzZZZZFFFFffffsh', 'a5A5z4Z4F4f4s1h1'],
  6: ['aaaaaaaaaaaa', 'a12'],
  7: ['ZZZZZZZZZZZZZZZ', 'Z15'],
  8: ['h', 'h1'],
  9: ['V', 'V1'],
};

const startTest = () => {
  const start = new Date();

  testRunLengthEncoder(tests);

  const end = new Date();
  console.log(`Execution time ${end - start} ms`);
};

const testRunLengthEncoder = (tests) => {
  for (test in tests) {
    let testId = test;
    let input = tests[test][0];
    let expectedOutput = tests[test][1];

    console.log(runTest(testId, input, expectedOutput));
  }
};

const runTest = (testId, input, expectedOutput) => {
  let actualOutput = runLengthEncoder(input);
  let errorMsg = `Test ${testId} Failed. Expected ${actualOutput} to equal ${expectedOutput}`;

  if (actualOutput !== expectedOutput) return errorMsg;
  return `Test ${testId} passed!`;
};

startTest();
