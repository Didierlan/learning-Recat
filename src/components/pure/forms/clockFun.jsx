import React , { useState, useEffect}from 'react';

const ClockFun = () => {

    const [state, setState] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: 'Didier',
        apellidos: 'Niño'
    });

    useEffect(() => {
        const timerId = setInterval(() => {
            tick()
        }, 1000);
        return () => {
            clearInterval (timerId);
        };
    }, []);

    return (
        <div>
        <h2>
        Hora Actual:
        {state.fecha.toLocaleTimeString()}
        </h2>
        <h3>{state.nombre} {state.apellidos}</h3>
        <h1>Edad: {state.edad}</h1>
        </div>
    );




    function tick() {

        setState((prevState) => {
            // let edad = prevState.edad +1;
            return {
               ...prevState,
               fecha: new Date(),
               edad : prevState.edad + 1
               
            }
         })
    }

}

export default ClockFun;
