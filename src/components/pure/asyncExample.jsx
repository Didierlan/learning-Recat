import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const AsyncExample = () => {
    async function getNumber() {
        return 1;
    }

    function getNumberPromise() {
        return Promise.resolve(2)
    }

    function obtainNumber() {
        getNumber()
            .then((response) => alert(`Respuesta exitosa: ${response}`))
            .catch((error) => alert(`Ha ocurrido un error: ${error}`))
    }

    function obtainNumberPromise() {
        getNumberPromise()
            .then((response) => alert(`Respuesta exitosa: ${response}`))
            .catch((error) => alert(`Ha ocurrido un error: ${error}`))
    }

    async function saveLocalStorage(key, value) {
        localStorage.setItem(key, value);
        return Promise.resolve(localStorage.getItem(key));
    }

    function showLocalStorage() {
        saveLocalStorage('name', 'Pepe')
            .then((response) => alert(`Respuesta de localStorage: ${response}`))
            .catch((error) => alert(`Ha ocurrido un error: ${error}`))
    }

    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello Wold'), 2000);
        })

        let message = await promise;

        await alert(`Message received ${message}`)
    }



    const obtainError = async() => {
        await Promise.reject(new Error('Oooooops'))
    }

    const showError = () => {

        obtainError()
            .then((response) => alert(`Respuesta correcta:`))
            .catch((error) => alert(`Ha ocurrido un error: ${error}`))
            .finally(() => alert('se ha ejecutado el fanaly'))
    }






    return (
        <div>

            <Stack direction="row" spacing={2}>

                <Button onClick={obtainNumber} variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>

                <Button onClick={obtainNumberPromise} variant="contained" endIcon={<SendIcon />}>
                    Send_2
                </Button>

                <Button onClick={showLocalStorage} variant="contained" endIcon={<SendIcon />}>
                    localStorage
                </Button>


                <Button onClick={obtainMessage} variant="contained" endIcon={<SendIcon />}>
                    obtainMessage
                </Button>

                <Button onClick={showError} variant="contained" endIcon={<SendIcon />}>
                    obtainError
                </Button>

            </Stack>


        </div>
    );
}

export default AsyncExample;
