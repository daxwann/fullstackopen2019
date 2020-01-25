import React, { useState } from 'react';
import personService from '../services/personService';

const NewPersonForm = props => {

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  const findName = (name) => {
    return props.persons.find(person => person.name === name);
  }

  const confirmUpdate = foundPerson => {
    if (window.confirm(`${foundPerson.name} already exist in the phonebook. Do you want to replace the old number with the new one?`)) {
      const updatedPerson = { ...foundPerson, number: newNumber }

      personService
        .updatePerson(foundPerson.id, updatedPerson)
        .then(returnedPerson => {
          props.setPersons(props.persons.map(person => {
            if (person.id !== foundPerson.id) {
              return person;
            } else {
              return returnedPerson;
            }
          }));

          //success message
          props.notify("success", `${returnedPerson.name}'s number has been updated`)

          //clear inputs
          setNewName('');
          setNewNumber('');
        })
				.catch(error => {
          //error message
					props.notify("error", `${updatedPerson.name} has already been deleted`)
				})
    }
  }

  const addPerson = (event) => {
    event.preventDefault();
    
    const foundPerson = findName(newName);

    if (foundPerson) {
      confirmUpdate(foundPerson);
    } else {
      //create new person
      const newPerson = {
       name: newName,
       number: newNumber
      }

      personService
        .createPerson(newPerson)
        .then(createdPerson => {
          props.setPersons(props.persons.concat(createdPerson));

          //success message
          props.notify("success", `${createdPerson.name}'s number has been added`)

          //clear inputs
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          props.notify("error", `${error.response.data.error}`)
        })
    }
  }

  return (
    <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={props.handleInput(setNewName)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={props.handleInput(setNewNumber)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
    </form>
  )
}

export default NewPersonForm;