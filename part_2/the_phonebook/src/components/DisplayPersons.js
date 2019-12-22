import React from 'react';
import Person from './Person';
import personService from '../services/personService';

const DisplayPersons = props => {
  const showRow = () => {
    const regex = new RegExp(props.searchTerm, 'i');
    const filtered = props.persons.filter(person => {
      return person.name.match(regex)
    });

    const deletePerson = (id, name) => {
      personService
        .deletePerson(id)
        .then(response => {
          props.setPersons(props.persons.filter(p => p.id !== id));
          props.notify("success", `Deleted ${name}`)
        })
        .catch(error => {
          props.notify("error", `Failed to delete ${name}`)
        })
    }

    return filtered.map((person) => <Person key={person.id} person={person} deletePerson={deletePerson}/>);
  }

  return (
    <div>
      {showRow()}
    </div>
  )
}

export default DisplayPersons;