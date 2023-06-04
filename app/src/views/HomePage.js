import React from "react";
import { Component } from "react";
import "./HomePage.css";
import Search from "../components/search.js";

function HomePage() {
  return (
    <body>
      <div className="home-page">
        <h4>
          <header>Weather Forecast</header>
        </h4>
        <p className="App-Paragraph">Enter your Zip Code to get started</p>
        <Search />
      </div>
    </body>
  );
}

export default HomePage;
