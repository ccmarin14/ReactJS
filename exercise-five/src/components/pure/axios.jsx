import React, { useEffect, useState } from 'react';
import { getRandomJokes } from '../../services/axiosService';
import Voter from '../pure/voter';


const AxiosNorris = () => {
    
    const [joke, setJoke] = useState(null);

    const obtainJokes = () => {
        getRandomJokes()
        .then((response) => {
            setJoke(response.data.value);
        })
        .catch((error) => {
            alert(`Something went wrong: ${error}`)
        })
    }
    
    return (
        <div>
            <br />
            <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt="Chuck Norris" width="250px" height="100px"/>
            <h1>Chuck Norris Jokes</h1>
            { joke != null ?
            (
                <div>
                    {<h2>{joke}</h2>}
                </div>
            ):
            (
                <div>
                    <p>Required new Joke</p>
                </div>
                
            )
            }
            <button onClick={obtainJokes}>
                Random Jokes
            </button>
            <br />
            <br />
            <Voter></Voter>
        </div>
    );
}

export default AxiosNorris;
