export type stateCode =
  | "AG"
  | "BC"
  | "BS"
  | "CH"
  | "CL"
  | "CM"
  | "CO"
  | "CS"
  | "CX"
  | "DG"
  | "EM"
  | "GR"
  | "GT"
  | "HG"
  | "JC"
  | "MI"
  | "MO"
  | "NA"
  | "NL"
  | "OA"
  | "PU"
  | "QR"
  | "QT"
  | "SI"
  | "SL"
  | "SO"
  | "TB"
  | "TL"
  | "TM"
  | "VE"
  | "YU"
  | "ZA";

const data: {
  edges: Array<[stateCode, stateCode, number]>;
  data: { [key in stateCode]: { population: number; susceptible: number; infected: number; recovered: number; longname: string } };
} = {
  edges: [
    ["NA", "ZA", 0.09490481417425528],
    ["HG", "TL", 0.04674566055659829],
    ["AG", "JC", 0.08662880600844343],
    ["CO", "DG", 0.06819303189453463],
    ["PU", "TL", 0.0968087100545519],
    ["AG", "SL", 0.04869637970394238],
    ["BC", "BS", 0.08665949764425991],
    ["BC", "SO", 0.01523382659751148],
    ["CH", "SO", 0.04049506850130929],
    ["SI", "SO", 0.06146196789691331],
    ["CH", "DG", 0.09086951945143212],
    ["CH", "CO", 0.03062487893469549],
    ["DG", "SI", 0.07973930898497127],
    ["NA", "SI", 0.06282803447345886],
    ["DG", "ZA", 0.06810876329883585],
    ["DG", "ZA", 0.028720584530011264],
    ["NL", "TM", 0.024353075374403975],
    ["NL", "SL", 0.03425363946556065],
    ["JC", "ZA", 0.01077947352307479],
    ["JC", "NA", 0.050856104730328686],
    ["JC", "MI", 0.01225468968174828],
    ["CL", "JC", 0.016538953795788118],
    ["CL", "MI", 0.057738266005277664],
    ["GR", "MI", 0.06810061389239064],
    ["SL", "ZA", 0.06317509024525426],
    ["SL", "TM", 0.06308733106676018],
    ["SL", "VE", 0.015949178326035724],
    ["TM", "VE", 0.09761944060132836],
    ["PU", "VE", 0.09376814473381256],
    ["GR", "OA", 0.04089490261522268],
    ["QR", "YU", 0.06132798850558192],
    ["CM", "YU", 0.01860273486047559],
    ["CM", "QR", 0.01794321693401436],
    ["GR", "MO", 0.01865741631135589],
    ["CS", "OA", 0.0299760987553633],
    ["CS", "TB", 0.08675411864567162],
    ["CS", "VE", 0.0593252131795332],
    ["TB", "VE", 0.09469846825435306],
    ["OA", "VE", 0.08928759466788876],
    ["OA", "PU", 0.010328759105101839],
    ["HG", "VE", 0.021006478221023944],
    ["GT", "MI", 0.0880954183364147],
    ["EM", "MI", 0.021090189177347632],
    ["GT", "QT", 0.06196825543575303],
    ["GT", "SL", 0.01820398257141023],
    ["GT", "JC", 0.02655120859230465],
    ["MI", "QT", 0.08870273407592665],
    ["CO", "NL", 0.04750010628330214],
    ["AG", "ZA", 0.04110369922208482],
    ["HG", "EM", 0.04343258652531771],
    ["GR", "PU", 0.06237785171847788],
    ["CX", "EM", 0.010020652689296422],
    ["CX", "MO", 0.08333423466647716],
    ["CM", "TB", 0.07393286639401381],
    ["HG", "QT", 0.057005266493559116],
  ],
  data: {
    AG: {
      population: 944285,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Aguascalientes",
    },
    BC: {
      population: 2487367,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Baja California",
    },
    BS: {
      population: 424041,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Baja California Sur",
    },
    CH: {
      population: 3052907,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Chihuahua",
    },
    CL: {
      population: 542627,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Colima",
    },
    CM: {
      population: 690689,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Campeche",
    },
    CO: {
      population: 2298070,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Coahuila",
    },
    CS: {
      population: 3920892,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Chiapas",
    },
    CX: {
      population: 8605239,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Distrito Federal",
    },
    DG: {
      population: 1448661,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Durango",
    },
    EM: {
      population: 13096686,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Estado de México",
    },
    GR: {
      population: 3079649,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Guerrero",
    },
    GT: {
      population: 4663032,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Guanajuato",
    },
    HG: {
      population: 2235591,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Hidalgo",
    },
    JC: {
      population: 6322002,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Jalisco",
    },
    MI: {
      population: 3985667,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Michoacán",
    },
    MO: {
      population: 1555296,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Morelos",
    },
    NA: {
      population: 920185,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Nayarit",
    },
    NL: {
      population: 3834141,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Nuevo León",
    },
    OA: {
      population: 3438765,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Oaxaca",
    },
    PU: {
      population: 5076686,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Puebla",
    },
    QR: {
      population: 874963,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Quintana Roo",
    },
    QT: {
      population: 1404306,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Querétaro",
    },
    SI: {
      population: 2536844,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Sinaloa",
    },
    SL: {
      population: 2299360,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "San Luis Potosí",
    },
    SO: {
      population: 2216969,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Sonora",
    },
    TB: {
      population: 1891829,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Tabasco",
    },
    TL: {
      population: 962646,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Tlaxcala",
    },
    TM: {
      population: 2753222,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Tamaulipas",
    },
    VE: {
      population: 6908975,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Veracruz",
    },
    YU: {
      population: 1658210,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Yucatán",
    },
    ZA: {
      population: 1353610,
      susceptible: 0.9,
      infected: 0.1,
      recovered: 0,
      longname: "Zacatecas",
    },
  },
};

export default data;
