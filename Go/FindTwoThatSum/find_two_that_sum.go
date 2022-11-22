package main

// find each int pair in numbers that add to sum
func FindTwoThatSum(numbers []int, sum int) (int, int) {
	var sumIndices [][]int
	for s := 0; s < len(numbers); s += 1 {
		for f := len(numbers) - 1; f > s; f -= 1 {
			if numbers[s]+numbers[f] == sum {
				sumIndices = append(sumIndices, []int{s, f})
			}
		}
	}
	return findSmallestIndicesDiff(sumIndices, len(numbers))
}

// find indices w/ smallest difference or return -1, -1 if no indices
func findSmallestIndicesDiff(sumIndices [][]int, length int) (int, int) {
	var idxDiff int = length
	var res1, res2 int
	for _, s := range sumIndices {
		var diff int = s[1] - s[0]
		if diff < idxDiff {
			idxDiff = diff
			res1, res2 = s[0], s[1]
		}
	}
	if len(sumIndices) > 0 {
		return res1, res2
	}
	return -1, -1
}
