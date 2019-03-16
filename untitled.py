
'''
entrada: cadena con digitos 89

salida: ocho nueve '''

s = input('Ingresa digitos\n')

mapeo = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"]
for a in s:
	print(mapeo[int(a)],end = ' ')
print('\n')