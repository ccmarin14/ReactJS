import { NextPlan } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import { getNumbers } from '../../services/observableService'; 

const ObservableExample = () => {
    
    const [number, setNumber] = useState(0);

    const obtainNewNumber = () => {
        console.log('Subscription to Observable');
        getNumbers().subcribe(
            {
                next(newNumber) {
                    console.log('New Number:', newNumber);
                    setNumber(newNumber);
                },
                error(error) {
                    alert(`Something went wrong: ${error}`);
                    console.log('Error in Observable');
                },
                complete() {
                    alert(`Finished with: ${number}`)
                    console.log('Done with the observable');
                }
            }
        )
        console.log('Finished receiving numbers');
    }
    
    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={obtainNewNumber}>Obtain new Numbers</button>
        </div>
    );
}

export default ObservableExample;
