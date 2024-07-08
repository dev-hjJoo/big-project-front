import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePresenter from './HomePresenter';
import LoginPresenter from '../../Pages/Login/LoginPresenter';
import JoinPresenter from '../../Pages/Join/JoinPresenter';
import CommunityPresenter from '../Commnunity/CommunityPresenter';
import Chatbot from '../Chatbot/ChatbotContainer';
import DBContainer from '../Admin/DBContainer';
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
            <Route path='/db' element={<DBContainer />} />
        </Routes>
    );
};

export default HomeContainer;