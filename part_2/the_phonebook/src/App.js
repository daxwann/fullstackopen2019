import React, { useState, useEffect } from 'react';
import personService from './services/personService'
import NewPersonForm from './components/NewPersonForm'
import FilterPersons from './components/FilterPersons'
import DisplayPersons from './components/DisplayPersons'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(returnedPersons => {
        console.log(returnedPersons);
        setPersons(returnedPersons);
      })
      .catch(error => {
        alert("failed to retrieve all entries");
      })
  }, [])

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