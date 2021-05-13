const charShift = (letter, shift) => {
  let charCode = letter.charCodeAt(0);
  if (shift > 0) {
    return String.fromCharCode(shiftUp(charCode, shift));
  }
  if (shift < 0) {
    return String.fromCharCode((shiftedCharCode = shiftDown(charCode, shift)));
  }
  return String.fromCharCode(charCode);
};

const shiftUp = (charCode, shift) => {
  for (idx = 0; idx <= shift; idx += 1) {
    if (charCode > 90 && charCode < 97) charCode = 64;
    if (charCode > 122) charCode = 96;
    charCode += 1;
  }
  return charCode;
};

const shiftDown = (charCode, shift) => {
  if (shift < 0) {
    for (idx = 0; idx >= shift; idx -= 1) {
      if (charCode < 97 && charCode > 90) charCode = 123;
      if (charCode < 65) charCode = 91;
      charCode -= 1;
    }
  }
  return charCode;
};

// TESTS
// testID: [inputChar, shift, expectedOutput]
const tests = {
  1: ['Z', 3, 'C'],
  2: ['z', 1, 'a'],
  3: ['A', -3, 'X'],
  4: ['a', -1, 'z'],
  5: ['a', 0, 'a'],
};

const startTest = () => {
  const start = new Date();

  testCharShift(tests);

  const end = new Date();

  console.log(`Execution time ${end - start} ms`);
};

const testCharShift = (tests) => {
  for (test in tests) {
    let testId = test;
    let inputChar = tests[test][0];
    let shift = tests[test][1];
    let expectedOutput = tests[test][2];

    console.log(runTest(testId, inputChar, shift, expectedOutput));
  }
};

const runTest = (testId, inputChar, shift, expectedOutput) => {
  let actualOutput = charShift(inputChar, shift);
  let errorMsg = `Test ${testId} Failed. Expected ${actualOutput} to be ${expectedOutput}`;

  if (actualOutput !== expectedOutput) return errorMsg;
  return `Test ${testId} passed!`;
};

startTest();
