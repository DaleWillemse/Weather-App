//app.js ---- import Location from './components/location';
// <Location city='Pretoria'/>

import React from "react";
import './location.css';

const Location = props => {
    let city = props.city;

    let dateCurrent = new Date();
    let date = `${dateCurrent.getDate()}/${dateCurrent.getMonth()}/${dateCurrent.getFullYear()} `;

    return (
        <div>
            <h1 id="City">
                {city}
            </h1>
            <h2 id="currentDate">
                {date}
            </h2>
        </div>
    );
 };
 
 export default Location;