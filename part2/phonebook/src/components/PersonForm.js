import React from 'react';

const PersonForm = ( {newName, newNumber, handleNumChange, handlePersonChange, addPerson} ) => {
    return (
        <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange}/>
        </div>
        <div>number: <input value={newNumber} onChange={handleNumChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm;