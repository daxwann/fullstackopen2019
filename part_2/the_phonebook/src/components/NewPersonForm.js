import React from 'react';
import personService from '../services/personService';

const NewPersonForm = props => {

  const findName = (name) => {
    return props.persons.find(person => person.name === name);
  }

  const confirmUpdate = foundPerson => {
    if (window.confirm(`${foundPerson.name} already exist in the phonebook. Do you want to replace the old number with the new one?`)) {
      const updatedPerson = { ...foundPerson, number: props.newNumber }
      personService
        .updatePerson(foundPerson.id, updatedPerson)
        .then(returnedPerson => {
          props.setPersons(props.persons.map(person => person.id !== foundPerson.id ? person : returnedPerson))
        })
				.catch(error => {
					alert(`Failed to update number`);
				})
    }
  }

  const addPerson = (event) => {
    event.preventDefault();
    
    const foundPerson = findName(props.newName);

    if (foundPerson) {
      confirmUpdate(foundPerson);
    } else {
      //create new person
      const newPerson = {
       name: props.newName,
       number: props.newNumber
      }

      personService
        .createPerson(newPerson)
        .then(returnedPerson => {
          props.setPersons(props.persons.concat(returnedPerson));

          //clear inputs
          props.setNewName('');
          props.setNewNumber('');
        })
        .catch(error => {
          alert(`Failed to add ${newPerson.name}`);
        })
    }
  }

  return (
    <form onSubmit={addPerson}>
        <div>
          name: <input value={props.newName} onChange={props.handleNameInput}/>
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.handleNumberInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
  )
}


export default NewPersonForm;