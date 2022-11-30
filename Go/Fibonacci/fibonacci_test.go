package main

import (
	"fmt"
	"testing"
)

func TestFibonacci(t *testing.T) {
	tests := []struct {
		n    int
		want int
	}{
		{0, 0},
		{1, 1},
		{2, 1},
		{3, 2},
		{4, 3},
		{5, 5},
		{6, 8},
		{7, 13},
		{14, 377},
		{22, 17711},
		{25, 75025},
		{41, 165580141},
	}

	for _, tc := range tests {
		t.Run(fmt.Sprintf("n=%v", tc.n), func(t *testing.T) {
			got := Fibonacci(tc.n)
			want := tc.want

			if got != want {
				t.Fatalf("Given that n=%v, expected %v but got m%v\n", tc.n, tc.want, got)
			}
		})
	}
}
