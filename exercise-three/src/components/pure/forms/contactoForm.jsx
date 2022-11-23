import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../models/contacto.class';

const ContactoForm = ({agregar}) => {

    const nombreRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');
    const estadoRef = useRef(false);

    const agregarContacto = (e) => {
        e.preventDefault();
        const newContacto = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            estadoRef.current.value
        );
        agregar(newContacto);
    }


    return (
        <form onSubmit={agregarContacto} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input 
                    id='inputNombre'
                    className='form-control form-lg' 
                    required autoFocus 
                    placeholder='Nombre(s)' 
                    type="text"
                    ref={nombreRef}
                />
                <input 
                    id='inputApellido'
                    className='form-control form-lg' 
                    placeholder='Apellido(s)' 
                    type="text"
                    ref={apellidoRef}
                />
                <input 
                    id='inputEmail'
                    className='form-control form-lg' 
                    placeholder='Correo electronico' 
                    type="email"
                    ref={emailRef}
                />
                <label htmlFor='selectEstado' className='sr-only'>Estado</label>
                <select ref={estadoRef} defaultValue={false} id="selectEstado">
                    <option value={true}>
                            Conectado en linea
                    </option>
                    <option value={false}>
                            Conectado no disponible
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
            </div>
        </form>
    );
}

ContactoForm.propTypes = { 
    agregar: PropTypes.func.isRequired,
}

export default ContactoForm;
