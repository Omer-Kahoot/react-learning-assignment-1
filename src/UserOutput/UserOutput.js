import React from 'react';
import './UserOutput.css'

const userOutputComponent = (props) => {
    return (
        <div>
            <p className='pStyling'>Input text entered is {props.username}</p>
            <p>I am second paragraph</p>
        </div>
    );
}

export default userOutputComponent;