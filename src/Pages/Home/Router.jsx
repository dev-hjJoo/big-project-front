import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import LoginPresenter from '../Login/LoginPresenter';
import JoinPresenter from '../Login/JoinPresenter';
import CommunityPresenter from '../Commnunity/CommunityPresenter';
import Chatbot from '../Chatbot/ChatbotContainer';
import DBPresenter from '../Admin/DBPresenter';
import FAQPresenter from '../FAQ/FAQPresenter';



const Router = () => {


    return (        
        <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='/login' element={<LoginPresenter />} />
            <Route path='/join' element={<JoinPresenter />} />
            <Route path='/chat' element={<Chatbot/>} />
            <Route path='/faq' element={<FAQPresenter />} />
            <Route path='/community' element={<CommunityPresenter />} />
            <Route path='/db' element={<DBPresenter />} />
        </Routes>
    );
};

export default Router;