
/* 
Given an array of positive integer, each representing the value of a coin, find the smallest value those coins cannot create.
- Coins aren't unique, the same value can occur multiple times
- Coins will always be positive
- Empty arrays should return 1 as that is the smallest positive value a coin could have.

Example -> [1, 2, 5] //-> 4
*/

// MY SOLUTION (not finished)
function nonConstructibleChange(coins) {
  // Short-circuit -> if coins length is 0 return 1
	if(coins.length === 0) return 1;
	// create left pointer
	let leftPointer = 0;
	// create right pointer
	let rightPointer = coins.length - 1;
	// create sorted coins
	let sortedCoins = coins.sort((a, b) => a - b);
	
	let counter = sortedCoins[0];
	// create loop
	while(leftPointer !== rightPointer){
		// total === left + right
		let total = sortedCoins[leftPointer] + sortedCoins[rightPointer];
		console.log(total)
		// if total === counter, reset, counter ++
		if(total === counter || rightPointer === counter || leftPointer === counter){
			counter += 1;
			leftPointer = 0;
			rightPointer = sortedCoins.length - 1;
		}
		// if total less than counter, left ++
		if(total < counter) leftPointer += 1;
		// if total greater than, right --
		if(total > counter) rightPointer -= 1;
	}
	return counter;
}

// THEIR SOLUTION 1
function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);

  let currentChangeCreated = 0;
  for (const coin of coins) {
    if(coin > currentChangeCreated + 1) return currentChangeCreated + 1;

    currentChangeCreated += coin;
  }

  return currentChangeCreated + 1;
}

// TESTS
const start = new Date(); // Add tests below this line

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))
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
