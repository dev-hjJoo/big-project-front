import React from 'react';
import getLoginState from '../Authorization/UserContainer';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
    const isLogin = getLoginState();

    return isLogin ? <Outlet /> : <Navigate to='/login'/>
    
};

export default PrivateRouter;