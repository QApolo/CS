import jsonData from "./data.json";

type point = { population: number; susceptible: number; infected: number; recovered: number; longname: string };
type dataFromJson = { edges: Array<[stateCode, stateCode, number]>; data: { [key in stateCode]: point } };

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

// @ts-ignore
const data: dataFromJson = jsonData;

export default data;
