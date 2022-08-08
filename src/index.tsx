import "bootstrap/dist/css/bootstrap.min.css";

import "./client/style/index.css";

import { BrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";

import { reportWebVitals } from "./client/service";
import { Router } from "./client/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
