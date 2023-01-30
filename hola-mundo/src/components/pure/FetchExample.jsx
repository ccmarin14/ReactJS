import { cleanup } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

import { getAllPagedUsers, getAllUsers, getUserDetails } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(12);
    const [pages, setPages] = useState(2);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [selectedUser, setSelectedUser] = useState();

    useEffect(() => {
        obtainUsers();
    }, [])
    
    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log('All Users', response.data);
                setUsers(response.data);
                setPages(response.total_pages);
                setTotalUsers(response.total);
                setUsersPerPage(response.per_page);
            })
            .catch((error) => {
                alert(`Error while retreiving the users: ${error}`);
            })
            .finally(() => {
                console.log('Ended obtaining users:');
                console.table(users);
            })
    }

    const obtainPageUsers = (page) => {
        getAllPagedUsers(page)
        .then((response) => {
            console.log('All Paged Users', response.data);
            setUsers(response.data);
            setPages(response.total_pages);
            setTotalUsers(response.total);
            setUsersPerPage(response.per_page);
        })
        .catch((error) => {
            alert(`Error while retreiving the users: ${error}`);
        })
        .finally(() => {
            console.log('Ended obtaining users:');
            console.table(users);
        })
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
        .then((response) => {
            console.log('All Paged Users', response.data);
            setSelectedUser(response.data);
        })
        .catch((error) => {
            alert(`Error while retreiving the user: ${error}`);
        })
        .finally(() => {
            console.log('Ended obtaining user:');
            console.table(selectedUser);
        })
    }
    
    
    return (
        <div>
            <h2>
                Users:
            </h2>
            { users.map((user,index) => (
                <p key={index} onClick={() => {obtainUserDetails(user.id)}}>
                    {user.first_name} {user.last_name}
                </p>
            ))}
            <p>Showing {usersPerPage} users of {totalUsers} in total.</p>
            <button onClick={() => {obtainPageUsers(1)}}>1</button>
            <button onClick={() => {obtainPageUsers(2)}}>2</button>
            <div>
                <h3>User Details</h3>
                { selectedUser && (
                    <div>
                        <p>Name: { selectedUser.first_name }</p>
                        <p>Last name: { selectedUser.last_name }</p>
                        <p>Email: { selectedUser.email }</p>
                        <img src={ selectedUser.avatar } style={{ height:'50px', width:'50px' }} alt="Avatar" />
                    </div>
                ) }
            </div>
        </div>
    );
}

export default FetchExample;
