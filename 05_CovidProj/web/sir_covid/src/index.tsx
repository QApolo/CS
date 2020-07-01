import React from "react";
import ReactDOM from "react-dom";
import model, {state} from "./model"
import "./index.css";
import App from "./Components/App";

const DOM_NODE = document.getElementById("react_app");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  DOM_NODE
);


// ================== testing ===================
let edges = [];
for(let i = 0; i < 6; i++) {
  for(let j = i + 1; j < 6; j++) {
    console.log(i+ " "+ j);
    edges.push({u:i, v:j, population_moving:1});
  }
}

let states: Array<[number, state]> = [[0,{susceptible:0.8, infected:0.2, recovered:0}]];

for(let i = 1; i < 6; i++) {
  states.push([i, {susceptible:1, infected: 0, recovered: 0}]);
}

let population: { [key: number]: number } = {}; 
for(let i = 0; i < 6; i++) {
  population[i] = 100;
}

const m = new model(0.6, 0.5, 0.25, edges, states, population);

let infected = [];
let susceptible = [];
let recovered = [];
for(let t = 0; t < 15; t++) {
  console.log(m.state_of[0]);
  infected.push(m.state_of[0].infected);
  susceptible.push(m.state_of[0].susceptible);
  recovered.push(m.state_of[0].recovered);
  m.step(); 
}

console.log(susceptible);
console.log(infected);
console.log(recovered);
