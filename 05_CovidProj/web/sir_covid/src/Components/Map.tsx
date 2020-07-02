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

const Map: React.FC<{ model: model; each: number; time: number }> = ({ model, each, time }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const [data, updateData] = useState<any>(null);
  const [chartGoogle, updatechartGoogle] = useState<any>(null);

  useEffect(() => {
    GoogleCharts.load(() => {
      const visualization = GoogleCharts.api.visualization;

      const googleData = new google.visualization.DataTable();
      googleData.addColumn("string", "Estado");
      googleData.addColumn("number", "Casos");
      googleData.addRows(colData);

      if (!chartRef.current) return;
      const chart = new visualization.GeoChart(chartRef.current);

      visualization.events.addListener(chart, "select", () => {
        chart.getSelection();
        console.log(chart.getSelection());
      });

      chart.draw(googleData, options);
      updateData(googleData);
      updatechartGoogle(chart);
    });
  }, []);

  if (chartGoogle && data) {
    for (let i = 0; i < 32; i++) {
      data.setValue(i, 1, model.state_of[i].infected * model.population_of[i]);
    }
    chartGoogle.draw(data, options);
  }

  return <div ref={chartRef} />;
};

export default Map;
