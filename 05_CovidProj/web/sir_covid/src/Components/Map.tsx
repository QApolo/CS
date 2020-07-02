import React, { useEffect, useRef } from "react";
import model from "../model";

// @ts-ignore
import { GoogleCharts } from "google-charts";

const initialData = [
  ["State", "Casos"],
  ["Baja California", 50000],
  ["Sonora", 50000],
  ["Chihuahua", 50000],
  ["Coahuila", 50000],
  ["Nuevo León", 50000],
  ["Tamaulipas", 50000],
  ["Sinaloa", 50000],
  ["Nayarit", 50000],
  ["Durango", 0],
  ["Zacatecas", 400],
  ["Jalisco", 30000],
  ["Colima", 30000],
  ["Tlaxcala", 30000],
  ["Aguascalientes", 30000],
  ["Zacatecas", 30000],
  ["San Luis Potosí", 30000],
  ["Puebla", 400],
  ["Guanajuato", 400],
  ["Querétaro", 400],
  ["Hidalgo", 400],
  ["Morelos", 400],
  ["Estado de México", 400],
  ["Distrito Federal", 400],
  ["Michoacán", 0],
  ["Baja California Sur", 200],
  ["Guerrero", 500],
  ["Oaxaca", 10000],
  ["Veracruz", 10000],
  ["Tabasco", 10000],
  ["Campeche", 500],
  ["Chiapas", 200],
  ["Quintana Roo", 500],
  ["Yucatán", 500],
];

const Map: React.FC<{ model: model; time: number }> = ({ model, time }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const dataRef = useRef<any>(null);
  useEffect(() => {
    GoogleCharts.load(() => {
      const visualization = GoogleCharts.api.visualization;
      dataRef.current = visualization.arrayToDataTable(initialData);
      const options = {
        region: "MX",
        resolution: "provinces",
        backgroundColor: "#81d4fa",
        datalessRegionColor: "#204051",
        colorAxis: {
          minValue: 0,
          maxValue: 170000,
          colors: ["white", "red"],
        },
      };

      if (!chartRef.current) return;
      const chart = new visualization.GeoChart(chartRef.current);

      visualization.events.addListener(chart, "select", () => {
        chart.getSelection();
        console.log(chart.getSelection());
      });

      chart.draw(dataRef.current, options);
    });
  }, [chartRef.current]);

  return <div ref={chartRef} />;
};

export default Map;
