// A = 65
// Z = 90
// Shift = 1
// Z shift 1 should output A

const outOfRange = (charCode) => {
  return (charCode > 122 || (charCode > 90 && charCode < 96) || charCode < 64) 
};

const putInRange = (charCode, shift) => {
  // break this code out into above/below upper and above/below lower
  // if Uppercase(65 - 90), while(newCharCode + newShift > 90) newCharCode = 64 + ((newCharCode + newShift) - 90)
  // test if charCode is upper or lower AND direction. Either cna be between after shift
  if(charCode)
}

if (putInRange(90, 1)) console.log('CharCode is not in the alphabet');
if (putInRange(64, -3)) console.log('CharCode is not in the alphabet');
if (putInRange(122, 3)) console.log('CharCode is not in the alphabet');
if (putInRange(122, 3)) console.log('CharCode is not in the alphabet');
