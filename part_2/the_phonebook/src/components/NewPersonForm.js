import React from 'react';

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

      props.setPersons(props.persons.concat(newPerson));

      //clear inputs
      props.setNewName('');
      props.setNewNumber('');
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