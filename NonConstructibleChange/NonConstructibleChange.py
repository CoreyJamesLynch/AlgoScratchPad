tests = {
    1: [[5, 7, 1, 1, 2, 3, 22], 20]
}


def minCoinSum(coins):
    return coins


def testMinCoinSum():
    for test in tests:
        runTest(tests[test][0], tests[test][1], test)


def runTest(input, expectedResult, testID):
    actualResult = minCoinSum(input)
    errorMsg = f"Test {testID} failed: expected {expectedResult} but got {actualResult}."

    if(actualResult != expectedResult):
        print(errorMsg)
