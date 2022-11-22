package main

import (
	"fmt"
	"testing"
)

func TestFindTwoThatSum(t *testing.T) {
	// pack parameters into a struct for unpacking later
	tests := []struct {
		// argument
		numbers []int
		// argument
		sum int
		// notes if sum exists in slice (-1, -1) should be returned if false
		possible  bool
		lowestVal int
	}{
		// remember -> []int{put int slice values here}
		{[]int{1, 2, 3, 4}, 7, true, 2},
		{[]int{0, -1, 1}, 0, true, 1},
		{[]int{0, 1, 1}, 0, false, -1},
		{[]int{10, 1, 12, 3, 7, 2, 2, 1}, 4, true, 1},
	}
	// we don't care about the idx. tc is value at idx. test is arg slice above
	for _, tc := range tests {
		// call test, run this func.
		// store "<arg slice> with sum <arg sum>" and anon test func as parameters
		t.Run(fmt.Sprintf("%v with sum %v", tc.numbers, tc.sum), func(t *testing.T) {
			// append is used to copy the numbers so that even if the
			// FindTwoThatSum code alters the slice (which it shouldn't!)
			// a solution like the following isn't accepted:
			//
			//   numbers[0] = 0
			//   numbers[1] = sum
			//   return 0, 1
			//
			// If this doesn't make sense to you, don't worry about it
			// for now :)
			numbersCopy := append([]int{}, tc.numbers...)
			// int returns from FindToThatSum are stored in i, j respectively
			// FindToThatSum is being passed a copy of arg slices above
			i, j := FindTwoThatSum(numbersCopy, tc.sum)
			// calls intSlicesEqual func to test the slice copied from FindTwoThatSum params match slices in the tests being passed to test that func
			if err := intSlicesEqual(numbersCopy, tc.numbers); err != nil {
				// return err msg if slices don't match
				t.Fatalf("FindTwoThatSum() altered the numbers list; %v", err)
			}
			// if not false
			if !tc.possible {
				// and -1, -1 is returned
				if i != -1 && j != -1 {
					// return error msg. no sum should always be false and return -1, -1
					t.Fatalf("FindTwoThatSum() = (%v, %v); want (%v, %v)", i, j, -1, -1)
				}
				// else return -1, -1
				return
			}
			// sum return values of FindTwoThatSum
			got := tc.numbers[i] + tc.numbers[j]
			// is summed return does not match expected return. This allows for multiple solutions
			if got != tc.sum {
				// return err msg
				t.Fatalf("FindTwoThatSum() = (%v, %v); sum = %v; want sum %v", i, j, got, tc.sum)
			}
			if i != tc.lowestVal {
				t.Fatalf("Returned %v as first val idx. Expected %v.", i, tc.lowestVal)
			}
		})
	}
}

// passes numbers copy and numbers then returns err
func intSlicesEqual(got, want []int) error {
	// compares length of numbers copy and numbers
	if len(got) != len(want) {
		// if len !=, return error msg
		return fmt.Errorf("len(got) = %v; len(want) = %v", len(got), len(want))
	}
	// for idx and idx val in numbers copy
	for i, gv := range got {
		// set wv = numbers idx val
		wv := want[i]
		// compares numbers copy idx val and numbers idx val
		if gv != wv {
			// if values are not equal return err
			return fmt.Errorf("got[%v] = %v; want[%v] = %v", i, gv, i, wv)
		}
	}
	// otherwise carry on
	return nil
}
