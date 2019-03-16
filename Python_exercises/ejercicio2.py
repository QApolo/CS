'''
1 cada primera letra en cada palabra, sustituir por el simbolo de gato
2 si una palabra termina en una vocal, agregar a esta palabra '$VOC'
3 si termina en una consonante, agregar la palabra '$CONST'
imprimir
'''

f1 = open('input.txt', 'r')
f2 = open('output.txt', 'w')

cadena = f1.read()
lista_cadena = cadena.split(' ')

resultado = ""
for elem in lista_cadena:
	elem = elem.strip()
	#print(elem)
	if elem[-1].lower() in ['a', 'e', 'i', 'o', 'u']:
		res = elem.replace(elem[-1], '$VOC')
		res = '#' + res[1:]
		resultado = resultado + ' '+ res#print(elem.replace(elem[-1], '$VOC'))
	elif elem[-1].isalpha():
		res = elem.replace(elem[-1], '$CONS')
		res = '#' + res[1: ]
		resultado = resultado + ' '+ res#print(elem.replace(elem[-1], '$CONS'))
	else:
		resultado = resultado + ' ' + elem

f2.write(resultado)
f2.write("\n\n"+resultado[::-1])
f1.close()
f2.close()
