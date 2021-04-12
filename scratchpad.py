tests = {
    1: [["abc", "ahbgdc"], True],
    2: [["axc", "ahbgdc"], False],
    3: [["abcdefghij", "abcdefghij"], True],
    4: [["abc", "a"], False],
    5: [["", "a"], False],
    6: [["a", ""], False]
}

for test in tests:
    print(test, tests[test][0], tests[test][1])
