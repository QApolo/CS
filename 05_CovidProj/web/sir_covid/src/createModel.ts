import model, { state } from "./model";
import data, { stateCode } from "./data";

const createModel = (recovery_rate: number, transmission_rate: number, n_u: number) => {
  const codes = Object.keys(data.data);
  const codeOf = (code: stateCode) => codes.indexOf(code);

  const edges = data.edges.map(x => ({ u: codeOf(x[0]), v: codeOf(x[1]), population_moving: x[2] }));
  const states = Object.entries(data.data).map(
    ([key, { susceptible, infected, recovered }]) => [codeOf(key as stateCode), { susceptible, infected, recovered }] as [number, state]
  );

  const population: { [key: number]: number } = {};
  codes.forEach(code => (population[codeOf(code as stateCode)] = data.data[code as stateCode].population));

  return new model(recovery_rate, transmission_rate, n_u, edges, states, population);
};

export default createModel;
