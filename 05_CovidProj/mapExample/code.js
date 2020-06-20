states = [
  ['State', 'Casos'],
  ['Baja California', 50000],
  ['Sonora', 50000],
  ['Chihuahua', 50000],
  ['Coahuila', 50000],
  ['Nuevo León', 50000],
  ['Tamaulipas', 50000],
  ['Sinaloa', 50000],
  ['Nayarit', 50000],
  ['Durango', 0],
  ['Zacatecas', 400],
  ['Jalisco', 30000],
  ['Colima', 30000],
  ['Tlaxcala', 30000],
  ['Aguascalientes', 30000],
  ['Zacatecas', 30000],
  ['San Luis Potosí', 30000],
  ['Puebla', 400],
  ['Guanajuato', 400],
  ['Querétaro', 400],
  ['Hidalgo', 400],
  ['Morelos', 400],
  ['Estado de México', 400],
  ['Distrito Federal', 400],
  ['Michoacán', 0],
  ['Baja California Sur', 200],
  ['Guerrero', 500],
  ['Oaxaca', 10000],
  ['Veracruz', 10000],
  ['Tabasco', 10000],
  ['Campeche', 500],
  ['Chiapas', 200],
  ['Quintana Roo', 500],
  ['Yucatán', 500]
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
setInterval(periodic, 500);