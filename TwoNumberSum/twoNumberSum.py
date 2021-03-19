# transpile twoNumberSum.js to Python

# create a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
# if any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
# else return an empty array.

# there will not be more than one target pair within the input array.
# a number cannot be summed with itself to achieve the target sum.


# TESTS
import timeit
print(timeit.timeit(twoNumberSum(
    [3, 5, -4, 8, 11, 1, -1, 6], 10), number=10000))
# -> [-1, 11]

# print(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164))
# -> []

# print(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15))
# -> []

# print(twoNumberSum([14], 15))
# -> []

# print(twoNumberSum([15], 15))
# -> []
