import functools as ft


map(lambda x: x ** 2, [1, 2, 3])
ft.reduce(lambda x, y: x + y, [1, 2, 3])

map(lambda x, y: x + y, [1, 3, 5], [2, 4, 6])

l = map(lambda x, y: x + y, filter(lambda x: x % 2 != 0, [1, 3, 5]), filter(lambda x: x % 2 == 0,[2, 4, 6]))
print(list(l))