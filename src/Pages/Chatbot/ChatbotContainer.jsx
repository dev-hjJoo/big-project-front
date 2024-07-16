import React, { useEffect, useState } from 'react';
import qs from 'qs'
import axios from 'axios'

import ChatbotPresenter from './ChatbotPresenter';
import { getCookie } from '../../Assets/CookieContainer';

const Chatbot = () => {
    // States
    const [sessionList, setSessionList] = useState([])
    const [selectedSessionID, setSessionID] = useState(-1)

    const [userInput, setUserInput] = useState('')
    const [chatLog, setChatLog] = useState([])


    // UseEffects
    useEffect( () => { // 해당 페이지 로딩되면 세션 리스트 호출
        getSessionListAPI()
        
    }, []);

    // Functions
    const loadUserInput = e => {
        setUserInput(e.target.value)
    }
    const onClickCreateNewSession = () => {
        createNewSessionAPI()        
    }
    const onClickRemoveSession = (session_id) => {
        removeSessionAPI(session_id)
    }
    const onClickConnectSession = (session_id) => {
        getSessionAPI(session_id)
    }

    const addContentToLocalChatLog = () => {
        setChatLog([ ...chatLog,
            {
                id: 2,
                sender: 1,
                message: userInput,
                send_at: Date.now().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
            }
        ])
        setUserInput('')
    }

    // AXIOS
    const getSessionListAPI = () => {
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
            setSessionList(response.data)
        })
    }

    const createNewSessionAPI = () => {
        axios({
            method: 'POST',
            url: 'http://34.64.89.168:8000/chatbot/sessions/new/',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getCookie('accessToken')}`
            },
        }).then((response) => {
            const result = response.data
            getSessionListAPI()
            getSessionAPI(result.session_id)
        })
    }

    const removeSessionAPI = (session_id) => {
        axios({
            method: 'DELETE',
            url: `http://34.64.89.168:8000/chatbot/sessions/${session_id}/`,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getCookie('accessToken')}`
            },
        }).then((response) => {
            getSessionListAPI()
            // return response.data
        })
    }

    const getSessionAPI = (session_id) => {
        axios({
            method: 'GET',
            url: `http://34.64.89.168:8000/chatbot/sessions/${session_id}/`,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getCookie('accessToken')}`
            },
        }).then((response) => {
            const result = response.data

            setSessionID(result.session_id)
            if (result.message == null || result.message.length == 0) {
                setChatLog([{
                    id: 0,
                    sender: 0,
                    message: "안녕하세요. 전세계 어디에서나 일하고 싶은 당신을 위한, 글로-발 워커입니다.\n질문할 내용이 있으신가요?",
                    send_at: new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
                }])
            } else {
                setChatLog(result.message)
            }
        })
    }



    return (
        <>
            <ChatbotPresenter sessionList={sessionList}
                              selectedSessionID={selectedSessionID}
                              onClickCreateNewSession={onClickCreateNewSession}
                              onClickRemoveSession={onClickRemoveSession}
                              onClickConnectSession={onClickConnectSession}
                              chatLog={chatLog} 
                              userInput={userInput} 
                              loadUserInput={loadUserInput} 
                              addContentToLocalChatLog={addContentToLocalChatLog} />
        </>
    );
};

export default Chatbot;