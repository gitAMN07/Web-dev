n = int(input())
arr = list(map(int, input().split()))

max_val = max(arr)

filtered = []
for x in arr:
    if x != max_val:
        filtered.append(x)

print(max(filtered))