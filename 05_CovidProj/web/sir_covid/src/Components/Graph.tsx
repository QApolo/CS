import React, { useEffect } from "react";
import model from "../model";

const Graph: React.FC<{ each: number; measuring: boolean; model: model; className: string }> = ({ measuring, each, model, className }) => {
  useEffect(() => {
    if (!measuring) return;

    let id: NodeJS.Timeout;
    // @ts-ignore
    import("plotly.js-basic-dist").then(Plotly => {
      const infected = { y: [], mode: "histogram", name: "infected", line: { color: "#10375c", width: 2 } };
      const recovered = { y: [], mode: "histogram", name: "recovered", line: { color: "#ff9234", width: 2 } };
      const susceptible = { y: [], mode: "histogram", name: "susceptible", line: { color: "#12947f", width: 2 } };

      const layout = { plot_bgcolor: "#eedad1", paper_bgcolor: "#eeeeee" };
      Plotly.newPlot("graph", [infected, recovered, susceptible], layout);

      id = setInterval(() => {
        const point = model.getNow();
        const y = [[point.infected], [point.recovered], [point.susceptible]];
        Plotly.extendTraces("graph", { y }, [0, 1, 2]);
      }, each);
    });

    return () => clearInterval(id);
  }, [measuring, model, each]);

  return (
    <>
      <hr style={{ width: "80%", borderWidth: "0.1rem" }} />
      <h2>Graphs</h2>
      <div className={className} id="graph" />
    </>
  );
};

export default Graph;
