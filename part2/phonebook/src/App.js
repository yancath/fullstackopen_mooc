import React, { useState } from 'react'
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const addPerson = (event) => {
    event.preventDefault();
    
    const personObj = {
      name: newName,
      number: newNumber
    }

    const everyPerson = persons.map(person => person.name);

    if (everyPerson.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
    }

    console.log(personObj)
    setPersons(persons.concat(personObj));
    setNewName('');
    setNewNumber('');
  }

  const showFilter = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handleNumChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const displayNames = () => 
    showFilter.map(person => <Person key={person.name} persons={person}/>)
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} showFilter={showFilter}/>
      <h3>add a new</h3>
      <PersonForm 
      addPerson={addPerson}
      newName={newName} 
      newNumber={newNumber} 
      handlePersonChange={handlePersonChange} 
      handleNumChange={handleNumChange}/>
      <h3>Numbers</h3>
        <Persons persons={displayNames()}/>
    </div>

  )
}

export default App