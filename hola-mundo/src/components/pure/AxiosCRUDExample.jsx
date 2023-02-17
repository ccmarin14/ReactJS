import React from 'react';
import { login } from '../../services/axiosCRUDService';

const AxiosCRUDExample = () => {
    
    const authUser = () => {
        login('eve.holt@reqres.in','cityslicka')
            .then((response) => {
                if (response.data.token) {
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem('token', response.data.token);
                } else {
                    sessionStorage.removeItem('token');
                    throw new Error('Login Failure');
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`);
                sessionStorage.removeItem('token');
            })
            .finally(() => console.log('Login done'))
    }
    
    return (
        <div>
            <button onClick={authUser}>
                Login
            </button>
        </div>
    );
}

export default AxiosCRUDExample;
