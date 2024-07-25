import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const OnlyBeforeLoginRouter = ({userAccessToken}) => {
    const navigate = useNavigate()
    return (userAccessToken == null) ? <Outlet /> : navigate(-1)
};

export default OnlyBeforeLoginRouter;