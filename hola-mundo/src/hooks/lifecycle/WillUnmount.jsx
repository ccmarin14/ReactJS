/**
 * Ejemplo de uso del método para el componente clase
 * y para el uso de hooks para el componente funcinal
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

export default class WillUnmount extends Component {
    
    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca');
    }
    
    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        )
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        //Aqui no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        };
    }, []);

    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}

