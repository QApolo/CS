import React, { useEffect } from "react";
import model from "../model";

// @ts-ignore
import { GoogleCharts } from "google-charts";

const Map: React.FC<{ model: model, time: number }> = ({ model, time }) => {
  useEffect(() => {
    GoogleCharts.load(() => {
      const states = [
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

      let data = GoogleCharts.api.visualization.arrayToDataTable(states);
      let options = {
        region: "MX", // Mexico
        resolution: "provinces",
        colorAxis: {
          minValue: 0,
          maxValue: 170000,
          colors: ["white", "red"],
        },
        backgroundColor: "#81d4fa",
        datalessRegionColor: "#eeeeee",
        defaultColor: "#f5f5f5",
      };

      let chart = new GoogleCharts.api.visualization.GeoChart(document.getElementById("geochart-colors"));
      chart.draw(data, options);
    });
  }, []);

  return <div id="geochart-colors" />;
};

export default Map;
