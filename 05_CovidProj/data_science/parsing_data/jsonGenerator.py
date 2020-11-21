import json
import random
if __name__ == '__main__':

    states = [
        ['AG', 'Aguascalientes', 0],
        ['BC', 'Baja California', 0],
        ['BS', 'Baja California Sur', 0],
        ['CH', 'Chihuahua', 0],
        ['CL', 'Colima', 0],
        ['CM', 'Campeche', 0],
        ['CO', 'Coahuila', 0],
        ['CS', 'Chiapas', 0],
        ['CX', 'Distrito Federal', 0],
        ['EM', 'Estado de México', 0],
        ['GR', 'Guerrero', 0],
        ['GT', 'Guanajuato', 0],
        ['HG', 'Hidalgo', 0],
        ['JC', 'Jalisco', 0],
        ['MI', 'Michoacán', 0],
        ['MO', 'Morelos', 0],
        ['DG', 'Durango', 0],
        ['NA', 'Nayarit', 0],
        ['NL', 'Nuevo León', 0],
        ['OA', 'Oaxaca', 0],
        ['PU', 'Puebla', 0],
        ['QR', 'Quintana Roo', 0],
        ['QT', 'Querétaro', 0],
        ['SI', 'Sinaloa', 0],
        ['SL', 'San Luis Potosí', 0],
        ['SO', 'Sonora', 0],
        ['TB', 'Tabasco', 0],
        ['TL', 'Tlaxcala', 0],
        ['TM', 'Tamaulipas', 0],
        ['VE', 'Veracruz', 0],
        ['YU', 'Yucatán', 0],
        ['ZA', 'Zacatecas', 0]
]

    data = {}
    states.sort()
    states2 = [s[1:] for s in states]
    print(states2)
    with open("edges.csv", "r") as edges:
        data['edges'] = []
        for line in edges:
            l = line.rstrip("\n").split(" ")
            data['edges'].append([ l[0], l[1], random.uniform(0.01, 0.08)] )

    with open("Population_processed.csv", "r") as pop:
        data['data'] = {}
        c = 0
        pop2 = []
        for line in pop:
            cur = line.split(",")
            pop2.append([cur[0], cur[1].rstrip("\n")])
        pop2.sort()
        for line in pop2:
            data['data'][line[0]] = {"population": int(line[1]),"susceptible": 1.0, "infected": 0.0, "recovered": 0, "longname": states[c][1]}
            c+= 1
        data['data']['CX']["susceptible"]= 0.9
        data['data']['CX']["infected"] = 0.1
        data['data']['CX']["recovered"] = 0


    with open('data.json', 'w') as outfile:
        json.dump(data, outfile, indent=2, ensure_ascii=False)



""" 
    data['people'] = []
    data['people'].append({
        'name': 'Scott',
        'website': 'stackabuse.com',
        'from': 'Nebraska'
    })
    data['people'].append({
        'name': 'Larry',
        'website': 'google.com',
        'from': 'Michigan'
    })
    data['people'].append({
        'name': 'Tim',
        'website': 'apple.com',
        'from': 'Alabama'
    })
    """