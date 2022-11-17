package main

import (
	"fmt"
	"strconv"
	"strings"
)

func BaseToBase(value string, base int, newBase int) string {
	dec, err := strconv.ParseInt(value, base, 64)
	if err != nil {
		fmt.Println(err)
	}

	res := strconv.FormatInt(dec, newBase)

	return strings.ToUpper(res)
}
