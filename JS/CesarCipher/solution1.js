// Use this function instead of fromCharCode and toCharCode

const englishLetters = (charCode) => {
  let englishCharCodes = {};
  for (let idx = 0; idx < 26; idx += 1) {
    englishCharCodes[65 + idx] = String.fromCharCode(65 + idx);
    englishCharCodes[97 + idx] = String.fromCharCode(97 + idx);
  }
  return englishCharCodes[charCode];
};

const shiftUp = (charCode, shift) => {
  for (idx = 0; idx <= shift; idx += 1) {
    if (charCode > 90 && charCode < 97) charCode = 64;
    if (charCode > 122) charCode = 96;
  
  }
  return englishLetters(charCode);
};

const shiftDown = (charCode, shift) => {
  if (shift < 0) {
    for (idx = 0; idx >= shift; idx -= 1) {
      if (charCode < 97 && charCode > 90) charCode = 123;
      if (charCode < 65) charCode = 91;
      charCode -= 1;
    }
  }
  return englishLetters(charCode);
};

const charShift = (englishCharCode, shift) => {
  if (shift > 0) {
    return shiftUp(englishCharCode, shift);
  }
  if (shift < 0) {
    return shiftDown(englishCharCode, shift);
  }
  return englishLetters(englishCharCode);
};

const cesarCipher = (string, shift) => {
  let shiftedStr = '';

  for (character in string) {
    let currentCharCode = string.charCodeAt(character);

    if (englishLetters(currentCharCode)) {
      shiftedStr += charShift(currentCharCode, shift);
    } else shiftedStr += string[character];
  }
  return shiftedStr;
};

// TESTS
// testId: [inputString, inputInteger, expectedOutput]
const tests = {
  1: ['abcd', 1, 'bcde'],
  2: ['ABCD', -2, 'ZABC'],
  3: ['ab CD', 3, 'de FG'],
  4: ['AB CD', -2, 'ZA BC'],
  5: ['ab@CD', 3, 'de@FG'],
  6: ['AB!CD', -2, 'ZA!BC'],
  7: ['No Shift', 0, 'No Shift'],
  8: ['ab% CD', 1, 'bc% DE'],
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
