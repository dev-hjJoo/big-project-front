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


const Router = ({articles, userRefreshToken, setuserRefreshToken, setUserEmail}) => {


    return (        
        <Routes>
            <Route path='/' element={<HomeContainer articles={articles} />}/>
            <Route path='/login' element={<LoginContainer setuserRefreshToken={setuserRefreshToken}
                                                          setUserEmail={setUserEmail} />} />
            <Route path='/logout' element={<LogoutContainer userRefreshToken={userRefreshToken}
                                                            setuserRefreshToken={setuserRefreshToken}
                                                            setUserEmail={setUserEmail}/>} />
            <Route path='/join' element={<JoinContainer />} />
            <Route path='/chat' element={<Chatbot/>} />
            <Route path='/faq' element={<FAQContainer />} />
            <Route path='/db' element={<DBContainer />} />
            <Route path="/community/*" element={<BoardRouter />} />
            <Route path="/ocr" element={<OCRContainer />} />
            <Route path="/news/:id" element={<NewsDetail articles={articles} />}/>
        </Routes>
    );
};

export default Router;