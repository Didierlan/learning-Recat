import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Esto es en clases y se utilizaba antes ahora se utiliza en funciones

class Greeting extends Component {

    constructor(props){
        super(props); 
        this.state =  {
            age:18
        }

    }


    render() {
        return (
            <div>
            <h1>Hola {this.props.name}</h1>
            <h2>Tu edad es {this.state.age}</h2>

            <div>
                <button onClick={this.birthday}>Incremet Years</button>
            </div>
            </div>
        );
    }

    birthday = () => {
        this.setState(prevState => ({age: prevState.age +1}))
    }
}


Greeting.propTypes = {

    name: PropTypes.string,

};


export default Greeting;
