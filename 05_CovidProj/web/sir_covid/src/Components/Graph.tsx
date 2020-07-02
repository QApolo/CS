import React, { useEffect, useRef } from "react";
import model from "../model";

// @ts-ignore
import Plotly from "plotly.js-basic-dist";

const infected = { y: [], mode: "histogram", name: "infected", line: { color: "#10375c", width: 2 } };
const recovered = { y: [], mode: "histogram", name: "recovered", line: { color: "#ff9234", width: 2 } };
const susceptible = { y: [], mode: "histogram", name: "susceptible", line: { color: "#12947f", width: 2 } };
const layout = { plot_bgcolor: "#eedad1", paper_bgcolor: "#eeeeee" };

type props = { each: number; measuring: boolean; model: model; className: string; running: boolean };
const Graph: React.FC<props> = ({ measuring, each, model, className, running }) => {
  const graphRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!measuring) return;
    Plotly.newPlot(graphRef.current, [infected, recovered, susceptible], layout);
  }, [model, measuring]);

  useEffect(() => {
    if (!measuring || !running) return;
    const id = setInterval(() => {
      const point = model.getNow();
      const y = [[point.infected], [point.recovered], [point.susceptible]];
      Plotly.extendTraces(graphRef.current, { y }, [0, 1, 2]);
    }, each);

    return () => clearInterval(id);
  }, [measuring, model, each, running]);

  return (
    <>
      <hr style={{ width: "80%", borderWidth: "1rem" }} />
      <h2>Graphs</h2>
      <div className={className} ref={graphRef} />
    </>
  );
};

export default Graph;
