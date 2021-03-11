// 0 < homeTeam.length && awayTeam.length <= 30
// competitions [[homeTeam, awayTeam]] | results [1 || 0]
// results[i] === 1 -> homeTeam
// results[i] === 0 -> awayTeam
// only one team will win tournament (no ties)
// there will always be atleast two teams in the tournament
// winner of the tournament is the team with the most points

// MY SOLUTION -> Not finished
// function tournamentWinner(competitions, results) {
// 	// pointTracker = {};
// 	const pointTracker = {};
//   // win = 3 points
// 	// loss = 0 points
// 	for(let idx = 0; idx < competitions.length; idx += 1){
// 		let winner = competitions[idx][results[idx]]
// 		pointTracker[winner] ? (pointTracker[winner] += 3) : (pointTracker[winner] = 3)
// 		// console.log(pointTracker)
// 	}
// 	// one pointer for both arrays
// 	// add winning team to point tracker add 3 points to it's value

// 	// winner = Math.max(Object.values(pointTracker))
// 	let firstPlace = Object.entries(pointTracker)
// 	console.log(firstPlace)
// 	// need another iteration here
//   return `${firstPlace}`;
// 	// return the winning team (team with the most points in pointTracker)
// }

// THERE SOLUTION 1
// COMPLEXITY Time: O(n) linear, iterating through input arrays once | Space: O(k) constant, not data structure being created is relative in size to the input.
const HOME_TEAM_WON = 1;
function tournamentWinner(competitions, results) {
  let currentBestTeam = '';
  const scores = { [currentBestTeam]: 0 };

  for (let idx = 0; idx < competitions.length; idx++) {
    const result = results[idx];
    const [homeTeam, awayTeam] = competitions[idx];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
} // 6.2ms average

function updateScores(team, points, scores) {
  if (!(team in scores)) scores[team] = 0;
  scores[team] += points;
}

// TESTS
const start = new Date(); // Add tests below this line

// console.log(
//   tournamentWinner(
//     [
//       ['HTML', 'C#'],
//       ['C#', 'Python'],
//       ['Python', 'HTML'],
//     ],
//     [0, 0, 1],
//   ),
// );
// // -> "Python"

// console.log(
//   tournamentWinner(
//     [
//       ['HTML', 'Java'],
//       ['Java', 'Python'],
//       ['Python', 'HTML'],
//     ],
//     [0, 1, 1],
//   ),
// );
// // -> "Java"

// console.log(
//   tournamentWinner(
//     [
//       ['HTML', 'Java'],
//       ['Java', 'Python'],
//       ['Python', 'HTML'],
//       ['C#', 'Python'],
//       ['Java', 'C#'],
//       ['C#', 'HTML'],
//     ],
//     [0, 1, 1, 1, 0, 1],
//   ),
// );
// // -> "C#"

// console.log(
//   tournamentWinner(
//     [
//       ['HTML', 'Java'],
//       ['Java', 'Python'],
//       ['Python', 'HTML'],
//       ['C#', 'Python'],
//       ['Java', 'C#'],
//       ['C#', 'HTML'],
//       ['SQL', 'C#'],
//       ['HTML', 'SQL'],
//       ['SQL', 'Python'],
//       ['SQL', 'Java'],
//     ],
//     [0, 1, 1, 1, 0, 1, 0, 1, 1, 0],
//   ),
// );
// // -> "C#"

// console.log(tournamentWinner([['Bulls', 'Eagles']], [1]));
// // -> "Bulls"

// console.log(
//   tournamentWinner(
//     [
//       ['Bulls', 'Eagles'],
//       ['Bulls', 'Bears'],
//       ['Bears', 'Eagles'],
//     ],
//     [0, 0, 0],
//   ),
// );
// // -> "Eagles"

// console.log(
//   tournamentWinner(
//     [
//       ['Bulls', 'Eagles'],
//       ['Bulls', 'Bears'],
//       ['Bulls', 'Monkeys'],
//       ['Eagles', 'Bears'],
//       ['Eagles', 'Monkeys'],
//       ['Bears', 'Monkeys'],
//     ],
//     [1, 1, 1, 1, 1, 1],
//   ),
// );
// // -> "Bulls"

console.log(
  tournamentWinner(
    [
      ['AlgoMasters', 'FrontPage Freebirds'],
      ['Runtime Terror', 'Static Startup'],
      ['WeC#', 'Hypertext Assassins'],
      ['AlgoMasters', 'WeC#'],
      ['Static Startup', 'Hypertext Assassins'],
      ['Runtime Terror', 'FrontPage Freebirds'],
      ['AlgoMasters', 'Runtime Terror'],
      ['Hypertext Assassins', 'FrontPage Freebirds'],
      ['Static Startup', 'WeC#'],
      ['AlgoMasters', 'Static Startup'],
      ['FrontPage Freebirds', 'WeC#'],
      ['Hypertext Assassins', 'Runtime Terror'],
      ['AlgoMasters', 'Hypertext Assassins'],
      ['WeC#', 'Runtime Terror'],
      ['FrontPage Freebirds', 'Static Startup'],
    ],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
  ),
);
// -> 'AlgoMasters'

// console.log(
//   tournamentWinner(
//     [
//       ['HTML', 'Java'],
//       ['Java', 'Python'],
//       ['Python', 'HTML'],
//       ['C#', 'Python'],
//       ['Java', 'C#'],
//       ['C#', 'HTML'],
//       ['SQL', 'C#'],
//       ['HTML', 'SQL'],
//       ['SQL', 'Python'],
//       ['SQL', 'Java'],
//     ],
//     [0, 0, 0, 0, 0, 0, 1, 0, 1, 1],
//   ),
// );
// // -> 'SQL'

// console.log(tournamentWinner([['A', 'B']], [0]));
// -> 'B'

const end = new Date(); // Add tests above this line
console.log(`Execution time: ${end - start} ms`);
