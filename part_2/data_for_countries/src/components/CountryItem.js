import React from 'react';
import axios from 'axios';

const CountryItem = props => {
  const showCountry = () => {
    axios
      .get("https://restcountries.eu/rest/v2/alpha/" + props.country.alpha2Code)
      .then(response => {
        props.setCountries([response.data])
      })
  }

  return (
    <div>
      <p>{props.country.name} <button onClick={showCountry}>show</button></p>
    </div>
  )
};

export default CountryItem;