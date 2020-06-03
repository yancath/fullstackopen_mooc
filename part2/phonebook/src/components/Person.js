import React from 'react';

const Person = ( {persons, delHandler} ) => {
    return (
    <li>{persons.name} {persons.number} <button onClick={delHandler}>delete</button></li>
    )
}

export default Person;