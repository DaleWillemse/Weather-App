import React from "react";
import { Component } from "react";
//link handels page navigation

import "./WeatherPage.css";
import {
  HumidTile,
  WindTile,
  Switch,
  WeatherIcon,
  Location,
  Temperature,
  HomeBtn,
} from "../components";

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
            weatherCondition: data.data.weather[0].description,
            currentTemperature: data.data.main.temp,
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
              <HumidTile humid={this.state.humidityExpected} />
            </div>
            <div>
              <WindTile wind={this.state.windExpected} />
            </div>
          </div>
        </div>
      </div>
    );

    return Weather_Page;
  }
}

export default WeatherPage;
