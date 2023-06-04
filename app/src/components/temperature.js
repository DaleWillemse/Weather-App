//App.js --- import Temperature from './components/temperature';
//required --- <Temperature temperature='50'/>

import React from "react";
import "./temperature.css";

const Temperature = (props) => {
  let temp = props.temperature;

  return <div id="containerTemperature">{temp}&deg;</div>;
};

export default Temperature;
