f = open('archivo.txt', 'r')

lineas = f.readlines()

dic = {}
dic2 = {}
for l in lineas:
	m = l.split(' ')
	print(m)
	dic.update({m[0]: m[1][0:len(l)]})
	dic2.update({m[1][0:len(l)]: m[0]})

while True:
	e = input('Write an expression')

	print(str(dic.get(e)))
