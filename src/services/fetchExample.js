import { async } from "rxjs";

//Metodos HTTP GET para optener informacion de una api-rest
export const getAllUsers = async () => {
    let result = await fetch('https://reqres.in/api/users');
    console.log("resultado ", result)
    return result.json()
}

export const getAllPagedUsers = async (page) => {
    let result = await fetch(`https://reqres.in/api/users?page=${page}`);
    console.log("resultado ", result)
    return result.json()
}

export const getDetailsUsers = async (id) => {
    let result = await fetch(`https://reqres.in/api/users/${id}`);
    console.log("resultado ", result)
    return result.json()
}


//Metodos HTTP POST para enviar informacion a una api-rest

export const login = async (email, password) => {

    let body = {
        email,
        password,
    }

    let result = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        // mode: 'no-cors',
        // credentials: "omit",
        // cache: 'no-cache',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)


    });

    console.log("resultado ", result)
    return result.json();

}