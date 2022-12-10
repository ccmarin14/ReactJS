import React from 'react';
import { useState, useEffect } from 'react';
import { Square } from '../../models/square.class';

const newSquare = new Square('255px', '255px','black');

const DrawSquare = ({ color, change }) => {
    const setStyle = {
        width: newSquare.base,
        height: newSquare.side,
        backgroundColor: color
    }

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         change();
    //       }, 1000);
    // }, [color]);

    return (
        <div onMouseOver={change} style={setStyle}></div>
    )
}

const SquareComponent = () => {

    const [color, setColor] = useState(`rgb(0,0,0)`);

    const changeColor = () => {
        let newColor = '';
        for (let i = 0; i < 3; i++) {
            newColor += (Math.floor(Math.random() * 255)) + 1;
            if (i < 2) {
                newColor += ',';
            }
        }
        for (let i = 0; i < 3; i++) {
            setTimeout(setColor(`rgb(${newColor})`),1000);
        }

    }

    return (
        <div>
            <DrawSquare color={color} change={changeColor}></DrawSquare>
        </div>
    );
}

export default SquareComponent;
