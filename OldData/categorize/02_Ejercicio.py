f = open('archivo.txt', 'r')

lines = f.readlines()

dic = {}
dic2 = {}
for l in lines:
	m = l.split(' ')
	
	
	dic.update( { m[0]: m[1].replace('\n', '') } )
	dic2.update({ m[1].replace('\n', ''): m[0]})
	print(m)

for e in dic2:
	print(e, end =' ')
while True:
	e = str(input('escribe una expresion\n'))
	list_words = e.split(' ')
	for elem in list_words:
		if elem.isnumeric():
			print(str(dic.get(elem)), end = ' ')
		else:
			if dic2.get(elem):
				print(str(dic2.get(elem)), end = ' ')
			else:
				print(elem, end = ' ')

	print(end = '\n')


