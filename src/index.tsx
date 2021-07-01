import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from "ps-theme";

import App from "views/App";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
