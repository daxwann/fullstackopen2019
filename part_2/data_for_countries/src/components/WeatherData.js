import React from 'react';

const WeatherData = props => {
  if (Object.keys(props.weather).length === 0 && props.weather.constructor === Object ) {
    return (
      <p>
        no weather data available
      </p>
    )
  }

  return (
    <div>
      <h2>Weather in {props.weather.location.name}</h2>
      <p><strong>Temperature:</strong> {props.weather.current.temperature} Celsius</p>
      <img 
        src={props.weather.current.weather_icons[0]} 
        alt={props.weather.current.weather_descriptions[0]}></img>
      <p><strong>Wind:</strong> {props.weather.current.wind_speed} kph toward {props.weather.current.wind_dir}</p>
    </div>
  )
}

export default WeatherData;