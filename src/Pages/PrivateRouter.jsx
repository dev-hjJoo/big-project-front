import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = ({userAccessToken}) => {
    return (userAccessToken != null) ? <Outlet /> : <Navigate to='/login'/>
    
};

export default PrivateRouter;