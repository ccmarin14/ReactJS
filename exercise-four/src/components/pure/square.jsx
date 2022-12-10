import React from 'react';
import { useState, useEffect } from 'react';
import { Square } from '../../models/square.class';

const newSquare = new Square('255px', '255px','black');

const DrawSquare = ({ color, onChange, offChange }) => {
    const setStyle = {
        width: newSquare.base,
        height: newSquare.side,
        backgroundColor: color
    }

    return (
        <div onMouseOver={onChange} onMouseLeave={offChange} onDoubleClick={offChange} style={setStyle}></div>
    )
}

const SquareComponent = () => {

    const [color, setColor] = useState(`rgb(0,0,0)`);
    const [bucle, setBucle] = useState(0);

    const changeColor = () => {
        let newColor = '';
        for (let i = 0; i < 3; i++) {
            newColor += (Math.floor(Math.random() * 255)) + 1;
            if (i < 2) {
                newColor += ',';
            }
        }
        setColor(`rgb(${newColor})`);
    }

    const onChangeColor = () => {
        return setBucle(setInterval(changeColor, 300));
    };

    const offChangeColor = () => {
        return clearInterval(bucle);
    };
    

    return (
        <div>
            <DrawSquare color={color} onChange={onChangeColor} offChange={offChangeColor}></DrawSquare>
        </div>
    );
}

export default SquareComponent;
