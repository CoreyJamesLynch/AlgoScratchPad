const alphabetChecker = (character) => {
  let charCode = character.charCodeAt(0);
  let englishUppercase = {};
  let englishLowercase = {};
  for (let idx = 1; idx <= 26; idx += 1) {
    englishUppercase[64 + idx] = String.fromCharCode(64 + idx);
    englishLowercase[96 + idx] = String.fromCharCode(96 + idx);
  }
  return charCode in englishLowercase || charCode in englishUppercase;
};

// TESTS
// testID: [inputCharacter, expectedOutput]
const tests = {
  1: ['a', true],
  2: ['z', true],
  3: ['A', true],
  4: ['Z', true],
  5: ['`', false],
  6: ['{', false],
  7: ['@', false],
  8: ['[', false],
};

const startTest = () => {
  const start = new Date();

  testAlphabetChecker(tests);

  const end = new Date();
  console.log(`Execution time ${end - start} ms`);
};

const testAlphabetChecker = (tests) => {
  for (test in tests) {
    let testId = test;
    let inputCharacter = tests[test][0];
    let expectedOutput = tests[test][1];

    console.log(runTest(testId, inputCharacter, expectedOutput));
  }
};

const runTest = (testId, inputCharacter, expectedOutput) => {
  let actualOutput = alphabetChecker(inputCharacter);
  let errorMsg = `Test ${testId} Failed. Expected ${actualOutput} to be ${expectedOutput}`;

  if (actualOutput !== expectedOutput) return errorMsg;
  return `Test ${testId} passed!`;
};

startTest();
