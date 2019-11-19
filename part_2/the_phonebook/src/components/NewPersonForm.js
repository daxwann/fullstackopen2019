import React from 'react';
import personService from '../services/personService';

const NewPersonForm = props => {

  const nameExist = (name) => {
    return props.persons.some((person) => person.name === name);
  }

  const addPerson = (event) => {
    event.preventDefault();
    
    if(nameExist(props.newName)) {
      // warn name exists
      alert(`${props.newName} is already added to phonebook`);
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