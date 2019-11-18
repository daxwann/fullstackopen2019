import React from 'react';

const SearchCountries = props => {
  const updateFilter = event => {
    props.setFilter(event.target.value);
  }

  return (
    <form>
      <label>
       find countries <input value={props.filter} onChange={updateFilter}/>
      </label>
    </form>
  )
};

export default SearchCountries;