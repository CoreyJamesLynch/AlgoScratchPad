// SOLUTION
const sockMerchant = (n, arr) => {
  let pairsOfSocks = 0;
  const sockCounter = {};
  for (let idx = 0; idx < n; idx += 1) {
    sockCounter[arr[idx]] = (sockCounter[arr[idx]] || 0) + 1;
  }
  const sortSocks = Object.values(sockCounter);
  for (let idx = 0; idx < sortSocks.length; idx += 1) {
    pairsOfSocks += Math.floor(sortSocks[idx] / 2);
  }
  return pairsOfSocks;
};

// TESTS
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
// -> 3
