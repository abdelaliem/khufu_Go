import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import mapboxgl from "mapbox-gl";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
