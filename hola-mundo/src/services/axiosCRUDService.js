import axios from "axios";

/**
 * Login Method to ReqRes endpoint
 * @param { string } email 
 * @param { string } password 
*/

export const login = (email, password) => {

    let body = {
        email: email,
        password: password
    }

    // Returns the response with a Promise
    return axios.post('https://reqres.in/api/login',body)
}

// Obtain all users
    export const getAllUsers = () => {
        return axios.get('https://reqres.in/api/users')
    }

// Obtain all paged users

    export const getAllPagedUsers = (page) => {
        return axios.get(`https://reqres.in/api/users?page=${page}`)
    }

// TODO Obtain user by id

// TODO Create user

// TODO Update user

// TODO Delete user

