import "./App.css";
import CurrentWeather from "./current-weather/current-weather";
import Forecast from "./forecast/forecast";
import SearchCity from "./components/searchCity";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { Routes, Route } from "react-router-dom";
import WeatherPage from "./WeatherPage";
import HomePage from "./HomePage";

function App() {
  return (
    <body>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/WeatherPage" element={<WeatherPage />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;
