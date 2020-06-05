import React from 'react'

const Notification = ( {message, flag} ) => {
    if (message === null) {
        return null;
    }
    
    if (flag == false) {
        return (
            <div className="error">
                {message}
            </div>
        )
    } else {
        return (
            <div className="success">
                {message}
            </div>
        )
    }

}

export default Notification