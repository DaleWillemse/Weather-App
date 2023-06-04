import "./App.css";
import { Routes, Route } from "react-router-dom";
import WeatherPage from "./views/WeatherPage";
import HomePage from "./views/HomePage";

function App() {
  return (
    <body>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/current-weather" element={<WeatherPage />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;
