import React, { useEffect, useRef, useState, useCallback } from "react";
import { useToggle } from "../../Hooks/useToggle";

import mainStyle from "./main.module.css";
import headerStyle from "./header.module.css";
import { edit, pause, report } from "../../assets/icons";

// @ts-ignore
import { GoogleCharts } from "google-charts";

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

  class StatesDictionary {
    dict: any;
    constructor() {
      this.dict = {};
      for (var i = 1; i < states.length; i++) {
        this.dict[states[i][0]] = i - 1;
      }
    }
    indexState(name: any) {
      return this.dict[name];
    }
  }
  const statesDict = new StatesDictionary();
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

const MainScreen = () => {
  const widthInput = useRef<HTMLInputElement>(null);
  const heightInput = useRef<HTMLInputElement>(null);
  const densityInput = useRef<HTMLInputElement>(null);

  const survival = useRef<HTMLInputElement>(null);
  const birth = useRef<HTMLInputElement>(null);

  const [reset, needsReset] = useState(false);
  const forceReset = useCallback(() => needsReset(true), []);
  const [measuring, toggleMeasuring] = useToggle(false);
  useEffect(() => {
    if (measuring) window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  }, [measuring]);

  const [isPaused, setPause] = useState(false);
  const [isEditing, toggleEditing] = useToggle(false);

  return (
    <>
      <header className={headerStyle.header}>
        <h2>SIR: COVID-19</h2>
        <img alt="pause" src={pause} style={{ opacity: isPaused ? 0.7 : 1 }} />
        <img alt="edit" src={edit} onClick={toggleEditing} style={{ opacity: isEditing ? 1 : 0.7 }} />
        <img alt="report" src={report} onClick={toggleMeasuring} style={{ opacity: measuring ? 1 : 0.7 }} />
      </header>

      <section className={`${mainStyle.editing} ${isEditing ? mainStyle.visual : ""}`}>
        <label htmlFor="width">Recovery rate: </label>
        <input type="number" defaultValue={20} id="width" step="20" min="20" max="1000" ref={widthInput} onChange={forceReset} />

        <label htmlFor="height">Transmission rate: </label>
        <input type="number" defaultValue={30} id="height" step="20" min="20" max="1000" ref={heightInput} onChange={forceReset} />

        <label htmlFor="density">n_u: </label>
        <input type="number" defaultValue={40} id="density" step="0.1" min="0" max="1" ref={densityInput} onChange={forceReset} />

        <button>{reset ? "Simulate new automata" : "Continue"}</button>
      </section>

      <section className={mainStyle.displayContainer} onClick={() => setPause(true)}>
        <canvas />
        <div id="geochart-colors" style={{ width: 1000, height: 500 }}></div>
      </section>

      <section id="measuring" style={{ display: measuring ? "block" : "none" }}>
        <hr style={{ width: "80%", borderWidth: "0.1rem" }} />

        <h2>Analysis</h2>
        <div className={mainStyle.graph} id="graph" />
      </section>
    </>
  );
};

export default MainScreen;
