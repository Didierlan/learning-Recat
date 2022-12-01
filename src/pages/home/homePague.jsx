import React from 'react';
import { useLocation, useHistory } from 'react-router-dom'

const HomePague = () => {

    const location = useLocation();
    const history = useHistory();

    const navigateProps = (path) => {
        history.push({
            pathname: path,
            search: '?online= true',
            state: {
                online: true
            }

        });


    }

    const navigateTo = (path) => {
        history.push(path);
    }

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <h1> Home page </h1>
            <button onClick={() => navigateProps('/state-online')}>
                Go To Page with State / Query Params
            </button>

            <button onClick={() => navigateTo('/profile')}>  go to profile</button>
        </div>
    );
}

export default HomePague;
