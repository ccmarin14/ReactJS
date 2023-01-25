import React from 'react';

const AsyncExample = () => {

    async function generateNumber() {
        return 1;
    }

    function obtainNumber() {
        generateNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`));
    }

    async function generatePromiseNumber() {
        return Promise.resolve(2);
    }

    function obtainPromiseNumber() {
        generatePromiseNumber()
        .then((response) => alert(`Response: ${response}`))
        .catch((error) => alert(`Something went wrong: ${error}`));
    }

    async function saveSessionStorage(key,value) {
        sessionStorage.setItem(key,value);

        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage() {
        saveSessionStorage('name','Cristian')
        .then((response) => {
            let value = response;
            alert(`Saved name: ${value}`);
        })
        .catch((error) => {
            alert(`Something went wrong: ${error}`)
        })
        .finally(() => console.log('SUCCESS: Name saved and retreived'))
    }

    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello World'), 2000);
        });
    
    let message = await promise;

    await alert(`Message recived: ${message}`)
    }

    const returnError = async() => {
        await Promise.reject(new Error('Ooooops!'));
    }

    const consumeError = () => {
        returnError()
            .then((response) => alert(`Everything is OK: ${response}`))
            .catch((error) => alert(`Something went wrong ${error}`)) 
            .finally(() => alert('Finally executed'))
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidURL');
            alert(`Response: ${JSON.stringify(response)}`);
        } catch (error) {
            alert(`Something went wrong with your URL: ${error}(Check console)`)
        }
    }

    const multiplePromise = async () => {
        let result = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch((error) => alert(`Something went wrong with your URL's ${error} (check your console)`));
    }


    return (
        <div>
            <h1>Async, Promise examples</h1>
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainPromiseNumber}>Obtain Promise Number</button>
            <button onClick={showStorage}>Save name and show</button>
            <button onClick={obtainMessage}>Receive messages in 2 seconds</button>
            <button onClick={consumeError}>Obtain Error</button>
            <button onClick={urlNotFound}>Request to unknow URL</button>
            <button onClick={multiplePromise}>Multiple Promises</button>
        </div>
    );
}

export default AsyncExample;
