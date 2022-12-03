import React, { useState, useEffect } from 'react';
import getRamdomUser from '../../services/axiosService';

const AxiosExample = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        obtainUser()
    }, []);

    const obtainUser = () => {
        getRamdomUser()
        .then(response => {
            if (response.status === 200) {
                console.log(response.data.results)
                setUser(response.data.results[0])
            }

        })
        .catch(error => {
            alert(`Somethin went wrong: ${error}`);
        })
    }





    return (
        <div>
            <h1>Axios Example</h1>

            {user !== null ?
                (
                    <div>
                        <img alt='avatar' src={user.picture.large} />
                        <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                        <h3>{user.email}</h3>
                    </div>
                )
                : null}



                <div>
                    <h3>Generate user ramdom</h3>
                    <button onClick={obtainUser}>obtain</button>
                </div>


        </div>
    );
}

export default AxiosExample;
