import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';
import Copyright from '../../components/pure/Copyright';


const DashBoardPage = () => {

    const navigate = useNavigate();

    const logout = () => {
        navigate('/login');
    }

    return (
        <div>
            <Button variant="contained" onClick={logout}>Logout</Button>
            <Copyright></Copyright>
        </div>
    );
}

export default DashBoardPage;
