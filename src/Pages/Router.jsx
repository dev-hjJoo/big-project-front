import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeContainer from './Home/HomeContainer';
import Chatbot from './Chatbot/ChatbotContainer';
import FAQContainer from './FAQ/FAQContainer';
import DBContainer from './Admin/AdminContainer';
import OCRContainer from './OCR/OCRContainer';
import BoardRouter from './Commnunity/BoardRouter';
import NewsDetail from './Home/NewsDetail';
import JoinContainer from './Login/JoinContainer';
import LoginContainer from './Login/LoginContainer';
import LogoutContainer from './Login/LogoutContainer';
import { getCookie } from '../Authorization/CookieContainer';
import PrivateRouter from './PrivateRouter';


const Router = ({articles, userAccessToken, setUserAccessToken, setUserEmail, selectedNation}) => {


    return (
        <Routes>
            {/* Public */}
            <Route path='/' element={<HomeContainer articles={articles} />}/>
            <Route path='/login' element={<LoginContainer setUserAccessToken={setUserAccessToken}
                                                          setUserEmail={setUserEmail} />} />
            <Route path='/join' element={<JoinContainer />} />
            <Route path="/news/:id" element={<NewsDetail articles={articles} />}/>

            {/* Private */}
            <Route element={<PrivateRouter userAccessToken={userAccessToken}/>}>
                <Route path='/logout' element={<LogoutContainer userAccessToken={userAccessToken}
                                                                setUserAccessToken={setUserAccessToken}
                                                                setUserEmail={setUserEmail}/>} />
                <Route path='/chat' element={<Chatbot userAccessToken={userAccessToken} selectedNation={selectedNation}/>} />
                <Route path='/faq' element={<FAQContainer userAccessToken={userAccessToken} />} />   
                <Route path='/db' element={<DBContainer userAccessToken={userAccessToken} />} />
                <Route path="/community/*" element={<BoardRouter userAccessToken={userAccessToken} />} />
                <Route path="/ocr" element={<OCRContainer userAccessToken={userAccessToken} />} />
            </Route>
        </Routes>);
};

export default Router;