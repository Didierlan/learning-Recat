import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Didier');
    

    function showMessage(text){
        alert(`Message received of child: ${text}`)
    }

    function updateName(newName){
        setName(newName)
        alert(`new name desde child ${newName}`)
    }
    return (
        <div style={{ background: 'black', padding: '12rem'}}>
           <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
