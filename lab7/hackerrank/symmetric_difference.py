m = int(input())
A = set(map(int, input().split()))

n = int(input())
B = set(map(int, input().split()))

result = sorted(A.symmetric_difference(B))

for x in result:
    print(x)