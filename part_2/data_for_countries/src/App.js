import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayCountries from './components/DisplayCountries';
import SearchCountries from './components/SearchCountries';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  const searchCountries = () => {
    if (filter !== '') {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${filter}`)
        .then(response => {
          setCountries(response.data);
        })
    }
  }

  return (
    <div>
      <SearchCountries
        filter={filter} 
        setFilter={setFilter} 
        setCountries={setCountries}/>
      <DisplayCountries countries={countries} filter={filter}/>
    </div>
  );
}

export default App;
