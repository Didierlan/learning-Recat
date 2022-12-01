import React from 'react';
import LoginFormik from '../../components/pure/forms/loginFormik';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {

    const history = useHistory(); 
    const goTasks = () => {
        history.push('/tasks')
    }
    

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <h1> Login page</h1>
            <LoginFormik></LoginFormik>
            <Button variant="contained" onClick={goTasks}>tasks</Button>
            <Button variant="contained" onClick={goBack}>Go to back</Button>



        </div>
    );
}

export default LoginPage;
