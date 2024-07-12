import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeContainer from './Home/HomeContainer';
import LoginPresenter from './Login/LoginPresenter';
import JoinPresenter from './Login/JoinPresenter';
import Chatbot from './Chatbot/ChatbotContainer';
import FAQContainer from './FAQ/FAQContainer';
import DBContainer from './Admin/AdminContainer';
import BoardDetail from './Commnunity/BoardDetail';
import BoardList from './Commnunity/BoardList';
import BoardWrite from './Commnunity/BoardWrite';
import NewsDetail from './Home/NewsDetail';

const Router = () => {


    return (        
        <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='/login' element={<LoginPresenter />} />
            <Route path='/join' element={<JoinPresenter />} />
            <Route path='/chat' element={<Chatbot/>} />
            <Route path='/faq' element={<FAQContainer />} />
            <Route path='/db' element={<DBContainer />} />
            <Route path="/community/list" element={<BoardList />} />
            <Route path="/community/write" element={<BoardWrite />} />
            <Route path="/community/detail/:id" element={<BoardDetail />} />
            <Route path="/news/:id" element={<NewsDetail />} />
        </Routes>
    );
};

export default Router;