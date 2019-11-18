import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayCountries from './components/DisplayCountries';
import SearchCountries from './components/SearchCountries';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [weather, setWeather] = useState({});

  const searchCountries = () => {
    if (filter !== '') {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${filter}`)
        .then(response => {
          setCountries(response.data);
        })
    }
  }

  const getWeatherData = () => {
    setWeather({})
    console.log(countries.capital);
    if (countries.length === 1 && countries.capital !== "") {
      axios
        .get("http://api.weatherstack.com/current?access_key=" + 
          process.env.REACT_APP_WEATHER_API_KEY + 
          "&query=" + countries[0].capital.split(" ").join("%20"))
        .then(response => {
          setWeather(response.data)
        })
    }
  }

	useEffect(searchCountries, [filter]);
  useEffect(getWeatherData, [countries]);

  return (
    <div>
      <SearchCountries
        filter={filter} 
        setFilter={setFilter} 
        setCountries={setCountries}/>
      <DisplayCountries 
        countries={countries} 
        setCountries={setCountries} 
        filter={filter}
        weather={weather} />
    </div>
  );
}

export default App;
