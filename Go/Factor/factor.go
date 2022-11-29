package main

// returns factor of number
func Factor(primes []int, number int) []int {
	var res []int
	// primes start at 2 so short circuit for lower values passed as number
	if number <= 1 {
		return append(res, number)
	}
	for _, num := range primes {
		for number%num == 0 {
			res = append(res, num)
			number /= num
		}
	}
	// catch any remainder of number and attach to end of result
	if number > 1 {
		res = append(res, number)
	}
	return res
}
