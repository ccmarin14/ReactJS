import React from 'react';
import { Contacto } from '../models/contacto.class';
import EstadoComponent from './estado.component';

const ContactoComponent = () => {

    const contacto = new Contacto('Cristian','Marin','cristian@gmail.com',false)

    return (
        <div>
            <p><b>Nombre: </b>{contacto.nombre}</p>
            <p><b>Apellido: </b>{contacto.apellido}</p>
            <p><b>Email: </b>{contacto.email}</p>
            <EstadoComponent conectado = {contacto.conectado}></EstadoComponent>
        </div>
    );
};


export default ContactoComponent;
