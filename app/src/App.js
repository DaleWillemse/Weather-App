import "./App.css";
import { Routes, Route } from "react-router-dom";
import WeatherPage from "./WeatherPage";
import HomePage from "./HomePage";

function App() {
  return (
    <body>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/current-weather" element={<WeatherPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;
