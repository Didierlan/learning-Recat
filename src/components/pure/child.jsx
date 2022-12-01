
import React, { useRef } from 'react';

const Child = ({ name, send , update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('');


    function pressButton() {

        alert('Text defauly not trowble')
    }

    function pressButtonParams(text) {
        alert(`text ${text}`)
    }

    function submitName(e){
        e.preventDefault(); 
        update(nameRef.current.value)
    }
    return (
        <div style={{ background: 'gray', padding: '20px' }}>
            <p style={{ color: 'white' }} onMouseOver={() => console.log('On mouse hover')}>Hello {name} </p>
            <button onClick={() => console.log('Boton  1')}> Boton 1 </button>

            <button onClick={pressButton}> button 2 </button>

            {/* debemos yamar a una funcion que recibe parametros por mnedio de un 
funcion anonima para asi evitar que el eevento se ejecute al 
renderizar la aplicacion */}
            <button onClick={() => pressButtonParams('Hola chavas')}> Boton 2 </button>

            <input
                placeholder='Send a text to your father'
                onFocus={() => console.log('Input Focused')}
                onChange={(e) => console.log('Input changed:', e.target.value)}
                onCopy={() => console.log('Copied text from Input')}
                ref={messageRef}
            />

            <button onClick={() => send(messageRef.current.value)}> sendMessageFathe </button>

            <div style={{ marginTop: '20px' }}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New Name' />
                    <button type='submit'>Update Name</button>
                </form>

            </div>




        </div>
    );
}

export default Child;
