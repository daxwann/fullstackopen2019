import React from 'react';
import { setFilter } from '../reducers/filterReducer';

const Filter = ({store}) => {

  const changeFilter = (event) => {
    store.dispatch(setFilter(event.target.value))
  }

  return (
    <div>
      <h3>Filter</h3>
      <input onChange={changeFilter}/>
    </div>
  )
}

export default Filter;