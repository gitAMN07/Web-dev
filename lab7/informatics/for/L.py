s = input()
res = 0

for digit in s:
    res = res * 2 + int(digit)

print(res)