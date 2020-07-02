states = [
  ['Estado', 'Casos'],
  ['Aguascalientes', 0],
  ['Baja California', 0],
  ['Baja California Sur', 0],
  ['Chihuahua', 0],
  ['Colima', 0],
  ['Campeche', 0],
  ['Coahuila', 0],
  ['Chiapas', 0],
  ['Distrito Federal', 0],
  ['Durango', 0],
  ['Estado de México', 0],
  ['Guerrero', 0],
  ['Guanajuato', 0],
  ['Hidalgo', 0],
  ['Jalisco', 0],
  ['Michoacán', 0],
  ['Morelos', 0],
  ['Nayarit', 0],
  ['Nuevo León', 0],
  ['Oaxaca', 0],
  ['Puebla', 0],
  ['Quintana Roo', 0],
  ['Querétaro', 0],
  ['Sinaloa', 0],
  ['San Luis Potosí', 0],
  ['Sonora', 0],
  ['Tabasco', 0],
  ['Tlaxcala', 0],
  ['Tamaulipas', 0],
  ['Veracruz', 0],
  ['Yucatán', 0],
  ['Zacatecas', 0]
];

class StatesDictionary {
  constructor() {
    this.dict = {};
    for(var i = 1; i < states.length; i++) {
      this.dict[states[i][0]] = i-1;
    }
  }
  indexState(name) {
    return this.dict[name];
  }
};
statesDict = new StatesDictionary();


google.charts.load('upcoming', {
  'packages': ['geochart']
});


//console.log(statesDict.indexState('Michoacán'));

google.charts.setOnLoadCallback(function(){drawRegionsMap(states); });
function drawRegionsMap(states) {
  data = google.visualization.arrayToDataTable(states);

  options = {
    region: 'MX', // Mexico
    resolution: 'provinces',
    colorAxis: {
           	minValue:0,
           maxValue:170000,
      //values: [0, 200, 300, 400, 500],
      colors: ['white', 'red']
    },
    backgroundColor: '#81d4fa',
    datalessRegionColor: '#eeeeee',
    defaultColor: '#f5f5f5',
  };

  chart = new google.visualization.GeoChart(document.getElementById('geochart-colors'));
  chart.draw(data, options);
};
function updateState(name, value) {
  
}

function periodic() {
  //indexMich = statesDict.indexState('Michoacán');//indexMich = 23;
  for(var index = 1; index < 31; index++) {
    data.setValue(index, 1, (data.getValue(index,1)+1000)% 170000);
  }
    //console.log(key, value);
  chart.draw(data, options);
  //console.log(indexMich);
  //data.setValue(indexMich, 1, (data.getValue(indexMich,1)+50)% 600);
  //chart.draw(data, options);
  
}
setInterval(periodic, 1000);