
from time import process_time_ns

# is firstStr a subsequence of secondstr?


def isSubsequence(firstStr, secondStr):
    if(len(secondStr) < len(firstStr) or len(firstStr) == 0):
        return False

    secondStrChar = 0
    firstStrChar = 0

    while firstStrChar < len(firstStr) and secondStrChar < len(secondStr):
        if secondStr[secondStrChar] != firstStr[firstStrChar]:
            secondStrChar += 1
        else:
            firstStrChar += 1
            secondStrChar += 1

    if firstStrChar >= len(firstStr):
        return True

    return False


# TESTS
tests = {
    1: [["abc", "ahbgdc"], True],
    2: [["axc", "ahbgdc"], False],
    3: [["abcdefghij", "abcdefghij"], True],
    4: [["abc", "a"], False],
    5: [["", "a"], False],
    6: [["a", ""], False]
}


def testIsSubsequence():
    start = process_time_ns()

    for test in tests:
        print(runTest(tests[test][0], tests[test][1], test))

    end = process_time_ns()
    print("Time elapsed:", end - start, "ns")


def runTest(input, expectedResult, testId):
    result = isSubsequence(input[0], input[1])
    errorMsg = f'Test {testId} failed. Expected {result} to be {expectedResult}'
    if(result != expectedResult):
        return errorMsg
    return f'Test {testId} Passed!'


testIsSubsequence()
