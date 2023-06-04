import React from "react";
import "./WeatherPage.css";
import HumidTile from "./components/humidity_tile";
import RainTile from "./components/rain_tile";
import WindTile from "./components/wind_tile";
import Switch from "./components/switch";
import WeatherIcon from "./components/weather_icon";
import Location from "./components/location";
import Temperature from "./components/temperature";

function WeatherPage() {
  return (
    <div>
      <div className="WeatherContainer">
        <Location city="Pretoria" />
        <div className="WeatherIcon">
          <WeatherIcon condition="Clouds" />
        </div>
        <div className="Temperature">
          <Temperature temperature="50" />
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
            <Temperature temperature="50" />
          </div>
          <div className="WeekDayIcon">
            <WeatherIcon condition="Snow" />
          </div>
        </div>
        <div className="WeekDay">
          <div className="WeekDayName">Thursday</div>
          <div className="WeekDayTemp">
            <Temperature temperature="50" />
          </div>
          <div className="WeekDayIcon">
            <WeatherIcon condition="Rain" />
          </div>
        </div>
        <div className="WeekDay">
          <div className="WeekDayName">Thursday</div>
          <div className="WeekDayTemp">
            <Temperature temperature="50" />
          </div>
          <div className="WeekDayIcon">
            <WeatherIcon condition="Clouds" />
          </div>
        </div>
        <div className="WeekDay">
          <div className="WeekDayName">Thursday</div>
          <div className="WeekDayTemp">
            <Temperature temperature="50" />
          </div>
          <div className="WeekDayIcon">
            <WeatherIcon condition="Wind" />
          </div>
        </div>
        <div className="WeekDay">
          <div className="WeekDayName">Thursday</div>
          <div className="WeekDayTemp">
            <Temperature temperature="50" />
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
