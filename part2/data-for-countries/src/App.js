import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Filter from './components/Filter'
import Country from './components/Country';
import Countries from './components/Countries';


const App = () => { 
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      console.log(response.data)
      setCountries(response.data);
    })
  }, [])

  
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const buttonHandler = (event) => {
    setFilter(event.target.value)
  }


  return (
   <div>
     <Filter filter={filter} handleFilterChange={handleFilterChange}/>
     <Countries filter={filter} countries={countries} buttonHandler={buttonHandler}/>
   </div> 
  )
}

export default App;
