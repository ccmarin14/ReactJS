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



    return (
        <div>
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainPromiseNumber}>Obtain Promise Number</button>
        </div>
    );
}

export default AsyncExample;
