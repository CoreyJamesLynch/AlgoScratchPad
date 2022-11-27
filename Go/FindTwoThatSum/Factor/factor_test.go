package main

import (
	"fmt"
	"sort"
	"testing"
)
// sorts got & want before comparing them
func TestFactor(t *testing.T) {
	tenPrimes := []int{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31}
	tests := []struct {
		tenPrimes []int
		number    int
		want      []int
	}{
		{tenPrimes, 30, []int{2, 3, 5}},
		{tenPrimes, 28, []int{2, 2, 7}},
		{tenPrimes, 720, []int{2, 2, 2, 2, 3, 3, 5}},
		{tenPrimes, 30, []int{2, 3, 5}},
		{tenPrimes, 720, []int{2, 2, 2, 2, 3, 3, 5}},
		{tenPrimes, 4, []int{2, 2}},
	}

	for _, test := range tests {
		t.Run(fmt.Sprintf("Factor %v with primes %v", test.number, test.want), func(t *testing.T) {
			got := Factor(test.tenPrimes, test.number)
			sort.Ints(got)
			sort.Ints(test.want)
			if err := intSliceEqual(got, test.want); err != nil {
				t.Fatalf("Factor() sorted = %v; want %v; err = %v", got, test.want, err)
			}
		})
	}
}

// deep comparison of got & want
func intSliceEqual(got []int, want []int) error {
	if len(got) != len(want) {
		return fmt.Errorf("Factor return length %v; Does not equal expected return length of %v\n", len(got), len(want))
	}
	for idx, gotVal := range got {
		wantVal := want[idx]
		if gotVal != wantVal {
			return fmt.Errorf("At index %v value %v was found and value %v was expected", idx, gotVal, wantVal)
		}
	}
	return nil
}
