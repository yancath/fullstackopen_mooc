import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Weather = ( {countries} ) => {
    const [weather, setWeather] = useState('')
    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${countries[0].capital}`)
        .then(
            response => {
            console.log("weather", response.data.current)
            setWeather(response.data.current)
        })
    } ,[])

    return (
       <div>
        <h3>Weather in {countries[0].capital}</h3>
        <b>temperature: {weather.temperature} Celsius</b>
        <br></br>
        <img src={weather.weather_icons} 
        alt="weather icon">
        </img>
        <br></br>
        <b>wind: {weather.wind_speed} mph direction {weather.wind_dir}</b>
       </div>
    )
}

export default Weather