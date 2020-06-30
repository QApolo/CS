import React from "react";

import stylesApp from "./App.module.css";
import Main from "../Main";

const App: React.FC = () => {
  return (
    <main className={stylesApp.app}>
      <div id="mainScreen">
        <Main />
      </div>
    </main>
  );
};

export default App;
