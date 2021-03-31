
from time import process_time_ns

# My Solution
# def isValidSubsequence(firstList, secondList):
#   if(len(firstList) < len(secondList)):
#     return False

#   firstListIdx = 0
#   secondListIdx = 0

#   while secondListIdx < len(secondList) and firstListIdx < len(firstList):
#       if firstList[firstListIdx] != secondList[secondListIdx]:
#           firstListIdx += 1
#       else:
#           secondListIdx += 1
#           firstListIdx += 1

#   if secondListIdx >= len(secondList):
#       return True

#   return False

# Their Solution 1
# def isValidSubsequence(list, sequence):
#     listIdx = 0
#     seqIdx = 0

#     while listIdx < len(list) and seqIdx < len(sequence):
#         if list[listIdx] == sequence[seqIdx]:
#           seqIdx += 1
#         listIdx += 1

#     return seqIdx == len(sequence)

# Their Solution 2
def isValidSubsequence(array, sequence):
  seqIdx = 0
  for value in array:
    if seqIdx == len(sequence): break
    if sequence[seqIdx] == value: seqIdx += 1
  return seqIdx == len(sequence)


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
