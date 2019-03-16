'''
leer archivo de texto, escribir la oracion 
o todo el texto en otro archivo

input:

output:

'''



f1 = open('input.txt', 'r')
f2 = open('output.txt', 'w')

f2.write(f1.read())

f1.close()
f2.close()