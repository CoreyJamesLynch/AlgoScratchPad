def aVeryBigSum(arr):
    sum = 0
    for int in arr:
        sum += int
    return sum


# TESTS
print(aVeryBigSum([1000000001, 1000000002,
      1000000003, 1000000004, 1000000005]))
# -> 5000000015
