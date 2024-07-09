import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeContainer from './Home/HomeContainer';
import LoginPresenter from './Login/LoginPresenter';
import JoinPresenter from './Login/JoinPresenter';
import Chatbot from './Chatbot/ChatbotContainer';
import FAQContainer from './FAQ/FAQContainer';
import DBContainer from './Admin/AdminContainer';
import CommunityPresenter from './Commnunity/CommunityPresenter';



const Router = () => {


    return (        
        <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='/login' element={<LoginPresenter />} />
            <Route path='/join' element={<JoinPresenter />} />
            <Route path='/chat' element={<Chatbot/>} />
            <Route path='/faq' element={<FAQContainer />} />
            <Route path='/community' element={<CommunityPresenter />} />
            <Route path='/db' element={<DBContainer />} />
        </Routes>
    );
};

export default Router;