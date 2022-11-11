/**
 * Ejemplo de uos de :
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

        //Vamos a crear dos contadores distintos
    //cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRed() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)

    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    /**
     * Trabajando con UseEffect
     */

    /**
     * ? Caso 1: Ejecutar Siempre un snippet de código
     * Cada vez que haya un cambio en el estado del componenete
     * se ejecuta aquello que esté dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando referencia a elemento del DOM:');
    //     console.log(miRef);
    // });

    /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1
     * Cada vez que haya un cambio en el contador1, se ejecuta lo que diga el useEffect()
     * En caso de que cambie contador2, no habrá ejecución
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
    //     console.log('Mostrando referencia a elemento del DOM:');
    //     console.log(miRef);
    // }, [contador1]);

    /**
     * ? Caso 3: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1 o CONTADOR2
     * Cada vez que haya un cambio en el contador1, se ejecuta lo que diga el useEffect()
     * Cada vez que haya un cambio en el contador2, se ejecuta lo que diga el useEffect()
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
        console.log('Mostrando referencia a elemento del DOM:');
        console.log(miRef);
    }, [contador1, contador2]);

    /**
     * ? Caso 3: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1 o CONTADOR2
     * Cada vez que haya un cambio en el contador1, se ejecuta lo que diga el useEffect()
     * Cada vez que haya un cambio en el contador2, se ejecuta lo que diga el useEffect()
     */

     useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2');
        console.log('Mostrando referencia a elemento del DOM:');
        console.log(miRef);
    }, [contador1, contador2]);

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
            {/* Botones para cambiar los contadores */}
            <button onClick={incrementar1}>Incrementar contador 1</button>
            <button onClick={incrementar2}>Incrementar contador 2</button>
        </div>
    );
}

export default Ejemplo2;
