import React, { useEffect, useState } from 'react';
import qs from 'qs'
import axios from 'axios'

import ChatbotPresenter from './ChatbotPresenter';
import { getCookie } from '../../Assets/CookieContainer';

const Chatbot = () => {
    // States
    const [sessionList, setSessionList] = useState([])
    const [selectedSessionNo, setSessionNo] = useState(0)

    const [userInput, setUserInput] = useState('')
    const [chatLog, setChatLog] = useState([{
        id: 1,
        speaker: "BOT",
        content: "안녕하세요. 전세계 어디에서나 일하고 싶은 당신을 위한, 글로-발 워커입니다.\n질문할 내용이 있으신가요?",
        datetime: "2024/07/02 16:36"
    },])

    // Functions
    const loadUserInput = e => {
        setUserInput(e.target.value)
    }

    const addContentToLocalChatLog = () => {
        setChatLog([ ...chatLog,
            {
                id: 2,
                speaker: "USER",
                content: userInput,
                datetime: Date.now().toLocaleString()
            }
        ])
        setUserInput('')
    }

    // 해당 페이지 로딩되면 세션 리스트 호출
    useEffect( () => {
        const data = getSessionList()
        setSessionList(data)
    }, []);


    const getSessionList = () => {
        axios({
            method: 'GET',
            url: 'http://34.64.89.168:8000/chatbot/sessions/',
            data: qs.stringify({
                user_no: 1,
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getCookie('accessToken')}`
            },
        }).then((response) => {
            console.log('1', response.data)
            return response.data
        })
    }

    return (
        <>
            <ChatbotPresenter sessionList={sessionList}
                              selectedSessionNo={selectedSessionNo}
                              chatLog={chatLog} 
                              userInput={userInput} 
                              loadUserInput={loadUserInput} 
                              addContentToLocalChatLog={addContentToLocalChatLog} />
        </>
    );
};

export default Chatbot;