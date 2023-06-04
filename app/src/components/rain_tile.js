// App.js requires --- import RainTile from './components/rain_tile';
// Condition passed --- <RainTile wind='10m/s'/>
import React from "react";
import "./tiles.css";

const RainTile = (props) => {
  let rain = props.rain;

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
