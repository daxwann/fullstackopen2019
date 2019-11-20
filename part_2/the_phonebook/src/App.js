import React, { useState, useEffect } from 'react';
import personService from './services/personService'
import NewPersonForm from './components/NewPersonForm'
import FilterPersons from './components/FilterPersons'
import DisplayPersons from './components/DisplayPersons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ searchTerm, setSearchTerm] = useState('')
  const [ notification, setNotification] = useState({ type: '', message: '' })

  const handleInput = (callback, event) => {
    return (event) => { callback(event.target.value) };
  }

  const notify = (type, msg) => {
    setNotification({type: type, message: msg});
    setTimeout(() => {
      setNotification({type: '', message: ''});
    }, 5000)
  }

  useEffect(() => {
    personService
      .getAll()
      .then(returnedPersons => {
        setPersons(returnedPersons);
      })
      .catch(error => {
        notify("error", "failed to retrieve all entries");
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification}/>
      <FilterPersons searchTerm={searchTerm} handleFilterInput={handleInput(setSearchTerm)} />
      <h2>Add New</h2>
      <NewPersonForm 
        persons={persons}
        setPersons={setPersons}
        handleInput={handleInput}
        notify={notify}
      />
      <h2>Numbers</h2>
      <DisplayPersons 
        persons={persons} 
        setPersons={setPersons} 
        searchTerm={searchTerm} 
        notify={notify}/>
    </div>
  )
}

export default App