package main

// Euclidean Algorithm
// Given two numbers, A and B:

// Step 1: If B == 0, return A\
// Step 2: A becomes B, and B becomes the remainder of dividing A by B
// `a, b = b, a % b`\
// Step 3: Go to step 1

func GCD(a int, b int) int {
	for {
		if b == 0 {
			return a
		}

		a, b = b, a%b
	}
}
