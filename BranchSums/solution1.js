const branchSums = (root) => {
  return root;
};

// TESTS
// testId: [{tree}, [expectedOutput]]
const tests = {
  1: [
    {
      left: {
        left: {
          left: {
            left: null,
            right: null,
            value: 8,
          },
          right: {
            left: null,
            right: null,
            value: 9,
          },
          value: 4,
        },
        right: {
          left: {
            left: null,
            right: null,
            value: 10,
          },
          right: null,
          value: 5,
        },
        value: 2,
      },
      right: {
        left: {
          left: null,
          right: null,
          value: 6,
        },
        right: {
          left: null,
          right: null,
          value: 7,
        },
        value: 3,
      },
      value: 1,
    },
    [15, 16, 18, 10, 11],
  ],
};

const startTest = () => {
  const start = new Date();

  testBranchSums(tests);

  const end = new Date();
  console.log(`Execution time ${end - start} ms`);
};

const testBranchSums = (tests) => {
  for (test in tests) {
    let testId = test;
    let tree = tests[test][0];
    let expectedOutput = tests[test][1];

    console.log(runTest(testId, tree, expectedOutput));
  }
};

const runTest = (testId, tree, expectedOutput) => {
  let actualOutput = branchSums(tree);
  let errorMsg = `Test ${testId} Failed. Expected ${actualOutput} to be ${expectedOutput}`;

  if (actualOutput !== expectedOutput) return errorMsg;
  return `Test ${testId} passed!`;
};

startTest();
