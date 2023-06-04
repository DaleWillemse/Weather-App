import React from "react";

const RianTile = ({ rain }) => {
  if (typeof rain === "object") {
    return <div>Rain information not available</div>;
  }

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

export default RianTile;
