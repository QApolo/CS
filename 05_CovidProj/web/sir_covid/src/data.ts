type stateCode =
  | "AS"
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
    ["NA", "ZA", 0.05285770276933744],
    ["HG", "TL", 0.025853251146488926],
    ["CO", "DG", 0.07096324045724095],
    ["PU", "TL", 0.06080232901046788],
    ["BC", "BS", 0.09552245417276921],
    ["BC", "SO", 0.08704569147683794],
    ["CH", "SO", 0.048151484653323674],
    ["SI", "SO", 0.04504340974691997],
    ["CH", "DG", 0.05839090462382868],
    ["CH", "CO", 0.03316486432017293],
    ["DG", "SI", 0.08186713891676863],
    ["NA", "SI", 0.04085267848482365],
    ["DG", "ZA", 0.017628047534076218],
    ["DG", "ZA", 0.07666260395805462],
    ["NL", "TM", 0.07793983713221199],
    ["NL", "SL", 0.03517246318515303],
    ["CL", "MI", 0.0665637745215259],
    ["GR", "MI", 0.03993963238095886],
    ["SL", "ZA", 0.04384182318527757],
    ["SL", "TM", 0.08681264620456311],
    ["SL", "VE", 0.05962174144687643],
    ["TM", "VE", 0.018688800713324877],
    ["PU", "VE", 0.0467456232693018],
    ["GR", "OA", 0.06878623456901181],
    ["QR", "YU", 0.0927862293458067],
    ["CM", "YU", 0.022801157274544966],
    ["CM", "QR", 0.0784304471353907],
    ["GR", "MO", 0.024144495154512717],
    ["CS", "OA", 0.03553673698413241],
    ["CS", "TB", 0.03241265464891812],
    ["CS", "VE", 0.07576749769043202],
    ["TB", "VE", 0.08443578441762153],
    ["OA", "VE", 0.05299805234659378],
    ["OA", "PU", 0.023365048128961046],
    ["HG", "VE", 0.041851136143307655],
    ["GT", "MI", 0.041757988075756675],
    ["GT", "QT", 0.02592251437856489],
    ["GT", "SL", 0.05356905622073814],
    ["MI", "QT", 0.03507664827818861],
    ["CO", "NL", 0.07212416429878657],
    ["GR", "PU", 0.09700713310198236],
    ["CX", "MO", 0.05431927706989223],
    ["CM", "TB", 0.047076566235984156],
    ["HG", "QT", 0.018250891941303467],
  ],
  data: {
    AS: {
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
