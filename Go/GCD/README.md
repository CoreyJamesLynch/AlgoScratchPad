# 15 - Greatest common divisor [code]

Source file: `gcd.go`
Function def: `GCD(a, b int) int`

GCD stands for greatest common divisor

Given two numbers, GCD calculates the largest number you could divide both numbers by without getting a remainder.

Examples:

```go
A = 10, B = 5, GCD = 5 (10%5 == 0, 5%5 == 0)
A = 25, B = 5, GCD = 5
A = 30, B = 15, GCD = 15
A = 30, B = 9, GCD = 3
A = 100, B = 9, GCD = 1
```

```go
A = 10, B = 5
  10 = [2,5]
  5 = [5]
  GCD = [5] = 5

A = 30, B = 15
  30 = [2,3,5]
  15 = [3,5]
  GCD = [3,5] = 15

A = 30, B = 9:
  30 = [2,3,5]
  9 = [3,3]
  GCD = [3] = 3

A = 100, B = 9:
  100 = [2,2,5,5]
  9 = [3,3]
  GCD = [] = 1


A = 100, B = 8:
  100 = [2,2,5,5]
  9 = [2,2,2]
  GCD = [2,2] = 4
```
