# 10 - Another base to decimal [code]

- Source file: `base_to_dec.go`
- Function def: `BaseToDec(value string, base int) int`

- Each digit gets multiplied by the base raised to a power. Eg for 1110 in base 2:
  - 1 2 3
  - 10^2 10^1 10^0

- 1 1 1 0
- 2^3 2^2 2^1 2^0

- so this is: 1*2^3 + 1*2^2 + 1*2^1 + 0*2^0 = 8 + 4 + 2 + 0 = 14

- Work from right to left
  - charset = "0123456789ABCDEF"
  - value = "1110"
  - base = 2
  - multiplier = 1
  - res = 0

1. get "0"'s index in charset
2. res += 0 \* multiplier -> 0
3. multiplier \*= base -> 4
4. repeat until each digit in the value is accounted for
5. return res

- go
  - BaseToDec("1", 2) -> 1
  - BaseToDec("10", 2) -> 2
  - BaseToDec("21", 3) -> 7
  - BaseToDec("1110", 2) -> 14
  - BaseToDec("E", 16) -> 14
  - BaseToDec("11", 16) -> 17
