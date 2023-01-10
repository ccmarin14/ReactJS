import React from 'react'

import { useNavigate } from 'react-router-dom';

export default function ProfilePage({user}) {
  
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
  
    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={ goBack }>Go Back</button>
            <button onClick={ () => { navigate('/tasks') }}>Task</button>
        </div>
    )
}
