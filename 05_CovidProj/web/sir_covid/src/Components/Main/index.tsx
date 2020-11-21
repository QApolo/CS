import React, { useRef, useState, useEffect, useContext } from "react";
import { useToggle } from "../../Hooks/useToggle";
import { DataContext } from "../App"

import createModel from "../../createModel";

import Map from "../Map";
import Graph from "../Graph";

import mainStyle from "./main.module.css";
import headerStyle from "./header.module.css";
import { edit, pause, report, power, move } from "../../assets/icons";


const MainScreen = () => {
  const data = useContext(DataContext);
  const recovery = useRef<HTMLInputElement>(null);
  const transmission = useRef<HTMLInputElement>(null);
  const nu = useRef<HTMLInputElement>(null);

  const [isEditing, toggleEdit] = useToggle(false);
  const [isPaused, setPause] = useState(true);
  const togglePause = () => setPause(value => !value);
  const [measuring, toggleMeasure] = useToggle(false);

  const [model, setModel] = useState(() => createModel(data!, 0.1, 0.3, 0.4));
  const [time, setTime] = useState(0);
  const [stateID, setStateID] = useState<number | null>(null);
  const each = 500;


  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      model.step();
      setTime(t => t + 1);
    }, each);
    return () => clearInterval(id);
  }, [isPaused, model]);


  const resetModel = () => {
    const a = parseFloat(recovery.current!.value);
    const b = parseFloat(transmission.current!.value);
    const c = parseFloat(nu.current!.value);

    setModel(createModel(data!, a, b, c));
    setTime(0);
    setPause(true);
  };

  const moveAndStop = () => {
    setPause(true);
    model.step();
    setTime(t => t + 1);
  };

  const paused = <img alt="" title="set pause" src={pause} onClick={togglePause} style={{ maxWidth: "3rem", opacity: isPaused ? 0.7 : 1 }} />;
  const nextStep = <img alt="" title="move one step" src={move} onClick={moveAndStop} style={{ maxWidth: "3rem", paddingLeft: "1rem", opacity: 0.7 }} />;
  return (
    <>
      <header className={headerStyle.header}>
        <h2>SIR: SARS-CoV-2 [t={time}]</h2>
        <img alt="" title="restart model" src={power} onClick={resetModel} style={{ opacity: 0.7 }} />
        {nextStep}
        {paused}
        <img alt="" title="edit parameters" src={edit} onClick={toggleEdit} style={{ opacity: isEditing ? 1 : 0.7 }} />
        <img alt="" title="show graphs" src={report} onClick={toggleMeasure} style={{ opacity: measuring ? 1 : 0.7 }} />
      </header>

      <section className={`${mainStyle.editing} ${isEditing ? mainStyle.visual : ""}`}>
        <label htmlFor="width">Recovery rate: </label>
        <input type="number" defaultValue={0.1} id="width" step="0.05" min="0" max="1" ref={recovery} />

        <label htmlFor="transmission">Transmission rate: </label>
        <input type="number" defaultValue={0.3} id="height" step="0.05" min="0" max="1" ref={transmission} />

        <label htmlFor="nu">n_u: </label>
        <input type="number" defaultValue={0.4} id="density" step="0.05" min="0" max="1" ref={nu} />
        <button onClick={resetModel}>Go!</button>
      </section>

      <section className={mainStyle.displayContainer}>
        <Map stateID={stateID} model={model} setStateID={setStateID} />
      </section>

      <section id="measuring" style={{ display: measuring ? "block" : "none" }}>
        <Graph stateID={stateID} running={!isPaused} time={time} className={mainStyle.graph} measuring={measuring} model={model}>
          {paused}
          {nextStep}
        </Graph>
      </section>
    </>
  );
};

export default MainScreen;
