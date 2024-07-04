import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePresenter from './HomePresenter';
import LoginPresenter from '../../Pages/Login/LoginPresenter';
import JoinPresenter from '../../Pages/Join/JoinPresenter';
import CommunityPresenter from '../Commnunity/CommunityPresenter';
import Chatbot from '../Chatbot/ChatbotContainer';
import DBPresenter from '../Admin/DBPresenter';
import FAQPresenter from '../FAQ/FAQPresenter';


const HomeContainer = () => {
    return (        
        <Routes>
            <Route path='/' element={<HomePresenter />} />
            <Route path='/login' element={<LoginPresenter />} />
            <Route path='/join' element={<JoinPresenter />} />
            <Route path='/chat' element={<Chatbot/>} />
            <Route path='/faq' element={<FAQPresenter />} />
            <Route path='/community' element={<CommunityPresenter />} />
            <Route path='/db' element={<DBPresenter />} />
        </Routes>
    );
};

export default HomeContainer;