import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';


const Voter = () => {

    const [bad, setBad] = useState(0);
    const [good, setGood] = useState(0);
    
    const pushGood = () => {
        setGood(good + 1);
    };

    const pushBad = () => {
        setBad(bad + 1);
    };


    return (
        <div>
            <table style={{margin:"auto"}}>
                <tbody>
                    <tr>
                        <td><Button variant="outlined" color="success" onClick={pushGood}>good</Button></td>
                        <td><Button variant="outlined" color="error" onClick={pushBad}>bad</Button></td>
                    </tr>
                    <tr>
                        <td>
                            <b>{good}</b>
                        </td>
                        <td>
                            <b>{bad}</b>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Voter;
