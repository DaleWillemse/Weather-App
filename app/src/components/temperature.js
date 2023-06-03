//App.js --- import Temperature from './components/temperature';
//required --- <Temperature temperature='50'/>

import React from "react";
import './temperature.css';

const Temperature = props => {
    let temp = props.temperature;

    return (
        <div id="containerTemperature">
            <h1>
                {temp}&deg;
            </h1>
        </div>  
    );
 };
 
 export default Temperature;