const findClosestValueInBst = (tree, target) => {
  let closest = Infinity;
  let currentNode = tree;
  while(currentNode !== null){
    if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
      closest = currentNode.value;
    }

    if(currentNode.value > target) currentNode = currentNode.left;
    else if(currentNode.value < target) currentNode = currentNode.right;
    else break;
  }
  return closest
};

// TESTS
// testId: [{targetInput, treeInput}, expectedOutput]
const tests = {
  1: [
    {
      target: 12,
      tree: {
        left: {
          left: {
            left: {
              left: null,
              right: null,
              value: 1,
            },
            right: null,
            value: 2,
          },
          right: {
            left: null,
            right: null,
            value: 5,
          },
          value: 5,
        },
        right: {
          left: {
            left: null,
            right: {
              left: null,
              right: null,
              value: 14,
            },
            value: 13,
          },
          right: {
            left: null,
            right: null,
            value: 22,
          },
          value: 15,
        },
        value: 10,
      },
    },
    13,
  ],
};

const startTest = () => {
  const start = new Date();

  testFindClosestValueInBst(tests);

  const end = new Date();
  console.log(`Execution time ${end - start} ms`);
};

const testFindClosestValueInBst = (tests) => {
  for (test in tests) {
    let testId = test;
    let targetInput = tests[test][0].target;
    let treeInput = tests[test][0].tree;
    let expectedOutput = tests[test][1];

    console.log(runTest(testId, targetInput, treeInput, expectedOutput));
  }
};

const runTest = (testId, targetInput, treeInput, expectedOutput) => {
  let actualOutput = findClosestValueInBst(treeInput, targetInput);
  let errorMsg = `Test ${testId} Failed. Expected ${actualOutput} to be ${expectedOutput}`;

  if (actualOutput !== expectedOutput) return errorMsg;
  return `Test ${testId} passed!`;
};

startTest();
