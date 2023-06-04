// App.js requires --- import RainTile from './components/rain_tile';
// Condition passed --- <RainTile wind='10m/s'/>
import React from "react";
import "./tiles.css";

const RainTile = (props) => {
  let rain = props.rain;

<<<<<<< HEAD
  return (
    <div className="containerTiles">
      <img
        className="icon"
        src="/weather_icons/rainy.png"
        alt="Missing Weather Icon"
      />
      <div className="currentCondition">{rain} %</div>
      <label className="tileName">Rain</label>
    </div>
  );
};

export default RainTile;
=======
    return (
        <div className="containerTiles"> 
            <img className="icon" src="/weather_icons/rainy.png" alt="Missing Weather Icon"/>
            <div className="currentCondition">
                {rain} %
            </div>
            <label className="tileName">Rain</label>
        </div>
     
    );
 };
 
 export default RainTile;
>>>>>>> 3bdb4e8a7a4a57049c6b7427b219cb5d6b6d1f6a
