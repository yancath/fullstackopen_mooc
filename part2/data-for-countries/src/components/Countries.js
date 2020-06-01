import React from 'react'
import Country from './Country'

const Countries = ( { filter, countries, buttonHandler }) => {
    const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

    const output = () => {
        return filteredCountries.map(country => 
        <li key={country.name}>
            {country.name} 
            <button value={country.name} onClick={buttonHandler}>show</button>
        </li>
        )
    }

    if(filteredCountries.length >= 10){
        return  <p>Too many matches, specify another filter</p>
    }

    if(filteredCountries.length === 1){
        return <Country countries={filteredCountries} />
   }

    return (
        <div>
            <ul>{output()}</ul>
        </div>
    )

}

export default Countries