//https://openweathermap.org/weather-conditions ---for weather types
// App.js requires --- import WeatherIcon from './components/weather_icon';
import React from 'react';
import './weather_icon.css';

const weatherIcon = props => {
    let icon = '';
    switch(props.condition){
        case 'Thunderstorm':
            icon ='./public/weather_icons/thunderstorm.png';
            break;
        case 'Drizzle':
            icon ='./public/weather_icons/overcast.png';
            break;
        case 'Rain':
            icon ='./public/weather_icons/rainy.png';
            break;
        case 'Snow':
            icon ='./public/weather_icons/snowy.png';
            break;
        case 'Clear':
            icon ='./public/weather_icons/sunshine.png';
            break;
        case 'Clouds':
            icon ='./public/weather_icons/cloudy.png';
            break;
        default: // Atmosphere has multiple dofferent conditions
            icon ='./public/weather_icons/foggy.png';
            break;                    
    }
    //Have extra windy Icon

    //Switch works Icon is jus not assigned
    return (
    <icon className="icon" src={icon} alt="Missing Weather Icon"/>
    )
};

export default weatherIcon;