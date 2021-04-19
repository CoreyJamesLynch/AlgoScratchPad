/* 
Given an array of positive integer, each representing the value of a coin, find the smallest value those coins cannot create.
- Coins aren't unique, the same value can occur multiple times
- Coins will always be positive
- Empty arrays should return 1 as that is the smallest positive value a coin could have.

Example -> [1, 2, 5] //-> 4
*/

// MY SOLUTION
// no coins = 1 <- short-circuit
// if the next number in the sorted array is 2 greater than the sum of all numbers so far +1, return current sum + 1
// the input array needs to be sorted from small to large size coins
// the sorted array needs to be iterated to find return conditions using two-pointer to compare pairs

const nonConstructibleChange = (input) => {
  if (input.length < 1) return 1;

  let sortedCoins = input.sort((a, b) => a - b);
  if (sortedCoins[0] > 1) return 1;

  let currentSum = 0;

  for (let idx = 0; idx < sortedCoins.length; idx += 1) {
    currentSum += sortedCoins[idx];
    if (sortedCoins[idx + 1] >= currentSum + 2) return currentSum + 1;
  }
  return currentSum + 1;
};

// THEIR SOLUTION 1
// function nonConstructibleChange(coins) {
//   coins.sort((a, b) => a - b);

//   let currentChangeCreated = 0;
//   for (const coin of coins) {
//     if(coin > currentChangeCreated + 1) return currentChangeCreated + 1;

//     currentChangeCreated += coin;
//   }

//   return currentChangeCreated + 1;
// }

// TESTS
const start = new Date(); // Add tests below this line

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
//-> 20

// console.log(nonConstructibleChange([1, 1, 1, 1, 1]))
//-> 6

// console.log(nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100]))
//-> 55

// console.log(nonConstructibleChange([6, 4, 5, 1, 1, 8, 9]))
//-> 3

// console.log(nonConstructibleChange([]))
//-> 1

// console.log(nonConstructibleChange([87]))
//-> 1

// console.log(nonConstructibleChange([5, 6, 1, 1, 2, 3, 4, 9]))
//-> 16

// console.log(nonConstructibleChange([5, 6, 1, 1, 2, 3, 43]))
//-> 19

// console.log(nonConstructibleChange([1, 1]))
//-> 3

// console.log(nonConstructibleChange([2]))
//-> 1

// console.log(nonConstructibleChange([1]))
//-> 2

// console.log(nonConstructibleChange([109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4]))
//-> 87

// console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))
//-> 29

const end = new Date(); // Add tests above this line
console.log(`Execution time: ${end - start} ms`);
