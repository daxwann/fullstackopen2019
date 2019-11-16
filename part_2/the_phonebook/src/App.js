import React, { useState } from 'react';
import NewPersonForm from './components/NewPersonForm'
import FilterPersons from './components/FilterPersons'
import DisplayPersons from './components/DisplayPersons'

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

  const handleInput = (callback, event) => {
    return (event) => { callback(event.target.value) };
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterPersons searchTerm={searchTerm} handleFilterInput={handleInput(setSearchTerm)} />
      <h2>Add New</h2>
      <NewPersonForm 
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleNumberInput={handleInput(setNewNumber)}
        handleNameInput={handleInput(setNewName)}
      />
      <h2>Numbers</h2>
      <DisplayPersons persons={persons} searchTerm={searchTerm} />
    </div>
  )
}

export default App