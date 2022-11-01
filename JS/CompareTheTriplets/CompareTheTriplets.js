/* DESCRIPTION
Alice makes one prob for HR. -> ProbA
Bob makes on prob for HR. -> ProbB
A reviewer ranks each of the two challenges according to a criteria
The criteria is a score 1 to 100 in each of 3 categories
The categories are problem clarity, originality, and difficulty
ProbA Rating -> a = (a[0], a[1], a[2])
ProbB Rating -> b = (b[0], b[1], b[2])

Summary:
One reviewer rates two problems 1 to 100 in across 3 categories
if a[i] > b [i] a ++
if a[i] < b [i] b ++
if a[i] = b [i] 
The total points earned by either is it's comparison points
Given a[...i] and b[...i], determine their respective comparison points

Example:
a = [1, 2, 3]
b = [3, 2, 1]
a++        1
b++  1
return [1, 1] (a's score first, b's score second)
*/

// OBJECTIVE
// Create func called compareTriplets
// Pass compareTriplets 2 arr of ints: aRatings, bRatings
// Return comparison points by comparing vals of ea idx in args w/ each other

// SOLUTION
const compareTriplets = (aRatings, bRatings) => {
  let comparisonPoints = [0, 0];
  for (let idx = 0; idx < aRatings.length; idx += 1) {
    if (aRatings[idx] > bRatings[idx]) comparisonPoints[0] += 1;
    if (aRatings[idx] < bRatings[idx]) comparisonPoints[1] += 1;
  }
  return comparisonPoints;
};

// TESTS
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
// -> [1, 1]
// console.log(compareTriplets([17, 28, 30], [99, 16, 8]))
// -> [2, 1]
