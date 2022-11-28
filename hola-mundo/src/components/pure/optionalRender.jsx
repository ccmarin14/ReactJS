import React, { useState } from 'react';

// ? Estilo para usuario logueado
const loggedStyle = {
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold'
}

// ? Estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}



// Login / Logout buttons

const LoginButton = ({loginAction}) => {
    return (
        <button style={loggedStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction}) => {
    return (
        <button style={unloggedStyle} onClick={logoutAction}>Logout</button>
    )
}

// ? (Expresión true) && expresión => se renderiza la expresión
// ? (Expresión false) && expresión => no se renderiza la expresión

const OptionalRender = () => {
    
    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);
    
    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    let optionalButton;


    if (access) {
        optionalButton = <LogoutButton logoutAction={logoutAction}></LogoutButton>
    } else {
        optionalButton = <LoginButton loginAction={loginAction}></LoginButton>
    }

    // Unread Message
    let addMessage = () => {
        setNMessages(nMessages + 1);
    }

    return (
        <div>
            {/* Optional Button */}
            { optionalButton }
            {access ? (
                <div>
                    {nMessages > 0 ?
                        <p>You have {nMessages} new message{nMessages > 1 ? 's' : null}... </p> :
                        <p>There are no new messages </p>
                    }
                    <button onClick={addMessage}>{nMessages === 0 ? 'Add your first Message' : 'Add new Message'}</button>
                </div>
            ) :
                null
            }
        </div>
    );
}

export default OptionalRender;
