import React from 'react';

const Filter = ( {filter, handleFilterChange} ) => {
    const text = 'filter shown with'

    return (
        <div>
          {text}<input value={filter} onChange={handleFilterChange}/>
          
        </div>
    )
}

export default Filter;