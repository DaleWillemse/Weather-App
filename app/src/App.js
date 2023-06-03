import { useState } from "react";
import "./App.css";
import Search from "./components/search";
import CurrentWeather from "./current-weather/current-weather";
import Forecast from "./forecast/forecast";
import SearchCity from "./components/searchCity";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <body>
      <div className="App">
        <h5><header>Weather Forecast</header></h5>
        <p className="App-Paragraph">Enter your Zip Code to get started</p>
        <Search />
        
        
      </div>
      <div className="App-Search">
      <SearchCity onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
    </body>
  );
}

export default App;


