import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./Components/App";

const DOM_NODE = document.getElementById("react_app");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  DOM_NODE
);
