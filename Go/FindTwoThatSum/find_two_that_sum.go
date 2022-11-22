package main

func FindTwoThatSum(numbers []int, sum int) (int, int) {
	for s := 0; s < len(numbers); s += 1 {
		for f := len(numbers) - 1; f > s; f -= 1 {
			if numbers[s] + numbers[f] == sum {
				return s, f
			}
		}
	}
	return -1, -1
}
