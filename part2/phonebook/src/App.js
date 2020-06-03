import React, { useState, useEffect } from 'react'
import axios from "axios";

import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

import personsService from './services/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data);
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault();
    
    const personObj = {
      name: newName,
      number: newNumber
    }

    const everyPerson = persons.map(person => person.name);

    if (everyPerson.includes(newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace old number with a new one?`)) {
        const id = persons.find(person => person.name === newName).id

        const newObj = {
          name: newName,
					number: newNumber,
        }

        personsService
        .update(id, newObj)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id === id ? returnedPerson : person))
        })

      }
    } else {
      personsService
      .create(personObj)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('');
        setNewNumber('');
      })
    }


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

  const delHandler = (id) => {
    const person = persons.find(person => person.id === id)
    
    if (window.confirm(`Delete ${person.name}?`) === true) {
      personsService
      .remove(id)
      .then(response => {
          setPersons(persons.filter(person => person.id !== id))                
      })
    }
  }

  const displayNames = () => 
    showFilter.map(person => <Person key={person.id} persons={person} delHandler={() => delHandler(person.id)}/>)
  

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
        <Persons 
        persons={displayNames()}
        />
    </div>

  )
}

export default App