import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = ({userAccessToken}) => {
    return (userAccessToken != null) ? <Outlet /> : <Navigate to='/login'/>
    
};

export default PrivateRouter;