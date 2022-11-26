
import React, { useState }from 'react';

// tambin podemos crear estilos en contantes o importar nuestra hoja de styles
// ? Estilo para usuario logueado
const loggedStyle = {
    color: 'white'
};

// ? Estilo para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}



const GreetingStyles = (props) => {

    const [logeed, setLogeed] = useState(false);

    return (
        <div style={ logeed ? loggedStyle : unloggedStyle}>
        {logeed ? (<p>Hola {props.name}</p>) : (<p>Please Login</p>) }

        <button onClick={() => {
            setLogeed(!logeed)
        }}>
            { logeed ? 'Logout' : 'Login'}
        </button>

            
        </div>
    );
}

export default GreetingStyles;
