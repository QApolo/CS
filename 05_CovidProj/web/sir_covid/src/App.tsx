import React from "react";
import "./App.css";

import model from "./model";

const App = () => {
  // @ts-ignore
  window["model"] = model;
  return <div className="App"></div>;
};

export default App;
