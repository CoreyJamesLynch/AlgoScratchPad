package main

func FindTwoThatSum(numbers []int, sum int) (int, int) {
	var sumIndices [][]int
	var idxDiff int = len(numbers)
	var res1, res2 int

	// find two ints from numbers that add to sum then append vals as a slice to sumIndices
	for s := 0; s < len(numbers); s += 1 {
		for f := len(numbers) - 1; f > s; f -= 1 {
			if numbers[s]+numbers[f] == sum {
				sumIndices = append(sumIndices, []int{s, f})
			}
		}
		// iterate values of sumIndices to find pair w/ smallest difference
		for _, indice := range sumIndices {
			var diff int = indice[1] - indice[0]
			if diff < idxDiff {
				idxDiff = diff
				res1, res2 = indice[0], indice[1]
			}
		}
	}
	// return indice w/ least diff and that represents vals in numbers that add to sum
	if len(sumIndices) > 0 {
		return res1, res2
	}
	// else return value that represents no pair of vals in numbers add to sum
	return -1, -1
}
