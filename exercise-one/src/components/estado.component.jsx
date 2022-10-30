import React from 'react';
import PropTypes from 'prop-types';


const EstadoComponent = (estado) => {
    return (
        <p><b>Conectado:</b> {estado.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</p>
    );
};


EstadoComponent.propTypes = {
    estado: PropTypes.bool,
};


export default EstadoComponent;
