import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import EstadoComponent from './estado.jsx';

const ContactoComponent = ({contacto,mostrar,borrar}) => {

    const [ver, setVer] = useState(mostrar);
    const [estado, setEstado] = useState(contacto.conectado);

    const mostrarContacto = () => {
        if (ver) {
            return (
                <div>
                    <div>
                        <b>Email:</b> {contacto.email}
                    </div>              
                    <div>
                        <EstadoComponent conectado = {estado}></EstadoComponent>
                        <i
                            className='bi bi-arrow-down-up' 
                            style={{
                                color:'green',
                                position:'absolute', 
                                right:'0',
                                paddingRight:'10px', 
                                cursor:'grab'
                            }}
                            onClick={()=>conmutarEstado()}
                        >
                        </i>
                    </div>
                </div>
            )
        } 
    }

    const conmutarMostrar = () => {
        setVer(!ver);
    }

    const conmutarEstado = () => {
        setEstado(!estado);
    }

    return (
        <li 
            style={{listStyle:'none'}}
        >
            <div className='border p-1 rounded' >
                <div 
                    className='border-bottom border-opacity-25 border-success'
                    style={{cursor:'pointer'}}
                    onClick={()=>conmutarMostrar()}
                >
                    <b>{contacto.nombre} {contacto.apellido}</b>
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
                {mostrarContacto()}
            </div>
        </li>
    );
};

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    mostrar: PropTypes.bool.isRequired,
    borrar: PropTypes.func.isRequired,
};

export default ContactoComponent;
