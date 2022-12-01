import React from 'react';
import LoginFormik from '../../components/pure/forms/loginFormik';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {

    const history = useHistory(); 
    const goTasks = () => {
        history.push('/tasks')
    }
    return (
        <div>
            <h1> Login page</h1>
            <LoginFormik></LoginFormik>
            <Button variant="contained" onClick={goTasks}>tasks</Button>
        </div>
    );
}

export default LoginPage;
