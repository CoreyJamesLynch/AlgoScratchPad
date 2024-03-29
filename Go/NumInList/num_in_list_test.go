package main

import (
	"testing"
)

func TestNumInList(t *testing.T) {
	numInListTests := []struct {
		list   []int
		target int
		inList bool
	}{
		{[]int{1, 2, 3, 4, 5}, 1, true},
		{[]int{1, 2, 3, 4, 5}, 2, true},
		{[]int{1, 2, 3, 4, 5}, 3, true},
		{[]int{1, 2, 3, 4, 5}, 4, true},
		{[]int{1, 2, 3, 4, 5}, 5, true},
		{[]int{1, 2, 3, 4, 5}, 0, false},
		{[]int{1, 2, 3, 4, -1}, -1, true},
		{[]int{8, 2, 5, 4, 1, 8, 9, 3, 0, 88, 23, 44, 123}, 8, true},
		{[]int{8, 2, 5, 4, 1, 8, 9, 3, 0, 88, 23, 44, 123}, 2, true},
		{[]int{8, 2, 5, 4, 1, 8, 9, 3, 0, 88, 23, 44, 123}, 5, true},
		{[]int{8, 2, 5, 4, 1, 8, 9, 3, 0, 88, 23, 44, 123}, 4, true},
		{[]int{8, 2, 5, 4, 1, 8, 9, 3, 0, 88, 23, 44, 123}, 1, true},
		{[]int{8, 2, 5, 4, 1, 8, 9, 3, 0, 88, 23, 44, 123}, 8, true},
		{[]int{8, 2, 5, 4, 1, 8, 9, 3, 0, 88, 23, 44, 123}, 9, true},
		{[]int{8, 2, 5, 4, 1, 8, 9, 3, 0, 88, 23, 44, 123}, 3, true},
		{[]int{8, 2, 5, 4, 1, 8, 9, 3, 0, 88, 23, 44, 123}, 0, true},
		{[]int{8, 2, 5, 4, 1, 8, 9, 3, 0, 88, 23, 44, 123}, 88, true},
		{[]int{8, 2, 5, 4, 1, 8, 9, 3, 0, 88, 23, 44, 123}, 23, true},
		{[]int{8, 2, 5, 4, 1, 8, 9, 3, 0, 88, 23, 44, 123}, 44, true},
		{[]int{8, 2, 5, 4, 1, 8, 9, 3, 0, 88, 23, 44, 123}, 123, true},
		{[]int{8, 2, 5, 4, 1, 8, 9, 3, 0, 88, 23, 44, 123}, 321, false},
		{[]int{8, 2, 5, 4, 1, 8, 9, 3, 0, 88, 23, 44, 123}, 32, false},
		{[]int{8, 2, 5, 4, 1, 8, 9, 3, 0, 88, 23, 44, 123}, 7, false},
		{[]int{8, 2, 5, 4, 1, 8, 9, 3, 0, 88, 23, 44, 123}, 6, false},
		{[]int{-1, -1, -1, -1, -1, -1, -1, -1}, -1, true},
		{[]int{-1, -1, -1, -1, -1, -1, -1, -1}, 1, false},
	}

	for _, tt := range numInListTests {
		t.Run("Your test", func(t *testing.T) {
			got := NumInList(tt.list, tt.target)
			if got != tt.inList {
				t.Errorf("%#v got %v want %v", tt.inList, got, tt.inList)
			}
		})
	}
}
