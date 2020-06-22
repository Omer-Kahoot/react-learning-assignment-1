import React from 'react';

const userInputComponent = (props) => {
    return (
        <input type="text" onChange={props.updateEvent} value={props.value}></input>
    );
}

export default userInputComponent;