import React, { useState } from 'react';
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [ newName, setNewName ] = useState('')

  const showRow = () => {
    return persons.map((person, i) => <Person key={i} person={person}/>)
  }

  const addPerson = (event) => {
    event.preventDefault();
    
    const newPerson = {
      name: newName
    }

    setPersons(persons.concat(newPerson));
    
    setNewName('');
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {showRow()}
    </div>
  )
}

export default App