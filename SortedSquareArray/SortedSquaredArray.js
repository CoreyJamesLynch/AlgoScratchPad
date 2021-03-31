/*
Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.
*/

// MY SOLUTION 1
// // Non-empty ascending order
// function sortedSquaredArray(array) {
//   // var to hold new array of squared vals
// 	const newArr = [];
// 	//loop through input arr
// 	for(let idx = 0; idx < array.length; idx += 1){
// 		// square each val then push to new arr var
// 		newArr.push(array[idx] * array[idx]);
// 	}
// 	if(array[0] < 1) newArr.sort((a, b) => a - b);

//   return newArr;
// 	// return var w/ new array of same length in ascending order
// }

// MY SOLUTION 2
// Complexity Time: O(n log n), I am creating a new output array relative to the input array O(n) then sorting output array O(log n) | Space: O(n), Creating a new output array relative to the input array.
// function sortedSquaredArray(array) {
// 	const newArr = [];
// 	for(let idx = 0; idx < array.length; idx += 1){
// 		newArr.push(Math.pow(array[idx], 2));
// 	}
// 	if(array[0] < 1) newArr.sort((a, b) => a - b);
//   return newArr;
// } // 7.6ms average

// THEIR SOLUTION 1
// Complexity Time: O(n log n), creating a new output array relative to the input array and then sorting the new output array | Space: O(n), creating a new output array relative to the input array.
// function sortedSquaredArray(array){
//   const sortedSquares = new Array(array.length).fill(0);

//   for(let idx = 0; idx < array.length; idx++){
//     const value = array[idx];
//     sortedSquares[idx] = value * value;
//   }

//   sortedSquares.sort((a, b) => a - b);
//   return sortedSquares;
// } // 8ms average

//THEIR SOLUTION 2
// Complexity Speed: O(n), single iteration through input array | Size: Creating output array relative to the input array.
function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0);
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for (let idx = array.length; idx >= 0; idx--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue;
      smallerValueIdx++;
    } else {
      sortedSquares[idx] = largerValue * largerValue;
      largerValueIdx--;
    }
  }
  return sortedSquares;
} // 8ms average

// TESTS
const start = new Date(); // Add tests below this line
// console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))
// // -> [1, 4, 9, 25, 36, 64, 81]
// console.log(sortedSquaredArray([1]))
// // -> [1]
// console.log(sortedSquaredArray([1, 4]))
// // -> [1, 4]
// console.log(sortedSquaredArray([1, 2, 3, 4, 5]))
// // -> [1, 4, 9, 16, 25]
// console.log(sortedSquaredArray([0]))
// // -> [0]
// console.log(sortedSquaredArray([100]))
// // -> [100]
// console.log(sortedSquaredArray([-1]))
// // -> [1]
// console.log(sortedSquaredArray([-1, -4]))
// // -> [1, 4]
// console.log(sortedSquaredArray([-5, -4, -3, -2, -1]))
// // -> [1, 4, 9, 16, 25]
// console.log(sortedSquaredArray([-10]))
// // -> [100]
// console.log(sortedSquaredArray([-10, -5, 0, 5, 10]))
// // -> [0, 25, 25, 100, 100]
// console.log(sortedSquaredArray([-7, -3, 1, 9, 22, 30]))
// // -> [1, 9, 49, 81, 484, 900]
console.log(sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]));
// -> [0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500]
// console.log(sortedSquaredArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
// // -> [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// console.log(sortedSquaredArray([-1, -1, 2, 3, 3, 3, 4]))
// // -> [1, 1, 4, 9, 9, 9, 16]
// console.log(sortedSquaredArray([-3, -2, -1]))
// // -> [1, 4, 9]
const end = new Date(); // Add tests above this line
console.log(`Execution time: ${end - start} ms`);
