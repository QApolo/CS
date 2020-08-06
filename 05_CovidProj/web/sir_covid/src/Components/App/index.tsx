import React, { useEffect, useState, createContext } from "react";

import stylesApp from "./App.module.css";
import Main from "../Main";
import { dataFromJson } from "../../data";

const DataContext = createContext<null | dataFromJson>(null);

const App: React.FC = () => {
  const [currentData, setCurrentData] = useState<dataFromJson | null>(null);

  const url = "https://raw.githubusercontent.com/QApolo/CS/master/05_CovidProj/web/sir_covid/src/data.json";
  useEffect(() => {
    fetch(url).then(response => response.json().then(serverData => setCurrentData(serverData)));
  }, []);

  return (
    <DataContext.Provider value={currentData}>
      <main className={stylesApp.app}>
        <div id="mainScreen">{currentData != null ? <Main /> : null}</div>
      </main>
    </DataContext.Provider>
  );
};

export { DataContext };
export default App;
