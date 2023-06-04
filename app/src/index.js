import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WeatherPage from "./WeatherPage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import Home from "./views/HomePage";
import CurrentWeather from "./views/WeatherPage";
import ErrorPage from "./views/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/current-weather" component={CurrentWeather} />
        <Route exact path="/error" component={ErrorPage} />
      </App>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
