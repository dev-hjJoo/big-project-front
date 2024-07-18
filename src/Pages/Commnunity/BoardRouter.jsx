import React from 'react';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import BoardList from './BoardList';
import BoardDetail from './BoardDetail';
import BoardWriteContainer from './BoardWriteContainer';

const BoardRouter = ({userAccessToken}) => {
    return (
        <>
            <Link to='/community'>
                <div className='Board-Head'>
                    <h1>Community</h1>
                </div>
            </Link>
            
            <Routes>
                <Route path="/" element={<Navigate to="list" />} />
                <Route path='list' element={<BoardList userAccessToken={userAccessToken}/>} />
                <Route path='write' element={<BoardWriteContainer userAccessToken={userAccessToken}/>} />
                <Route path='detail/:id' element={<BoardDetail userAccessToken={userAccessToken}/>} />
            </Routes> 
        </>
    );
};

export default BoardRouter;