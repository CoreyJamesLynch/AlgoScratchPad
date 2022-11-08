package main

import (
	"testing"
)

// Rewrite test to grab stdout using io.writer

func TestFizzBuzz(t *testing.T) {
	fizzBuzzSeqTests := []struct {
		length int
		target string
	}{
		{1, "1"},
		{2, "1, 2"},
		{3, "1, 2, Fizz"},
		{4, "1, 2, Fizz, 4"},
		{5, "1, 2, Fizz, 4, Buzz"},
		{6, "1, 2, Fizz, 4, Buzz, Fizz"},
		{7, "1, 2, Fizz, 4, Buzz, Fizz, 7"},
		{8, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8"},
		{9, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz"},
		{10, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz"},
		{11, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11"},
		{12, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz"},
		{13, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13"},
		{14, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14"},
		{15, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz"},
		{16, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16"},
		{17, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17"},
		{18, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz"},
		{19, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19"},
		{20, "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz"},
	}

	for _, tt := range fizzBuzzSeqTests {
		t.Run("FizzBuzz test", func(t *testing.T) {
			got := FizzBuzz(tt.length)
			// fmt.Printf("n is: %v\n", tt.length)
			want := tt.target
			// fmt.Printf("answer is: %v\n", tt.target)
			if got != want {
				gotLen := len(got)
				wantLen := len(want)
				t.Errorf("\ngot %v with length of %v\nwant %v with length of %v\n", got, gotLen, want, wantLen)
			}
		})
	}
}
