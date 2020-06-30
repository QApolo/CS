import React, { useEffect, useRef, useState, useCallback } from "react";
import { useToggle } from "../../Hooks/useToggle";

import mainStyle from "./main.module.css";
import headerStyle from "./header.module.css";
import { edit, pause, report } from "../../assets/icons";

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
        <label htmlFor="width">Width: </label>
        <input type="number" defaultValue={20} id="width" step="20" min="20" max="1000" ref={widthInput} onChange={forceReset} />

        <label htmlFor="height">Height: </label>
        <input type="number" defaultValue={30} id="height" step="20" min="20" max="1000" ref={heightInput} onChange={forceReset} />

        <label htmlFor="density">Density: </label>
        <input type="number" defaultValue={40} id="density" step="0.1" min="0" max="1" ref={densityInput} onChange={forceReset} />

        <label htmlFor="survival">R(S_min, S_max): </label>
        <input defaultValue={"2, 3"} id="survival" ref={survival} onChange={forceReset} />

        <label htmlFor="birth">R(B_min, B_max): </label>
        <input defaultValue={"3, 3"} id="birth" ref={birth} onChange={forceReset} />

        <button>{reset ? "Simulate new automata" : "Continue"}</button>
      </section>

      <section className={mainStyle.displayContainer} onClick={() => setPause(true)}>
        <canvas />
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
