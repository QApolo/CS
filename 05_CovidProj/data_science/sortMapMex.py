
states = [
        ["BC","Baja California", 50000],
        ["SO","Sonora", 50000],
        ["CH","Chihuahua", 50000],
        ["CO","Coahuila", 50000],
        ["NL","Nuevo León", 50000],
        ["TM","Tamaulipas", 50000],
        ["SI","Sinaloa", 50000],
        ["NA","Nayarit", 50000],
        ["NA","Durango", 0],
        ["JC","Jalisco", 30000],
        ["CL","Colima", 30000],
        ["TL","Tlaxcala", 30000],
        ["AG","Aguascalientes", 30000],
        ["ZA","Zacatecas", 30000],
        ["SL","San Luis Potosí", 30000],
        ["PU","Puebla", 400],
        ["GT","Guanajuato", 400],
        ["QT","Querétaro", 400],
        ["HG","Hidalgo", 400],
        ["MO","Morelos", 400],
        ["EM","Estado de México", 400],
        ["CX","Distrito Federal", 400],
        ["MI","Michoacán", 0],
        ["BS","Baja California Sur", 200],
        ["GR","Guerrero", 500],
        ["OA","Oaxaca", 10000],
        ["VE","Veracruz", 10000],
        ["TB","Tabasco", 10000],
        ["CM","Campeche", 500],
        ["CS","Chiapas", 200],
        ["QR","Quintana Roo", 500],
        ["YU","Yucatán", 500]
]

states.sort()
for l in states:
    print(l, end=",\n")