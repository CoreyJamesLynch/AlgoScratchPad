package main

import (
	"strconv"
	"strings"
)

func FizzBuzz(n int) string {
	var res []string

	for i := 1; i <= n; i += 1 {
		fizz := i % 3
		buzz := i % 5

		switch {
		case fizz == 0 && buzz == 0:
			res = append(res, "Fizz Buzz")
		case buzz == 0:
			res = append(res, "Buzz")
		case fizz == 0:
			res = append(res, "Fizz")
		default:
			res = append(res, strconv.Itoa(i))
		}
	}

	resStr := strings.Join(res, ", ")
	return resStr
}
