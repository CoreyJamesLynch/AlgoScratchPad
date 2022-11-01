from time import process_time_ns


def sortedSquaredArray(array):
    newArr = []
    for value in array:
        newArr.append(value * value)
    if array[0] < 1:
        newArr.sort()
    return newArr


# Tests
def testSortedSquareArray():
    start = process_time_ns()
    if(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]) == [1, 4, 9, 25, 36, 64, 81]):
        print(True)
    else:
        print(f"returned {sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])}")
        print("expected [1, 4, 9, 25, 36, 64,81]")

    if(sortedSquaredArray([1]) == [1]):
        print(True)
    else:
        print(f"returned {sortedSquaredArray([1])}")
        print("expected [1]")

    if(sortedSquaredArray([1, 4]) == [1, 16]):
        print(True)
    else:
        print(f"returned {sortedSquaredArray([1, 4])}")
        print("expected [1, 16]")

    # if(sortedSquaredArray([1, 4]) == [1, 16]):
    #     print(True)
    # else:
    #     print(f"returned {sortedSquaredArray([1, 4])}")
    #     print("expected [1, 16]")


# print(sortedSquaredArray([1, 2, 3, 4, 5]))
# -> [1, 4, 9, 16, 25]
# print(sortedSquaredArray([0]))
# -> [0]
# print(sortedSquaredArray([100]))
# -> [100]
# print(sortedSquaredArray([-1]))
# -> [1]
# print(sortedSquaredArray([-1, -4]))
# -> [1, 4]
# print(sortedSquaredArray([-5, -4, -3, -2, -1]))
# -> [1, 4, 9, 16, 25]
# print(sortedSquaredArray([-10]))
# -> [100]
# print(sortedSquaredArray([-10, -5, 0, 5, 10]))
# -> [0, 25, 25, 100, 100]
# print(sortedSquaredArray([-7, -3, 1, 9, 22, 30]))
# -> [1, 9, 49, 81, 484, 900]
# print(sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]))
# -> [0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500]
# print(sortedSquaredArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
# -> [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
# print(sortedSquaredArray([-1, -1, 2, 3, 3, 3, 4]))
# -> [1, 1, 4, 9, 9, 9, 16]
# print(sortedSquaredArray([-3, -2, -1]))
# -> [1, 4, 9]

    end = process_time_ns()
    print("Time elapsed:", end - start, "ns")
