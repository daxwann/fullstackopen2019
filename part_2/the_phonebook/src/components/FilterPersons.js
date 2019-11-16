import React from 'react';

const FilterPerson = props => {
  return (
    <form>
      <div>
        filter shown with <input value={props.searchTerm} onChange={props.handleFilterInput}/>
      </div>
    </form>
  )
}

export default FilterPerson