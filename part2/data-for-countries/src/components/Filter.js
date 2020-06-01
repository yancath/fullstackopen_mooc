import React from 'react'

const Filter = ( {filter, handleFilterChange} ) => {
    const text = 'find countries';

    return (
        <div>
            {text}<input value={filter} onChange={handleFilterChange}/>
        </div>
    )
}

export default Filter