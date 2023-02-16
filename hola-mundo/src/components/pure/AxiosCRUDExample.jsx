import React from 'react';
import { login } from '../../services/axiosCRUDService';

const AxiosCRUDExample = () => {
    
    const authUser = () => {
        login('eve.holt@reqres.in','cityslicka')
            .then((response) => {
                alert(JSON.stringify(response.data))
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
            .finally(() => console.log('Login done'))
    }
    
    return (
        <div>
            <button>
                Login
            </button>
        </div>
    );
}

export default AxiosCRUDExample;
