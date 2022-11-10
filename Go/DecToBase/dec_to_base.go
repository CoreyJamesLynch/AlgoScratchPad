package main

func DecToBase(value, base int) string {
	const charset = "0123456789ABCDEF"
	var res string
	for value > 0 {
		res = string(charset[value%base]) + res
		value /= base
	}

	return res
}

// value = 14, base = 2
// 14 %  2= 0 -> res = "0"
// 14 / 2 -> value = 7

// 7 % 2 = 1 -> res = "10"
// 7 / 2 -> value = 3

// 3 % 2 = 1 -> res = "110"
// 3 / 2 -> value = 1

// 1 % 2 = 1 -> res = "1110"
// 1 / 2 -> value = 0 -> DONE
