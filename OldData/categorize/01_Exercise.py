
'''
Input: string composed of digits

Output: string with literal string of each digit in spanish

---------------------
Sample:

input:
387474

output:
tres ocho siete cuatro siete cuatro
'''

s = input('Enter string with digits\n')

mapping = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"]

for a in s:
	print(mapping[int(a)], end = ' ')
print('\n')
