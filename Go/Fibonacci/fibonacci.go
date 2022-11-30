package main

// iterative func to finds nth number in the Fibonacci sequence
func Fibonacci(n int) int {
	if n <= 1 {
		return n
	}
	var seq = []int{0, 1}
	var n1, n2 int = 0, 1
	for n2 < n {
		seq = append(seq, seq[n1]+seq[n2])
		n1, n2 = n1+1, n2+1
	}
	return seq[n1-1] + seq[n2-1]
}
