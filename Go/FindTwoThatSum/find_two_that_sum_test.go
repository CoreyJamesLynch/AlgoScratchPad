package main

import (
	"fmt"
	"testing"
)

// false tests for -1, -1 default return
func TestFindTwoThatSum(t *testing.T) {
	tests := []struct {
		numbers       []int
		sum           int
		possible      bool
		lowestIdxDiff int
	}{
		{[]int{1, 2, 3, 4}, 7, true, 1},
		{[]int{0, -1, 1}, 0, true, 1},
		{[]int{0, 1, 1}, 0, false, 0},
		{[]int{10, 1, 12, 3, 7, 2, 2, 1}, 4, true, 1},
	}
	for _, tc := range tests {
		// success msg
		t.Run(fmt.Sprintf("%v with sum %v", tc.numbers, tc.sum), func(t *testing.T) {
			// tests if numbers slice was modified by FindTwoThatSum
			numbersCopy := append([]int{}, tc.numbers...)
			i, j := FindTwoThatSum(numbersCopy, tc.sum)
			if err := intSlicesEqual(numbersCopy, tc.numbers); err != nil {
				t.Fatalf("FindTwoThatSum() altered the numbers list; %v", err)
			}
			// tests -1, -1 is only returned when no values add to sum
			if !tc.possible {
				if i != -1 && j != -1 {
					t.Fatalf("FindTwoThatSum() = (%v, %v); want (%v, %v)", i, j, -1, -1)
				}
				return
			}
			// returned v. expected; any indices /w vals that match sum will pass here
			got := tc.numbers[i] + tc.numbers[j]
			if got != tc.sum {
				t.Fatalf("FindTwoThatSum() = (%v, %v); sum = %v; want sum %v", i, j, got, tc.sum)
			}
			// tests for specific indices w/ least difference
			idxDiff := j - i
			if idxDiff != tc.lowestIdxDiff {
				t.Fatalf("Returned %v as first val idx. Expected %v.", idxDiff, tc.lowestIdxDiff)
			}
		})
	}
}

// functionality for testing if FindTwoThatSum modifies original numbers slice
func intSlicesEqual(got, want []int) error {
	if len(got) != len(want) {
		return fmt.Errorf("len(got) = %v; len(want) = %v", len(got), len(want))
	}
	for i, gv := range got {
		wv := want[i]
		if gv != wv {
			return fmt.Errorf("got[%v] = %v; want[%v] = %v", i, gv, i, wv)
		}
	}
	return nil
}
