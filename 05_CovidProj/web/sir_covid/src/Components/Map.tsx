import React, { useEffect, useRef } from "react";
import model from "../model";
import data from "../data";

// @ts-ignore
import { GoogleCharts } from "google-charts";

const colData = Object.values(data.data).map(({ longname, population }) => [longname, population] as [string, number]);
const maxValue = Math.max(...colData.map(x => x[1]));

const Map: React.FC<{ model: model; time: number }> = ({ model, time }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const dataRef = useRef<any>(null);
  useEffect(() => {
    GoogleCharts.load(() => {
      const visualization = GoogleCharts.api.visualization;

      const data = new google.visualization.DataTable();
      dataRef.current = data;
      data.addColumn("string", "Estado");
      data.addColumn("number", "Casos");
      data.addRows(colData);

      const options = {
        region: "MX",
        resolution: "provinces",
        backgroundColor: "#81d4fa",
        datalessRegionColor: "#204051",
        colorAxis: { minValue: 0, maxValue, colors: ["white", "red"] },
      };

      if (!chartRef.current) return;
      const chart = new visualization.GeoChart(chartRef.current);

      visualization.events.addListener(chart, "select", () => {
        chart.getSelection();
        console.log(chart.getSelection());
      });

      chart.draw(data, options);
    });
  }, []);

  return <div ref={chartRef} />;
};

export default Map;
