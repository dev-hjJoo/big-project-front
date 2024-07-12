import React from 'react';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import BoardList from './BoardList';
import BoardDetail from './BoardDetail';
import BoardWrite from './BoardWrite';

const BoardRouter = () => {
    return (
        <>
            <Link to='/community'>
                <div className='Board-Head'>
                    <h1>Community</h1>
                </div>
            </Link>
            
            <Routes>
                <Route path="/" element={<Navigate to="list" />} />
                <Route path='list' element={<BoardList/>} />
                <Route path='write' element={<BoardWrite/>} />
                <Route path='detail/:id' element={<BoardDetail/>} />
            </Routes> 
        </>
    );
};

export default BoardRouter;