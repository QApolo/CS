import React, { useEffect, useRef, useState } from "react";
import model from "../model";
import data from "../data";

// @ts-ignore
import { GoogleCharts } from "google-charts";

const colData = Object.values(data.data).map(({ longname }) => [longname, 0] as [string, number]);
const maxValue = 5000000;

const options = {
  region: "MX",
  resolution: "provinces",
  backgroundColor: "#81d4fa",
  datalessRegionColor: "#204051",
  colorAxis: { minValue: 0, maxValue, colors: ["white", "red"] },
};

type props = { model: model; stateID: number | null; setStateID: (x: number) => void };
const Map: React.FC<props> = ({ model, stateID, setStateID }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [data, updateData] = useState<any>(null);
  const [chartGoogle, updatechartGoogle] = useState<any>(null);

  useEffect(() => {
    GoogleCharts.load(
      () => {
        const visualization = GoogleCharts.api.visualization;
        console.log(visualization);

        const googleData = new google.visualization.DataTable();
        googleData.addColumn("string", "Estado");
        googleData.addColumn("number", "Casos");
        googleData.addRows(colData);

        if (!chartRef.current) return;
        const chart = new visualization.GeoChart(chartRef.current);

        visualization.events.addListener(chart, "select", () => {
          const point = chart.getSelection();
          if (point.length === 0) return;
          const code = point[0].row;
          setStateID(code);
        });

        chart.draw(googleData, options);
        updateData(googleData);
        updatechartGoogle(chart);
      },
      {
        packages: ["geochart"],
        mapsApiKey: "AIzaSyACkF-nTRMU5wD3P3-vRv-CkG7T6TbAq8Q",
      }
    );
  }, [setStateID]);

  if (chartGoogle && data) {
    for (let i = 0; i < 32; i++) {
      data.setValue(i, 1, model.state_of[i].infected * model.population_of[i]);
    }
    chartGoogle.draw(data, options);
  }

  return (
    <>
      {stateID && (
        <div>
          <h3>{colData[stateID][0]}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
            <span>susceptible:</span>
            <span>{model.state_of[stateID].susceptible * model.population_of[stateID]}</span>
            <span>({model.state_of[stateID].susceptible})</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
            <span>infected:</span>
            <span>{model.state_of[stateID].infected * model.population_of[stateID]}</span>
            <span>({model.state_of[stateID].infected})</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
            <span>recovered:</span>
            <span>{model.state_of[stateID].recovered * model.population_of[stateID]}</span>
            <span>({model.state_of[stateID].recovered})</span>
          </div>
        </div>
      )}
      <div ref={chartRef} />
    </>
  );
};

export default Map;
