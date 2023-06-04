import React from "react";
import { Component } from "react";
import { link } from "react-router-dom";
//link handels page navigation

import "./WeatherPage.css";
// Consider making seperatte index.js file to handle all the imports
import HumidTile from "../components/humidity_tile";
import RainTile from "../components/rain_tile";
import WindTile from "../components/wind_tile";
import Switch from "../components/switch";
import WeatherIcon from "../components/weather_icon";
import Location from "../components/location";
import Temperature from "../components/temperature";
import HomeBtn from "../components/homeBtn";

// Weather Api Information required fields
class WeatherPage extends Component {
  constructor(props) {
    super(props);

    //required information
    this.state = {
      loading: true,
      cityName: "",
      weatherCondition: "",
      currentTemperature: "",
      rainExpected: "",
      windExpected: "",
      humidityExpected: "",
    };
  }

  //Get API data to frontend
  componentDidMount() {
    fetch("/searchLocationWeather")
      .then((res) => res.json())
      .then((data) => {
        if (data.data.cod === "404") {
          this.setState({
            loading: false,
          });
        } else {
          this.setState({
            //Check OpenweatherAPI documentation for json format
            loading: false,
            cityName: data.data.name,
            weatherCondition: data.data.weather.main,
            currentTemperature: data.data.main.temp,
            rainExpected: data.data.rain, //Might have error here rain.1h
            windExpected: data.data.wind.speed,
            humidityExpected: data.data.main.humidity,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    const Weather_Page = (
      <div>
        <div className="HomeBtn">
          <HomeBtn />
        </div>
        <div className="WeatherContainer">
          <Location city={this.state.cityName} />
          <div className="WeatherIcon">
            <WeatherIcon condition={this.state.weatherCondition} />
          </div>
          <div className="Temperature">
            <Temperature temperature={this.state.currentTemperature} />
            <div className="Switch">
              <Switch />
            </div>
          </div>
          <div className="WeatherCondition">
            <div>
              <RainTile rain={this.state.rainExpected} />
            </div>
            <div>
              <HumidTile humid={this.state.humidityExpected} />
            </div>
            <div>
              <WindTile wind={this.state.windExpected} />
            </div>
          </div>
        </div>
        <div className="WeeksWeather">
          <div className="WeekDay">
            <div className="WeekDayName">Thursday</div>
            <div className="WeekDayTemp">
              <Temperature temperature={this.state.currentTemperature} />
            </div>
            <div className="WeekDayIcon">
              <WeatherIcon condition={this.state.weatherCondition} />
            </div>
          </div>
          <div className="WeekDay">
            <div className="WeekDayName">Thursday</div>
            <div className="WeekDayTemp">
              <Temperature temperature={this.state.currentTemperature} />
            </div>
            <div className="WeekDayIcon">
              <WeatherIcon condition={this.state.weatherCondition} />
            </div>
          </div>
          <div className="WeekDay">
            <div className="WeekDayName">Thursday</div>
            <div className="WeekDayTemp">
              <Temperature temperature={this.state.currentTemperature} />
            </div>
            <div className="WeekDayIcon">
              <WeatherIcon condition={this.state.weatherCondition} />
            </div>
          </div>
          <div className="WeekDay">
            <div className="WeekDayName">Thursday</div>
            <div className="WeekDayTemp">
              <Temperature temperature={this.state.currentTemperature} />
            </div>
            <div className="WeekDayIcon">
              <WeatherIcon condition={this.state.weatherCondition} />
            </div>
          </div>
          <div className="WeekDay">
            <div className="WeekDayName">Thursday</div>
            <div className="WeekDayTemp">
              <Temperature temperature={this.state.currentTemperature} />
            </div>
            <div className="WeekDayIcon">
              <WeatherIcon condition={this.state.weatherCondition} />
            </div>
          </div>
        </div>
      </div>
    );

    return Weather_Page;
  }
}

export default WeatherPage;
