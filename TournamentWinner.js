// 0 < homeTeam.length && awayTeam.length <= 30
// competitions [[homeTeam, awayTeam]] | results [1 || 0]
// results[i] === 1 -> homeTeam
// results[i] === 0 -> awayTeam
// only one team will win tournament (no ties)
// there will always be atleast two teams in the tournament
// winner of the tournament is the team with the most points

// MY SOLUTION 
// Time Complexity: O(n) linear, where n is the number of competitions and results. This function only requires one iteration through and so it scales relative to the input arrays.
// Space Complexity: O(n) linear where n is the number of individual teams found in the competitions input. The number of teams will increase in relation to the size of the competitions input.
const tournamentWinner = (competitions, results) => {
  let bestTeam = '';
  const comparison = {};

  for (let idx = 0; idx < competitions.length; idx += 1) {
    let roundWinner = '';

    if (results[idx] === 1) {
      roundWinner = competitions[idx][0];
    } else roundWinner = competitions[idx][1];

    comparison[roundWinner]
      ? (comparison[roundWinner] += 3)
      : (comparison[roundWinner] = 3);

    if (bestTeam) {
      if (comparison[roundWinner] > comparison[bestTeam]) {
        bestTeam = roundWinner;
      }
    } else bestTeam = roundWinner;
  }
  return bestTeam;
}; // 6.4ms average

// THEIR SOLUTION 1
// COMPLEXITY Time: O(n) linear, iterating through input arrays once | Space: O(k) constant, not data structure being created is relative in size to the input.
// const HOME_TEAM_WON = 1;
// function tournamentWinner(competitions, results) {
//   let currentBestTeam = '';
//   const scores = { [currentBestTeam]: 0 };

//   for (let idx = 0; idx < competitions.length; idx++) {
//     const result = results[idx];
//     const [homeTeam, awayTeam] = competitions[idx];

//     const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

//     updateScores(winningTeam, 3, scores);

//     if (scores[winningTeam] > scores[currentBestTeam]) {
//       currentBestTeam = winningTeam;
//     }
//   }
//   return currentBestTeam;
// } // 6.2ms average

// function updateScores(team, points, scores) {
//   if (!(team in scores)) scores[team] = 0;
//   scores[team] += points;
// }

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
