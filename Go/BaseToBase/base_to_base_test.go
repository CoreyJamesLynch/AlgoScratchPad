package main

import "testing"

func TestBaseToBase(t *testing.T) {
	baseToBaseTests := []struct {
		value   string
		base    int
		newBase int
		target  string
	}{
		{
			"E", 16, 2,
			"1110",
		}, {
			"11011110101011011011111011101111", 2, 3,
			"100122100210211112102",
		}, {
			"3735928559", 10, 4,
			"3132223123323233",
		}, {
			"8831A383B", 12, 16,
			"DEADBEEF",
		},
	}
	for _, tt := range baseToBaseTests {
		want := tt.target
		got := BaseToBase(tt.value, tt.base, tt.newBase)

		if want != got {
			t.Errorf("expected: %v\n received:%v\n", want, got)
		}
	}
}
