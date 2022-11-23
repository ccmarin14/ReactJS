import React from 'react';
import PropTypes from 'prop-types';


const EstadoComponent = (estado) => {
    return (
        <span><b>Estado:</b> {estado.conectado ? 'Contacto en línea' : 'Contacto no disponible'}</span>
    );
};


EstadoComponent.propTypes = {
    estado: PropTypes.bool,
};


export default EstadoComponent;
