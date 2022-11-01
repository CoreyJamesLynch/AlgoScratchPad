
const aVeryBigSum = (largeNumbers) => {
  let counter = 0;
  for (let idx = 0; idx < largeNumbers.length; idx++) {
    counter += largeNumbers[idx];
  }
  return counter;
};

// TESTS
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
// -> 5000000015
