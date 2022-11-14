/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos del ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instacia el componente');
    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente');
    }

    componentDidMount() {
        console.log('DIDMOUNT: Justo al acabar el montaje del componente, antes de renderizarlos');
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILLRECEVIDPROPS: Si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controla si el componente debe o no actulizarse
         */
        //return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WILLUPDATE: Justo antes de actulizarse');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DIDUPDATE: Justo después de actulizarse');
    }

    componentWillUnmount() {
        console.log('WILLUNMOUNT: Justo antes de desaparecer');
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

lifeCycleExample.propTypes = {

};

export default lifeCycleExample;