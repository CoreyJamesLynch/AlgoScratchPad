package main

import (
	"strings"
)


const charset = "0123456789ABCDEF"

func BaseToDec(value string, base int) int {
	var res int
	var multiplier int = 1

	for i := (len(value) - 1); i >= 0; i -= 1 {
		res += strings.Index(charset, string(value[i])) * multiplier
		multiplier *= base
	}
	return res
}
