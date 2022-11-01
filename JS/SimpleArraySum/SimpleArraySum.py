# transpile SimpleArraySum.js to Python

# given an array of integers find sum of integers

def simpleArraySum(arr):
    # variable to track total
    sum = 0
    # for loop to iterate array
    for integer in arr:
        sum += integer
    # each iteration adds to total tracker
    return sum


# TESTS
print(simpleArraySum([1, 2, 3, 4, 10, 11]))
# -> 31
