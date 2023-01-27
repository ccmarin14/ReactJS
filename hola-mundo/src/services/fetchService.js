export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users');
    console.log('Response', response);
    //We return the JSON
    return response.json();
}