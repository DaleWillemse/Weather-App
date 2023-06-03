//import logo from './logo.svg';
import './App.css';

import Switch from './components/switch';
import WeatherIcon from './components/weather_icon';
import RainTile from './components/rain_tile';
import WindTile from './components/wind_tile';
import HumidTile from './components/humidity_tile';
import Location from './components/location';
import Temperature from './components/temperature';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <WeatherIcon condition='Rain'/>  
      <Switch/>
      
      <RainTile rain='10%'/>
      <WindTile wind='10m/s'/>
      <HumidTile humid='50%'/>

      <Location city='Pretoria'/>

      <Temperature temperature='50'/>

      </header>
    </div>
  );
}

export default App;
