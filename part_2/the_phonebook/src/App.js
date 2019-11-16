import React, { useState } from 'react';
import Person from './components/Person'

const App = () => {
  const seed = [
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]

  const [ persons, setPersons] = useState(seed)
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ searchTerm, setSearchTerm] = useState('')

  const showRow = () => {
    const regex = new RegExp(searchTerm, 'i');
    const filtered = persons.filter(person => person.name.match(regex));

    return filtered.map((person, i) => <Person key={i} person={person}/>);
  }

  const nameExist = (name) => {
    return persons.some((person) => person.name === name);
  }

  const addPerson = (event) => {
    event.preventDefault();
    
    if(nameExist(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {   
      const newPerson = {
       name: newName,
       number: newNumber
      }

      setPersons(persons.concat(newPerson));
    
      setNewName('');
      setNewNumber('');
    }
  }

  const handleInput = (callback, event) => {
    return (event) => { callback(event.target.value) };
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with <input value={searchTerm} onChange={handleInput(setSearchTerm)}/>
        </div>
      </form>
      <h2>Add New</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleInput(setNewName)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleInput(setNewNumber)}/>
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