const englishCharCodes = (charCode) => {
  let englishUppercase = {};
  let englishLowercase = {};

  for (let idx = 1; idx <= 26; idx += 1) {
    englishUppercase[64 + idx] = String.fromCharCode(64 + idx);
    englishLowercase[96 + idx] = String.fromCharCode(96 + idx);
  }

  return (
    charCode in englishLowercase ||
    charCode in englishUppercase
  )
};

const cesarCipher = (string, shift) => {
  let shiftedStr = '';
  // iterate through string
  for (letter in string) {
    let currentCharCode = string.charCodeAt(letter);
    let currentChar = '';

    if(englishCharCodes(currentCharCode)){
      currentChar = String.fromCharCode(currentCharCode + (shift % 16));
    } else currentChar = String.fromCharCode(currentCharCode);
    shiftedStr += currentChar
  }
  return shiftedStr;
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
