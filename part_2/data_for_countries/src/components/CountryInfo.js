import React from 'react';

const CountryInfo = props => {
  const listLanguages = () => {
    return props.country.languages.map((language, i) => {
      return <li key={i}>{language.name}</li>
    })
  }

  return (
    <div>
      <h1>{props.country.name}</h1>
      <p>capital {props.country.capital}</p>
      <p>population {props.country.population}</p>

      <h2>Languages</h2>
      <ul>
        {listLanguages()}
      </ul>

      <img className="country__flag" src={props.country.flag} alt={props.country.name + ' flag'}></img>
    </div>
  )
};

export default CountryInfo;