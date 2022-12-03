import React, { useState } from 'react';
import { getNumber } from '../../services/onbservableService';

const ObservableExample = () => {

    const [number, setNumber] = useState(0);
    
    const obtainNumbers = () => {
        console.log('just before subscribe');
        getNumber.subscribe({
            next(newValue){
                console.log(`New value observable:  ${newValue}`);
                setNumber(newValue)

            },
            error(err){
                console.error('something wrong occurred: ' + err);
            },
            complete(){
                console.log('done');
            }

        })

        console.log('just after subscribe');
    }

    return (
        <div>
    
         <h1>New value {number}</h1>
         <button onClick={obtainNumbers}>get Numerber </button>
            
        </div>
    );
}

export default ObservableExample;
