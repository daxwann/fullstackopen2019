import React from 'react';
import { setFilter } from '../reducers/filterReducer';
import { connect } from 'react-redux';

const Filter = ({ setFilter }) => {

  const changeFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h3>Filter</h3>
      <input onChange={changeFilter}/>
    </div>
  )
}

const mapDispatchToProps = {
  setFilter
}

export default connect(null, mapDispatchToProps)(Filter);