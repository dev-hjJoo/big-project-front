import React, { useEffect, useState } from 'react';
import qs from 'qs'
import axios from 'axios'
import Modal from 'react-modal';

import ChatbotPresenter from './ChatbotPresenter';
import { getCookie } from '../../Authorization/CookieContainer';

const Chatbot = ({ userAccessToken, selectedNation = 'korea' }) => {
    // States
    const [sessionList, setSessionList] = useState([])
    const [selectedSessionID, setSessionID] = useState(-1)

    const [userInput, setUserInput] = useState('')
    const [chatLog, setChatLog] = useState([])

    const [writingMode, setWritingMode] = useState(true)
    const [caseResults, setCaseResults] = useState([]) 

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

    // UseEffects
    useEffect( () => { // 해당 페이지 로딩되면 세션 리스트 호출
        getSessionListAPI()
    
    }, []);

    useEffect(() => { // accessToken 업데이트 시 세션 리스트 호출
        getSessionListAPI()
    }, [userAccessToken])

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

    const onClickSubmitChat = () => {
        getChatAPI()
    }

    const onClickSearchCase = (currentMessageId) => {
        const currentMessageIndex = chatLog.findIndex(message => message.id === currentMessageId);
        if (currentMessageIndex > 0) {
            const queryMessage = chatLog.slice(0, currentMessageIndex).reverse().find(message => message.sender === 1);
            if (queryMessage) {
                searchCaseAPI(queryMessage.message);
            }
        }
    };
    
    const handleNextCase = () => {
        if (currentCaseIndex < caseResults.length - 1) {
            setCurrentCaseIndex(currentCaseIndex + 1);
            document.querySelector('.ReactModal__Content').scrollTop = 0;
        }
    };

    const handlePreviousCase = () => {
        if (currentCaseIndex > 0) {
            setCurrentCaseIndex(currentCaseIndex - 1);
            document.querySelector('.ReactModal__Content').scrollTop = 0;
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentCaseIndex(0);
    };

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
        if (userAccessToken != null) {
            axios({
                method: 'GET',
                url: 'http://34.64.89.168:8000/chatbot/sessions/',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${userAccessToken}`
                },
            }).then((response) => {
                setSessionList(response.data)
            })
        }

    }

    const createNewSessionAPI = () => {
        if (userAccessToken != null) {
            axios({
                method: 'POST',
                url: 'http://34.64.89.168:8000/chatbot/sessions/new/',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${userAccessToken}`
                },
            }).then((response) => {
                const result = response.data
                getSessionListAPI()
                getSessionAPI(result.session_id)
            })
        }
    }

    const removeSessionAPI = (session_id) => {
        if (userAccessToken != null) {
            axios({
                method: 'DELETE',
                url: `http://34.64.89.168:8000/chatbot/sessions/${session_id}/`,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${userAccessToken}`
                },
            }).then((response) => {
                getSessionListAPI()
                // return response.data
            })
        }
    }

    const getSessionAPI = (session_id) => {
        if (userAccessToken != null) {
            axios({
                method: 'GET',
                url: `http://34.64.89.168:8000/chatbot/sessions/${session_id}/`,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${userAccessToken}`
                },
            }).then((response) => {
                const result = response.data

                setSessionID(result.session_id)
                if (result.messages == null || result.messages.length == 0) {
                    setChatLog([{
                        id: 0,
                        sender: 0,
                        message: "안녕하세요. 전세계 어디에서나 일하고 싶은 당신을 위한, 글로-발 워커입니다.\n질문할 내용이 있으신가요?",
                        send_at: new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' })
                    }])
                } else {
                    setChatLog(result.messages)
                }
            })
        }
    }

    const getChatAPI = () => {
        setWritingMode(false)
        if (userAccessToken != null) {
            axios({
                method: 'POST',
                url: `http://34.64.89.168:8000/chatbot/chat/`,
                data: qs.stringify({
                    session_id: selectedSessionID,
                    query: userInput,
                    nation: selectedNation
                }),
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${userAccessToken}`
                },
            }).then((response) => {
                const result = response.data
                getSessionAPI(selectedSessionID)
                setUserInput('')
                setWritingMode(true)
            })
        }
    }

    const searchCaseAPI = (query) => {
        if (userAccessToken != null) {
            axios({
                method: 'POST',
                url: 'http://34.64.89.168:8000/chatbot/chat/precedent/',
                data: qs.stringify({ query }), 
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${userAccessToken}`
                },
            }).then((response) => {
                setCaseResults(response.data.case_results); 
                setIsModalOpen(true); 
            });
        }
    };
    

    return (
        <>
            <ChatbotPresenter
                sessionList={sessionList}
                selectedSessionID={selectedSessionID}
                onClickCreateNewSession={onClickCreateNewSession}
                onClickRemoveSession={onClickRemoveSession}
                onClickConnectSession={onClickConnectSession}
                onClickSubmitChat={onClickSubmitChat}
                onClickSearchCase={onClickSearchCase}
                chatLog={chatLog}
                userInput={userInput}
                loadUserInput={loadUserInput}
                writingMode={writingMode}
                caseResults={caseResults}
            />

<Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="판례 사례 모달"
                ariaHideApp={false}
                style={{
                    content: {
                        maxWidth: '60%',
                        maxHeight : '80%',
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        overflowY: 'auto'
                    }
                }}
            >
                <button 
                    onClick={closeModal} 
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.2rem',
                        cursor: 'pointer'
                    }}
                >
                    &times;
                </button>
                <h2>판례 사례 {currentCaseIndex + 1}</h2>
                {caseResults.length > 0 && (
                    <div>
                        <p>내용 전문: {caseResults[currentCaseIndex].content || "내용이 없습니다"}</p>
                    </div>
                )}
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <button onClick={handlePreviousCase} disabled={currentCaseIndex === 0}>◀</button>
                    <button onClick={handleNextCase} disabled={currentCaseIndex === caseResults.length - 1}>▶</button>
                </div>
            </Modal>
        </>
    );
};

export default Chatbot;