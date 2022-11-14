import React, { useState, useEffect } from 'react'
import '../../styles/clock.scss';

export const ClockHook = () => {

   const [fecha, setFecha] = useState(new Date());
   const [edad, setEdad] = useState(0);
   const [nombre, setNombre] = useState('Cristian');
   const [apellidos, setApellidos] = useState('Marin Florez');

   let timerId;

   const tick = () => {
      setEdad(edad +1);
      setFecha(new Date());
   }

   //ComponentDidMount
   useEffect(() => {
      timerId = setInterval (
         () => tick(), 1000
      );
   }, [fecha]);

   //componentWillUnmount
   useEffect(() => {
      return () => {
         clearInterval(timerId);
      }
   },[fecha]);

   return (
      <div>
         <h2>Hora Actual: {fecha.toLocaleTimeString()}</h2>
         <h3>{nombre} {apellidos}</h3>
         <h1>Edad: {edad}</h1>
      </div>
   );
}
