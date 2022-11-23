import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import EstadoComponent from './estado.jsx';

const ContactoComponent = ({contacto,mostrar,borrar}) => {

    const [ver, setVer] = useState(mostrar);

    const mostrarContacto = () => {
        if (ver) {
            return (
                <div>
                    <div>
                        {contacto.email}
                        <i
                            className='bi bi-trash2' 
                            style={{
                                color:'tomato', 
                                position:'absolute', 
                                right:'0',
                                paddingRight:'10px', 
                                cursor:'grab'
                            }}
                            onClick={()=>{borrar(contacto)}}
                        >
                        </i>
                    </div>              
                    <div>
                        <EstadoComponent conectado = {contacto.conectado}></EstadoComponent>
                    </div>
                </div>
            )
        } 
    }

    const conmutarMostrar = () => {
        setVer(!ver);
    }

    return (
        <li 
            style={{listStyle:'none'}}
        >
            <div
                className='border p-1 rounded' 
                style={{cursor:'pointer'}}
                onClick={()=>conmutarMostrar()}           
            >
                <div>
                    <b>{contacto.nombre} {contacto.apellido}</b>
                    <i 
                        className='bi bi-arrow-return-left' 
                        style={{color:'green', position:'absolute', right:'0', paddingRight:'10px'}}
                    >
                    </i>
                    {mostrarContacto()}
                </div>
            </div>
        </li>
    );
};

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
};

export default ContactoComponent;
