import React , { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    const [age, setage] = useState(18);

    const birthday = () => {
        setage(age +1)
    }
    return (
        <div>
            <h1>Hola {props.name} desde Componente funcional</h1>
            <h2>Tu edad es {age}</h2>
            <div>
                <button onClick={birthday}>Incremet Years</button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,

};


export default GreetingF;
