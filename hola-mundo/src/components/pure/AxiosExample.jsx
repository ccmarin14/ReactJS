import React, { useEffect, useState } from 'react';
import { getRandomUser } from '../../services/axiosService';

const AxiosExample = () => {
    
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     obtainUSer()
    // }, []);

    const obtainUSer = () => {
        getRandomUser()
        .then((response) => {
            if(response.status === 200) {
                setUser(response.data.results[0])
            }
        })
        .catch((error) => {
            alert(`Something went wrong: ${error}`)
        })
    }
    
    return (
        <div>
            <h1>Axios Example</h1>
            { user != null ?
            (
                <div>
                    <img src={user.picture.large} alt="avatar" />
                    <h2>Name: {user.name.title} {user.name.first} {user.name.last}</h2>
                    <h3>Email: {user.email}</h3>
                </div>
            ):
            (
                <div>
                    <p>Generate a new user</p>
                    <button onClick={obtainUSer}>
                        Random user
                    </button>
                </div>
                
            )
            }
        </div>
    );
}

export default AxiosExample;
