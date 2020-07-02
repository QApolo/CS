import model, {state} from "./model"

const createModel = () => {
  let edges = [];
  for (let i = 0; i < 6; i++) {
    for (let j = i + 1; j < 6; j++) {
      //console.log(i + " " + j);
      edges.push({ u: i, v: j, population_moving: 1 });
    }
  }

  let states: Array<[number, state]> = [[0, { susceptible: 0.9, infected: 0.1, recovered: 0 }]];

  for (let i = 1; i < 6; i++) {
    states.push([i, { susceptible: 1, infected: 0, recovered: 0 }]);
  }

  let population: { [key: number]: number } = {};
  for (let i = 0; i < 6; i++) {
    population[i] = 100;
  }

  const m = new model(0.6, 0.3, 0.25, edges, states, population);
  return m;
};

export default createModel;
