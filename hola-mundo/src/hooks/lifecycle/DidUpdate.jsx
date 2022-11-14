/**
 * Ejemplo de uso de método de component de clase
 * y uso de jook en componente funcional
 */

import React, { Component, useEffect } from 'react'

export default class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado');
    }

    render() {
        return (
        <div>
            <h1>DidUpdate</h1>
        </div>
        )
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado');
    });

    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}

