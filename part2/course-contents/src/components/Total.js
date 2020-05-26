import React from 'react';

const Total = ({parts}) => {
    const sum = parts.reduce((sum, part) => sum+=part.exercises, 0);

    return (
        <div>
            <p><b>Total of {sum} exercises</b></p>
        </div>
    )
}

export default Total;