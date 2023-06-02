import { useState } from "react";
import "./App.css";
import Search from "./components/search";
import SearchBtn from "./components/searchBtn";
import CurrentWeather from "./current-weather/current-weather";
import SearchCity from "./components/searchCity";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

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

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
      })
      .catch(console.log);
  };

  return (
    <body>
      <div className="App">
        <header className="App-header"> Weather Forecast</header>
        <p className="App-Paragraph">Enter your Zip Code to get started</p>
        <Search />
        <SearchBtn />
        
      </div>
      <div className="container">
      <SearchCity onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
    </body>
  );
}

export default App;


