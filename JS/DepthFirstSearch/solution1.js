// class Node {
//   constructor(name) {
//     this.name = name;
//     this.children = [];
//   }
//   addChild(name) {
//     this.children.push(new Node(name));
//     return this;
//   }
//   depthFirstSearch(array) {
//     array.push(this.name);
//     for (const child of this.children) {
//       child.depthFirstSearch(array);
//     }
//     return array;
//   }
// }

// // TESTS
// // testId: [[array], [expectedResult]]
// const tests = {
//   1: [
//     [
//       { children: ['B', 'C', 'D'], id: 'A', value: 'A' },
//       { children: ['E', 'F'], id: 'B', value: 'B' },
//       { children: [], id: 'C', value: 'C' },
//       { children: ['G', 'H'], id: 'D', value: 'D' },
//       { children: [], id: 'E', value: 'E' },
//       { children: ['I', 'J'], id: 'F', value: 'F' },
//       { children: ['K'], id: 'G', value: 'G' },
//       { children: [], id: 'H', value: 'H' },
//       { children: [], id: 'I', value: 'I' },
//       { children: [], id: 'J', value: 'J' },
//       { children: [], id: 'K', value: 'K' },
//     ],
//     ['A', 'B', 'E', 'F', 'I', 'J', 'C', 'D', 'G', 'K', 'H'],
//   ],
// };

// const startTest = () => {
//   const start = new Date();

//   testDepthFirstSearch(tests);

//   const end = new Date();
//   console.log(`Execution time ${end - start} ms`);
// };

// const testDepthFirstSearch = (tests) => {
//   for (test in tests) {
//     let testId = test;
//     let array = tests[test][0];
//     let expectedResult = tests[test][1];

//     console.log(runTest(testId, array, expectedResult));
//   }
// };

// const runTest = (testId, array, expectedResult) => {
//   const testNode = new Node()
//   let actualOutput = Node.depthFirstSearch(array);
//   let errorMsg = `Test ${testId} Failed. Expected ${actualOutput} to be ${expectedResult}`;

//   if (actualOutput !== expectedResult) return errorMsg;
//   return `Test ${testId} passed!`;
// };

// runTest();
