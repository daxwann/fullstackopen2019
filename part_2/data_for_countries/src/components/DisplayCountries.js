import React from 'react';
import CountryInfo from './CountryInfo';
import CountryItem from './CountryItem';

const DisplayCountries = props => {
  

  const displayResult = () => {
    if (props.filter === '') {
      return (
        <p>Please enter search filter</p>
      )
    }

    if (props.countries.length > 10) {
      return (
        <p>Too many matches. Please specify filter.</p>
      )
    } 

    if (props.countries.length === 1) {
      return <CountryInfo country={props.countries[0]} />
    }

    if (props.countries.length > 1) {
      return (
        props.countries.map((country, i) => {
          return <CountryItem key={i} name={country.name} />
        })
      )
    }
  }
  
  return (
    <div>
      {displayResult()}
    </div>
  )
}

export default DisplayCountries;