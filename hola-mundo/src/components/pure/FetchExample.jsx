import { cleanup } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

import { getAllPagedUsers, getAllUsers } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(12);
    const [pages, setPages] = useState(2);
    const [usersPerPage, setUsersPerPage] = useState(6);

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
        getAllPagedUsers(pages)
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
    
    
    return (
        <div>
            <h2>
                Users:
            </h2>
            { users.map((user,index) => (
                <p key={index}>
                    {user.first_name} {user.last_name}
                </p>
            ))}
            <p>Showing {usersPerPage} users of {totalUsers}</p>
            <button onClick={() => {obtainPageUsers(1)}}>1</button>
            <button onClick={() => {obtainPageUsers(2)}}>2</button>
        </div>
    );
}

export default FetchExample;
