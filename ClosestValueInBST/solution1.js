const closestVal = (tree, target) => {
  let nodeLength = tree.nodes.length;
  let node = tree.nodes;
  let closestVal = null;
  for (let idx = 0; idx < nodeLength; idx += 1) {
    let diff = Math.abs(target - node[idx].value);
    console.log(diff)
    if (closestVal === null || diff < closestVal) {
      closestVal = diff;
    }
    if (closestVal === diff) return closestVal;
  }
  return closestVal;
};

// TESTS
// testId: [{targetInput, treeInput}, expectedOutput]
const tests = {
  1: [
    {
      target: 12,
      tree: {
        nodes: [
          { id: '10', left: '5', right: '15', value: 10 },
          { id: '15', left: '13', right: '22', value: 15 },
          { id: '22', left: null, right: null, value: 22 },
          { id: '13', left: null, right: '14', value: 13 },
          { id: '14', left: null, right: null, value: 14 },
          { id: '5', left: '2', right: '5-2', value: 5 },
          { id: '5-2', left: null, right: null, value: 5 },
          { id: '2', left: '1', right: null, value: 2 },
          { id: '1', left: null, right: null, value: 1 },
        ],
        root: '10',
      },
    },
    13,
  ],
};

const startTest = () => {
  const start = new Date();

  testClosestVal(tests);

  const end = new Date();
  console.log(`Execution time ${end - start} ms`);
};

const testClosestVal = (tests) => {
  for (test in tests) {
    let testId = test;
    let targetInput = tests[test][0].target;
    let treeInput = tests[test][0].tree;
    let expectedOutput = tests[test][1];

    console.log(runTest(testId, targetInput, treeInput, expectedOutput));
  }
};

const runTest = (testId, targetInput, treeInput, expectedOutput) => {
  let actualOutput = closestVal(treeInput, targetInput);
  let errorMsg = `Test ${testId} Failed. Expected ${actualOutput} to be ${expectedOutput}`;

  if (actualOutput !== expectedOutput) return errorMsg;
  return `Test ${testId} passed!`;
};

startTest();
