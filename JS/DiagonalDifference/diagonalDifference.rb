require 'byebug';

def diagonalDifference(arr)
  first = 0
  second = 0
  i = 0
  puts arr
    while i < arr.length
      first += arr[i][i]
      second += arr[i][(arr.size - 1) - i]
      i += 1
      byebug
    end
    puts (first - second).abs
end

diagonalDifference(
  [
    [11, 2, 4], 
    [4, 5, 6], 
    [10, 8, -12]
  ]
)

# 4 -> first time around
# 9 -> second time around
# 19 -> third time around
# Loop breaks

# used byebug (after it hits, type second to see the value of second then hit cont to get to second iteration and so forth)

# gem install byebug
# docs: https://github.com/deivid-rodriguez/byebug
