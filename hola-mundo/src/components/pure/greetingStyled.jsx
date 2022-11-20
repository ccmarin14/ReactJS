import React, { useState } from 'react';

//Definidiendo estilos en constantes:

// ? Estilo para usuario logueado
const loggedStyle = {
    color: 'white'
}

// ? Estilo para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {
    
    // Generamos un estado para el compomente
    // y así controlar si el usuario está no logueado
    const [logged, setLogged] = useState(false);

    const greetingUser = (<p>Hola, {props.name}</p>);
    const pleaseLogin = (<p>Please login</p>);
    
    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            {logged ? 
                greetingUser
                : 
                pleaseLogin
            }
            <button onClick={() => {
                console.log('Botón pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login'}
            </button>
            
        </div>
    );
}

export default GreetingStyled;
