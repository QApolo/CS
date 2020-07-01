import React, { useRef, useState, useEffect } from "react";
import { useToggle } from "../../Hooks/useToggle";
import Map from "../Map";
import createModel from "../../createModel";

import mainStyle from "./main.module.css";
import headerStyle from "./header.module.css";
import { edit, pause, report } from "../../assets/icons";

const MainScreen = () => {
  const widthInput = useRef<HTMLInputElement>(null);
  const heightInput = useRef<HTMLInputElement>(null);
  const densityInput = useRef<HTMLInputElement>(null);

  const [isEditing, toggleEdit] = useToggle(false);
  const [isPaused, togglePause] = useToggle(false);
  const [measuring, toggleMeasure] = useToggle(false);

  const [model] = useState(() => createModel());
  const [time, setTime] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      model.step();
      setTime(t => t + 1);
      console.log("counting");
    }, 1000);
    return clearInterval(id);
  }, [isPaused, model]);

  return (
    <>
      <header className={headerStyle.header}>
        <h2>SIR: COVID-19</h2>
        <img alt="pause" src={pause} onClick={togglePause} style={{ opacity: isPaused ? 0.7 : 1 }} />
        <img alt="edit" src={edit} onClick={toggleEdit} style={{ opacity: isEditing ? 1 : 0.7 }} />
        <img alt="report" src={report} onClick={toggleMeasure} style={{ opacity: measuring ? 1 : 0.7 }} />
      </header>

      <section className={`${mainStyle.editing} ${isEditing ? mainStyle.visual : ""}`}>
        <label htmlFor="width">Recovery rate: </label>
        <input type="number" defaultValue={20} id="width" step="20" min="20" max="1000" ref={widthInput} />

        <label htmlFor="height">Transmission rate: </label>
        <input type="number" defaultValue={30} id="height" step="20" min="20" max="1000" ref={heightInput} />

        <label htmlFor="density">n_u: </label>
        <input type="number" defaultValue={40} id="density" step="0.1" min="0" max="1" ref={densityInput} />
        <button>Go!</button>
      </section>

      <section className={mainStyle.displayContainer}>
        <Map model={model} time={time} />
      </section>

      <section id="measuring" style={{ display: measuring ? "block" : "none" }}>
        <hr style={{ width: "80%", borderWidth: "0.1rem" }} />
        <h2>Graphs</h2>
        <div className={mainStyle.graph} id="graph" />
      </section>
    </>
  );
};

export default MainScreen;
