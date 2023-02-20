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
    return axios.get('https://reqres.in/api/users');
}

// Obtain all paged users
export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`);
}

// Obtain user by id
export const getUsersByID = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`);
}

// Create user
export const createUser = (name, job) => {
    let body = {
        name: name,
        job: job
    }

    // Returns the response with a Promise
    return axios.post('https://reqres.in/api/users',body);
}

// TODO Update user

// TODO Delete user

