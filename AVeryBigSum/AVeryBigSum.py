# Transpile AVeryBigSum.js to Python

# given an array of integers find sum of integers

# create a function called aVeryBigSum
def aVeryBigSum(arr):
  # create a var to hold the sum
  sum = 0
  # iterate array of integers
  for int in arr:
    # add each integer to sum var
    sum += int
  # return sum var
  return sum

# TESTS
print(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))
# -> 5000000015