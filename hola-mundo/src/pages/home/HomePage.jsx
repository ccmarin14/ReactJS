import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {

    const location = useLocation();
    const history = useNavigate();
  
    console.log('We are in Router:', location.pathname);
  
    const navigate = (path) => {
      history(path);
    }
  

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Dashboard</h2>
            <button onClick={() => {navigate('/profile')}}>Go to Profile</button>
        </div>
    );
}

export default HomePage;
