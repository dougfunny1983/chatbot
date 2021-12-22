import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const render = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root = document.getElementById("root");

ReactDOM.render(render, root);

reportWebVitals();
