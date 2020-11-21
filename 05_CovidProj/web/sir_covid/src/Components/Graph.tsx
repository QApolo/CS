import React, { useEffect, useRef, useContext } from "react";
import model from "../model";
import { DataContext } from "../Components/App/";

// @ts-ignore
import Plotly from "plotly.js-basic-dist";

const infected = { y: [] as Array<number>, mode: "histogram", name: "infected", line: { color: "#10375c", width: 2 } };
const recovered = { y: [] as Array<number>, mode: "histogram", name: "recovered", line: { color: "#ff9234", width: 2 } };
const susceptible = { y: [] as Array<number>, mode: "histogram", name: "susceptible", line: { color: "#12947f", width: 2 } };
const layout = (title: string) => ({
  plot_bgcolor: "#eedad1",
  paper_bgcolor: "#eeeeee",
  title: { text: title, font: { family: "monospace", size: 24 }, xref: "paper", x: 0.05 },
  xaxis: { title: { text: "time", font: { family: "monospace", size: 14, color: "#7f7f7f" } } },
});

const commulated = { y: [], mode: "histogram", name: "infected", line: { color: "#10375c", width: 2 } };

type props = { measuring: boolean; model: model; className: string; running: boolean; time: number; stateID: number | null };
const Graph: React.FC<props> = ({ measuring, model, className, running, children, stateID, time }) => {
  const data = useContext(DataContext);
  const colData = Object.values(data!.data).map(({ longname }) => [longname, 0] as [string, number]);

  const graphRef = useRef<HTMLDivElement>(null);
  const cumulativeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (infected.y.length !== 0) Plotly.deleteTraces(graphRef.current, [0, 1, 2]);

    const codeID = stateID ?? 32;
    console.log(model.stats_for[codeID]);
    infected.y = model.stats_for[codeID].infected;
    recovered.y = model.stats_for[codeID].recovered;
    susceptible.y = model.stats_for[codeID].susceptible;
    commulated.y = [];
    Plotly.newPlot(graphRef.current, [infected, recovered, susceptible], layout(codeID === 32 ? "Mexico" : colData[codeID][0]));
    cumulativeRef.current && Plotly.newPlot(cumulativeRef.current, [commulated], layout("Acumulados"));
  }, [model, stateID]);

  useEffect(() => {
    if (time === 0) return;
    {
      const point = model.getNow(stateID);
      const y = [[point.infected], [point.recovered], [point.susceptible]];
      Plotly.extendTraces(graphRef.current, { y }, [0, 1, 2]);
    }

    {
      const newCases = Math.abs(model.getNow(stateID).infected - model.infected_yesterday);
      const cummulatedUntilNow = commulated.y[commulated.y.length - 1] ?? 0;
      const point = newCases + cummulatedUntilNow;
      cumulativeRef.current && Plotly.extendTraces(cumulativeRef.current, { y: [[point]] }, [0]);
    }
  }, [model, time, stateID]);

  return (
    <>
      <hr style={{ width: "80%", borderWidth: "0.3rem" }} />
      <h2>Graphs</h2>
      {children}
      <div className={className} ref={graphRef} />
      {stateID === null && <div className={className} ref={cumulativeRef} />}
    </>
  );
};

export default Graph;
