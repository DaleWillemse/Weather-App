import React from "react";
import "./WeatherPage.css";
import HumidTile from "C:/Users/DaleWillemse/Documents/GitHub/Weather-App/app/src/components/humidity_tile.js";
import RainTile from "C:/Users/DaleWillemse/Documents/GitHub/Weather-App/app/src/components/rain_tile";
import WindTile from "C:/Users/DaleWillemse/Documents/GitHub/Weather-App/app/src/components/wind_tile";
import Switch from "C:/Users/DaleWillemse/Documents/GitHub/Weather-App/app/src/components/switch.js";
import WeatherIcon from "C:/Users/DaleWillemse/Documents/GitHub/Weather-App/app/src/components/weather_icon.js";

function WeatherPage() {
  return (
    <div>
      <div className="WeatherContainer">
        <div className="CityName">CAPE TOWN</div>
        <div className="Date">31 May 2023</div>
        <div className="WeatherIcon">
          <WeatherIcon condition="Clouds" />
        </div>
        <div className="Temperature">
          <div className="TemperatureNumber">
            <span id="temp">18</span>°
          </div>
          <div className="Switch">
            <Switch />
          </div>
        </div>
        <div className="WeatherCondition">
          <div>
            <RainTile rain="100 %" />
          </div>
          <div>
            <HumidTile humid="50 %" />
          </div>
          <div>
            <WindTile wind="10 km/h" />
          </div>
        </div>
      </div>
      <div className="WeeksWeather">
        <div className="WeekDay">
          <div className="WeekDayName">Thursday</div>
          <div className="WeekDayTemp">
            <span id="temp">18</span>°
          </div>
          <div className="WeekDayIcon">
            <WeatherIcon condition="Snow" />
          </div>
        </div>
        <div className="WeekDay">
          <div className="WeekDayName">Thursday</div>
          <div className="WeekDayTemp">
            <span id="temp">18</span>°
          </div>
          <div className="WeekDayIcon">
            <WeatherIcon condition="Rain" />
          </div>
        </div>
        <div className="WeekDay">
          <div className="WeekDayName">Thursday</div>
          <div className="WeekDayTemp">
            <span id="temp">18</span>°
          </div>
          <div className="WeekDayIcon">
            <WeatherIcon condition="Clouds" />
          </div>
        </div>
        <div className="WeekDay">
          <div className="WeekDayName">Thursday</div>
          <div className="WeekDayTemp">
            <span id="temp">18</span>°
          </div>
          <div className="WeekDayIcon">
            <WeatherIcon condition="Wind" />
          </div>
        </div>
        <div className="WeekDay">
          <div className="WeekDayName">Thursday</div>
          <div className="WeekDayTemp">
            <span id="temp">18</span>°
          </div>
          <div className="WeekDayIcon">
            <WeatherIcon condition="Clear" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
