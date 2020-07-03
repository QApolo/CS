import React, { useEffect, useRef } from "react";
import model from "../model";

// @ts-ignore
import Plotly from "plotly.js-basic-dist";

const infected = { y: [], mode: "histogram", name: "infected", line: { color: "#10375c", width: 2 } };
const recovered = { y: [], mode: "histogram", name: "recovered", line: { color: "#ff9234", width: 2 } };
const susceptible = { y: [], mode: "histogram", name: "susceptible", line: { color: "#12947f", width: 2 } };
const layout = { plot_bgcolor: "#eedad1", paper_bgcolor: "#eeeeee" };

const commulated = { y: [], mode: "histogram", name: "infected", line: { color: "#10375c", width: 2 } };

type props = { each: number; measuring: boolean; model: model; className: string; running: boolean; time: number };
const Graph: React.FC<props> = ({ measuring, each, model, className, running, children }) => {
  const graphRef = useRef<HTMLDivElement>(null);
  const cumulativeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!measuring) return;
    infected.y = [];
    recovered.y = [];
    susceptible.y = [];
    commulated.y = [];
    Plotly.newPlot(graphRef.current, [infected, recovered, susceptible], layout);
    Plotly.newPlot(cumulativeRef.current, [commulated], layout);
  }, [model, measuring]);

  useEffect(() => {
    if (!measuring || !running) return;
    const id1 = setInterval(() => {
      const point = model.getNow();
      const y = [[point.infected], [point.recovered], [point.susceptible]];
      Plotly.extendTraces(graphRef.current, { y }, [0, 1, 2]);
    }, each);

    const id2 = setInterval(() => {
      const newCases = Math.abs(model.getNow().infected - model.infected_yesterday);
      const cummulatedUntilNow = commulated.y[commulated.y.length - 1] ?? 0;
      const point = newCases + cummulatedUntilNow;
      Plotly.extendTraces(cumulativeRef.current, { y: [[point]] }, [0]);
    }, each);

    return () => {
      clearInterval(id1);
      clearInterval(id2);
    };
  }, [measuring, model, each, running]);

  return (
    <>
      <hr style={{ width: "80%", borderWidth: "0.3rem" }} />
      <h2>Graphs</h2>
      {children}
      <div className={className} ref={graphRef} />
      <div className={className} ref={cumulativeRef} />
    </>
  );
};

export default Graph;
