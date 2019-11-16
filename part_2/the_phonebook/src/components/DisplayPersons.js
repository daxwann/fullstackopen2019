import React from 'react';
import Person from './Person';

const DisplayPersons = props => {
  const showRow = () => {
    const regex = new RegExp(props.searchTerm, 'i');
    const filtered = props.persons.filter(person => person.name.match(regex));

    return filtered.map((person, i) => <Person key={i} person={person}/>);
  }

  return (
    <div>
      {showRow()}
    </div>
  )
}

export default DisplayPersons;