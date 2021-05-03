// I want to create two objects with charCodes as IDs and their associated english letters as values.
let englishUppercase = {};
let englishLowercase = {};
for (let idx = 1; idx <= 26; idx += 1) {
  englishUppercase[64 + idx] = String.fromCharCode(64 + idx);
  englishLowercase[96 + idx] = String.fromCharCode(96 + idx);
}
// One object for uppercase and One object for lowercase
// console.log(englishUppercase);
// console.log(englishLowercase);

// Then I want to check against those objects when deciding to shift
let sampleStr = 'adFE 123 Pa';
let shift = 1;
// -> 'beGF 123 Qb'
let shiftedStr = '';
for (letter in sampleStr) {
  let currentCharCode = sampleStr.charCodeAt(letter);
  let currentChar = '';
  // Then I can use those objects to determine what to shift to
  if (
    currentCharCode in englishLowercase ||
    currentCharCode in englishUppercase
  ) {
    currentChar = String.fromCharCode(currentCharCode + (shift % 16));
  } else currentChar = String.fromCharCode(currentCharCode);
  shiftedStr += currentChar
}
console.log(shiftedStr);

