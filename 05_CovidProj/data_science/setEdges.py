ans = input("enter adj:\n")

s = set()
while(ans != "false"):
    
    ans = ans.split(" ")
    ans.sort()
    ans = " ".join(ans)
    s.add(ans)
    print(len(s))
    ans = input("enter adj:\n")
print(s)

