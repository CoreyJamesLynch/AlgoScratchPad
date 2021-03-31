
from time import process_time_ns


def isValidSubsequence(firstList, secondList):
  if(len(firstList) < len(secondList)):
    return False

  firstListIdx = 0
  secondListIdx = 0
  
  while secondListIdx < len(secondList) and firstListIdx < len(firstList):
      if firstList[firstListIdx] != secondList[secondListIdx]:
          firstListIdx += 1
      else:
          secondListIdx += 1
          firstListIdx += 1
      
  if secondListIdx >= len(secondList):
      return True

  return False


# TESTS
start = process_time_ns()

# print(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
# -> true

print(isValidSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10],
    [5, 1, 22, 22, 6, -1, 8, 10],
)),
# -> false

# print(
#   isValidSubsequence(
#     [5, 1, 22, 25, 6, -1, 8, 10],
#     [5, 1, 22, 25, 6, -1, 8, 10],
#   ),
# )
# -> true

# print(isValidSubsequence([5, 1, 22], [5, 1, 22]))
# -> true

end = process_time_ns()
print("Time elapsed:", end - start, "ns")
