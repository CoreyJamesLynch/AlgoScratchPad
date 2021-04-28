const cesarCipher = (string, shift) => {
  return [string, shift];
};

// TESTS
// testId: [inputString, inputInteger, expectedOutput]
const tests = {
  1: ['abcd', 1, 'bcde'],
  2: ['ABCD', -2, 'ZABC'],
  3: ['ab CD', 3, 'de FG'],
  4: ['abcdefghijklmnopqrstuvwxyz', -4, 'wxyzabcdefghijklmnopqrstuv'],
  5: ["It is Corey's responsibility.", 5, "Ny nx Htwjd'x wjxutsxngnqnyd."],
  6: [
    '.......................No,)(*&^%',
    -6,
    ".......................St,)(*&^%'",
  ],
};

const startTest = () => {
  const start = new Date();

  testCesarCipher(tests);

  const end = new Date();
  console.log(`Execution time ${end - start} ms`);
};

const testCesarCipher = (tests) => {
  for (test in tests) {
    let testId = test;
    let inputString = tests[test][0];
    let inputInteger = tests[test][1];
    let expectedOutput = tests[test][2];

    console.log(runTest(testId, inputString, inputInteger, expectedOutput));
  }
};

const runTest = (testId, inputString, inputInteger, expectedOutput) => {
  let actualOutput = cesarCipher(inputString, inputInteger);
  let errorMsg = `Test ${testId} Failed. Expected ${actualOutput} to be ${expectedOutput}`;

  if (actualOutput !== expectedOutput) return errorMsg;
  return `Test ${testId} passed!`;
};

startTest();
