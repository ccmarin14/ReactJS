import React, { useState, useEffect } from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';
import ContactoForm from '../pure/forms/contactoForm';

const ContactoListComponent = () => {

    const contacto1 = new Contacto('Cristian','Marin','cristian@gmail.com',true);
    const contacto2 = new Contacto('Carolina','Zapata','caro@gmail.com',false);
    const contacto3 = new Contacto('Celeste','Marin','cele@gmail.com',true);
    const contacto4 = new Contacto('Sora','Florez','sora@gmail.com',false);

    const [contactos, setContactos] = useState([contacto1, contacto2, contacto3, contacto4]);

    const borrarContacto = (contacto) => {
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos.splice(index, 1);
        setContactos(tempContactos);
    }

    const agregarContacto = (contacto) => {
        const tempContactos = [...contactos];
        tempContactos.push(contacto);
        setContactos(tempContactos);
    }

    return (
        <div>
            <div>
                <div>
                    <div>
                        <h2>Lista de contactos</h2>
                    </div>
                    <div style={{position:'relative', height: '400px'}}>
                        <h3 scope='col'>Contactos</h3>
                        <ol style={{textAlign:'initial'}} >
                            {contactos.map((contacto, index) => {
                                return (
                                    <ContactoComponent 
                                        key={index}
                                        contacto={contacto}
                                        mostrar={false}
                                        borrar={borrarContacto}
                                    >
                                    </ContactoComponent>
                                )
                            })}
                        </ol>
                    </div>
                </div>
            </div>
            {<ContactoForm agregar={agregarContacto}></ContactoForm>}
        </div>
    );
}

export default ContactoListComponent;
