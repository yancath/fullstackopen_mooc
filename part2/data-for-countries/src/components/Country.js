import React from 'react';
import Weather from './Weather';

const Country = ( {countries} ) => {
    console.log(countries)
    return(
    <div>
        <h2>{countries[0].name}</h2>
        capital: {countries[0].capital}
        <br></br>
        Population: {countries[0].population}
        <h3>Languages</h3>
        <ul>
        {countries[0].languages.map((language, name) => {
            return (
                <li key={name}>
                {language.name}
          </li>
            )
        })}
        </ul>
        <img src={`https://restcountries.eu/data/${countries[0].alpha3Code.toLowerCase()}.svg`} 
        alt="country flag"
        width="150" height="150">
        </img>
        <Weather countries={countries}/>
    </div>
    )
}

export default Country