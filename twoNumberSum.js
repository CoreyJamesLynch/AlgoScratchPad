/*
DESCRIPTION
-> Func twoNumSum (non-empty array of distinct ints, target sum)
-> if(array contains two nums whose sum == target) return arr of those sums
-> else return []

CONSTRAINTS
-> There will be 1 or 0 pairs in the arr whose sum == target
-> Only distinct ints can be summed

DESCRIPTION
-> Func twoNumSum (non-empty array of distinct ints, target sum)
-> if(array contains two nums whose sum == target) return arr of those sums
-> else return []

CONSTRAINTS
-> There will be 1 or 0 pairs in the arr whose sum == target
-> Only distinct ints can be summed

PSEUDO
  -> targetNum = y; targetSum = targetSum; ArrInt = x;
  -> x + y = targetSum -> targetSum - x = y
  -> Loop through array 
    -> if y is in object return [x, y] 
      -> else add x to object
  -> return []
*/
// MY SOLUTION
const twoNumberSum = (array, targetSum) => {
  const numCollection = {};
  for (let idx = 0; idx < array.length; idx += 1) {
    const target = Object.keys(numCollection).find(
      (key) => key === (targetSum - array[idx]).toString()
    );
    if (target) return [parseInt(target), array[idx]];
    else numCollection[array[idx]] = true;
  }
  return [];
};

// TESTS
// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
// -> [-1, 11]
const start = new Date();
console.log(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164));
const end = new Date();
console.log(`Execution time: ${end - start} ms`);
// -> [-1, 11]
// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15));
// -> [-1, 11]
// console.log(twoNumberSum([14], 15));
// -> [-1, 11]
// console.log(twoNumberSum([15], 15));
// -> [-1, 11]
